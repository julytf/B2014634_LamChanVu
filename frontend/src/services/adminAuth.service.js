import AxiosService from './axios.service'
import { useAdminAuthStore } from '../stores/adminAuth.store'
import CartService from './cart.service'

class AuthService {
  constructor(path = '/api/auth') {
    this.apiClient = new AxiosService(path).client
    this.adminAuthStore = useAdminAuthStore()
    this.cartService = new CartService()
    if (this.adminAuthStore.token && !this.adminAuthStore.user) {
      this._tryLoginWithToken()
    }
  }
  async register(data) {
    let rs = await this.apiClient.post('/register', data)
    this.adminAuthStore.setToken(rs.data.token)
    this.adminAuthStore.user = rs.data.data.user
    this.cartService.refresh()
    return rs.data
  }
  async login(data) {
    let rs = await this.apiClient.post('/login', data)
    // console.log(rs.data.token);
    this.adminAuthStore.setToken(rs.data.token)
    if (rs.data.data.user.role != 'admin') return
    this.adminAuthStore.user = rs.data.data.user
    this.cartService.refresh()
    return rs.data
  }
  async logout() {
    this.adminAuthStore.setToken(null)
    this.adminAuthStore.user = null
  }
  async _tryLoginWithToken() {
    let rs = await this.apiClient.get('/getMe', {
      headers: {
        Authorization: this.adminAuthStore.token,
      },
    })
    if (rs.data.status != 'success') {
      this.adminAuthStore.setToken(null)
      return
    }
    this.adminAuthStore.user = rs.data.data.user
    this.cartService.refresh()
    return
  }
}

export default AuthService
