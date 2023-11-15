import axios from 'axios'
class AxiosService {
  #baseURL
  #client
  #commonConfig = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  constructor(path) {
    this.#baseURL = 'http://localhost:3000' + path
    this.#client = axios.create({
      baseURL: this.#baseURL,
      ...this.#commonConfig,
    })
  }
  get client() {
    return this.#client
  }
}

export default AxiosService