import AxiosService from './axios.service'
import { useAuthStore } from '../stores/auth.store'
import { useCartStore } from '../stores/cart.store'

class CartService {
  constructor(path = '/api/cart') {
    this.apiClient = new AxiosService(path).client
    this.authStore = useAuthStore()
    this.cartStore = useCartStore()
  }
  async get() {
    let rs = await this.apiClient.get('/', {
      headers: {
        Authorization: this.authStore.token,
      },
    })
    console.log(rs)
    this.cartStore.details = rs.data.data.cart
    return rs.data
  }
  async delete() {
    let rs = await this.apiClient.delete('/delete', {
      headers: {
        Authorization: this.authStore.token,
      },
    })
    this.refresh()
    return rs.data
  }
  async addBookToCart(bookId) {
    let rs = await this.apiClient.post(
      `/${bookId}`,
      {},
      {
        headers: {
          Authorization: this.authStore.token,
        },
      }
    )
    this.refresh()
    return rs.data
  }
  async updateBookInCart(data) {
    let rs = await this.apiClient.put(`/updateBookInCart`, data, {
      headers: {
        Authorization: this.authStore.token,
      },
    })
    this.refresh()
    return rs.data
  }
  async deleteBookFromCart(bookId) {
    let rs = (
      await this.apiClient.delete(`/${bookId}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    )
    this.refresh()
    return rs.data
  }
  async refresh() {
    this.get()
  }
}

export default CartService
