import axios from "axios";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  error: null,
};

const getters = {
  creationError: (state) => state.error,
};

const actions = {
  async getAll({ commit }) {
    try {
      commit("getAll_request");
      let res = await axios.get("http://localhost:5000/api/posts");
      if (res.data.success !== undefined) {
        commit("getAll_success");
      }
      return res;
    } catch (error) {
      commit("getAll_error", error);
    }
  },

  async getOne({ commit }, postId) {
    try {
      commit("getOne_request");
      let res = await axios.get(`http://localhost:5000/api/posts/${postId}`);
      if (res.data.success !== undefined) {
        commit("getOne_success");
      }
      return res;
    } catch (error) {
      commit("getOne_error", error);
    }
  },

  async editPost({ commit }, postId, postData) {
    try {
      commit("edit_request");
      let res = await axios.put(
        `http://localhost:5000/api/posts/edit/${postId}`,
        postData
      );
      commit("edit_success");
      return res;
    } catch (error) {
      commit("edit_error", error);
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
};

const mutations = {
  getAll_request(state) {
    state.error = null;
    state.status = "loading";
  },
  getAll_success(state) {
    state.error = null;
    state.status = "success";
  },
  getAll_error(state, err) {
    state.error = err.response.data.msg;
  },
  getOne_request(state) {
    state.error = null;
    state.status = "loading";
  },
  getOne_success(state) {
    state.error = null;
    state.status = "success";
  },
  getOne_error(state, err) {
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
};

export default {
  state,
  actions,
  mutations,
  getters,
};
