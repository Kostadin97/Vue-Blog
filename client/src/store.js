import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

import Auth from "./Warehouse/Auth";
import Post from "./Warehouse/Post";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Post,
  },
  state: {},
  mutations: {},
  actions: {
    async editPost(postId, postData, context) {
      context.commit("editLoadingState", true);
      let res = axios.put(
        `http://localhost:5000/api/posts/edit/${postId}`,
        postData
      );
      context.commit('editPost', res.data.results);
      context.commit('editLoadingState', false);
    },
  },
});
