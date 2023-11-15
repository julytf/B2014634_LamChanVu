import AxiosService from './axios.service'
import { useAuthStore } from '../stores/auth.store'

class BookService {
  constructor(path = '/api/users') {
    this.apiClient = new AxiosService(path).client
    this.authStore = useAuthStore()
  }
  async getAll() {
    return (await this.apiClient.get('/', {
      headers: {
        Authorization: this.authStore.token,
      },
    })).data
  }
  // async deleteAll() {
  //   return (await this.apiClient.delete('/')).data
  // }
  // async getOne(id) {
  //   return (await this.apiClient.get(`/${id}`)).data
  // }
  // async createOne(data) {
  //   return (await this.apiClient.post('/', data)).data
  // }
  async updateOne(id, data) {
    return (await this.apiClient.put(`/${id}`, data, {
      headers: {
        Authorization: this.authStore.token,
      },
    })).data
  }
  // async deleteOne(id) {
  //   return (await this.apiClient.delete(`/${id}`)).data
  // }
}

export default BookService