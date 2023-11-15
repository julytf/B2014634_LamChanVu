import { defineStore } from 'pinia'

export const useAdminAuthStore = defineStore('adminAuth', {
  state: () => {
    return {
      token: localStorage.getItem('token'),
      user: null,
    }
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
  },
})
