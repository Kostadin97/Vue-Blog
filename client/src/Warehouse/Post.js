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
};

export default {
  state,
  actions,
  mutations,
  getters,
};
