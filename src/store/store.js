import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      page: 'dota2',
    },
  
    mutations: {
      getPage (state, payload) {
        state.page = payload
      },
      
    }
  })
