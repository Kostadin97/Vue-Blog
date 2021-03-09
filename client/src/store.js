import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './Warehouse/Auth';
import Post from './Warehouse/Post';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Post
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})