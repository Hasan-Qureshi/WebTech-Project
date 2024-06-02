import { createStore } from 'vuex'

export default createStore({
  state: {
    profile: {
      name: 'Your Name',
      courseYear: '3rd Year',
      matricNo: 'A21MJ0139',
      address: 'Your Address',
      phoneNumber: 'Your Phone Number'
    }
  },
  mutations: {
    updateProfile(state, payload) {
      state.profile = { ...state.profile, ...payload }
    }
  },
  actions: {
    saveProfile({ commit }, profile) {
      commit('updateProfile', profile)
    }
  },
  getters: {
    getProfile(state) {
      return state.profile
    }
  }
})
