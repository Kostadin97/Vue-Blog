import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

import Auth from "./Warehouse/Auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Auth,
  },
  state: {
    error: null,
  },
  getters: {
    creationError: (state) => state.error,
  },
  mutations: {
    getone_request(state) {
      state.error = null;
      state.status = "loading";
    },
    getone_success(state) {
      state.error = null;
      state.status = "success";
    },
    getone_error(state, err) {
      state.error = err.response.data.msg;
    },
    create_request(state) {
      state.error = null;
      state.status = "loading";
    },
    create_success(state) {
      state.error = null;
      state.status = "success";
    },
    create_error(state, err) {
      state.error = err.response.data.msg;
    },

    edit_request(state) {
      state.error = null;
      state.status = "loading";
    },
    edit_success(state) {
      state.error = null;
      state.status = "success";
    },
    edit_error(state, err) {
      state.error = err.response.data.msg;
    },

    like_request(state) {
      state.error = null;
      state.status = "loading";
    },
    like_success(state) {
      state.error = null;
      state.status = "success";
    },
    like_error(state, err) {
      state.error = err.response.data.msg;
    },

    unlike_request(state) {
      state.error = null;
      state.status = "loading";
    },
    unlike_success(state) {
      state.error = null;
      state.status = "success";
    },
    unlike_error(state, err) {
      state.error = err.response.data.msg;
    },
  },
  actions: {
    async getOne({ commit }, postId) {
      try {
        commit("getone_request");
        let res = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        commit("getone_success");
        return res;
      } catch (error) {
        commit("create_error", error);
      }
    },

    async create({ commit }, postData) {
      try {
        commit("create_request");
        let res = await axios.post(
          "http://localhost:5000/api/posts/create",
          postData
        );

        if (res.data.success !== undefined) {
          commit("create_success");
        }
        return res;
      } catch (error) {
        commit("create_error", error);
      }
    },

    async edit({ commit }, postId, postData) {
      try {
        commit("edit_request");
        let res = axios.put(
          `http://localhost:5000/api/posts/edit/${postId}`,
          postData
        );
        commit("edit_success");
        return res;
      } catch (error) {
        commit("edit_error", error);
      }
    },
  },

  async likePost({ commit }, postId) {
    try {
      commit("like_request");
      let res = axios.get(`http://localhost:5000/api/posts/like/${postId}`);
      commit("like_success");
      return res;
    } catch (error) {
      commit("like_error", error);
    }
  },

  async unlikePost({ commit }, postId) {
    try {
      commit("unlike_request");
      let res = axios.get(`http://localhost:5000/api/posts/unlike/${postId}`);
      commit("unlike_success");
      return res;
    } catch (error) {
      commit("unlike_error", error);
    }
  },
});

export default store;
