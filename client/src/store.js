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
    getsavedposts_request(state) {
      state.error = null;
      state.status = "loading";
    },
    getsavedposts_success(state) {
      state.error = null;
      state.status = "success";
    },
    getsavedposts_error(state, err) {
      state.error = err.response.data.msg;
    },
    getmyposts_request(state) {
      state.error = null;
      state.status = "loading";
    },
    getmyposts_success(state) {
      state.error = null;
      state.status = "success";
    },
    getmyposts_error(state, err) {
      state.error = err.response.data.msg;
    },
    getall_request(state) {
      state.error = null;
      state.status = "loading";
    },
    getall_success(state) {
      state.error = null;
      state.status = "success";
    },
    getall_error(state, err) {
      state.error = err.response.data.msg;
    },
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
  }
});

export default store;
