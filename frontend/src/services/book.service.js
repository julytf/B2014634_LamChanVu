import AxiosService from './axios.service'
import { useAuthStore } from '../stores/auth.store'

class BookService {
  constructor(path = '/api/books') {
    this.apiClient = new AxiosService(path).client
    this.authStore = useAuthStore()
  }
  async getAll({ page = 1, perPage = 12, q = '' }) {
    let rs = await this.apiClient.get('/', {
      params: { page, perPage, q },
    })
    console.log(rs)
    return rs.data
  }
  // async deleteAll() {
  //   return (await this.apiClient.delete('/')).data
  // }
  async getOne(id) {
    return (await this.apiClient.get(`/${id}`)).data
  }
  async createOne(data) {
    return (
      await this.apiClient.post('/', data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async updateOne(id, data) {
    return (
      await this.apiClient.put(`/${id}`, data, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
  async deleteOne(id) {
    return (
      await this.apiClient.delete(`/${id}`, {
        headers: {
          Authorization: this.authStore.token,
        },
      })
    ).data
  }
}

export default BookService
