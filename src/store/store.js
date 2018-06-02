import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentCity: '北京'
  },
  getters: {
    getCurrentCity (state) {
      return state.currentCity
    }
  },
  mutations: {
    setCurrentCity (state, payload) {
      state.currentCity = payload
    }
  },
  actions: {
    setCurrentCity (context, payload) {
      context.commit('setCurrentCity', payload)
    }
  }

})

export default store
