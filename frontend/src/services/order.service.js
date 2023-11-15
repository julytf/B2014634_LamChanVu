import AxiosService from './axios.service'
import { useAuthStore } from '../stores/auth.store'

class OrderService {
  constructor(path = '/api/orders') {
    this.apiClient = new AxiosService(path).client
    this.authStore = useAuthStore()
  }
  async getAll() {
    return (
      await this.apiClient.get('/myOrders', {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async createOne(data) {
    return (
      await this.apiClient.post('/createOne', data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async deleteOne(id) {
    return (
      await this.apiClient.delete(`/deleteOne/${id}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async getOne(id) {
    return (
      await this.apiClient.get(`/getOne/${id}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async updateOne(id, data) {
    return (
      await this.apiClient.put(`/${id}`,data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async buyFromCart() {
    return (
      await this.apiClient.get('/buyFromCart', {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
}

export default OrderService
