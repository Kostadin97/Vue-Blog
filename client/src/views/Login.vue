<template>
  <div class="row">
    <div class="card mx-auto">
      <div class="card-header text-white bg-dark">
        <h4>Login</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              v-model="username"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
          <input type="submit" class="btn btn-dark" value="Login" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import authServices from "../services/authServices";
import store from "../store";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // ...mapActions(["login"]),
    async loginUser() {
      store.commit("auth_request");
      let user = {
        username: this.username,
        password: this.password,
      };

      try {
        let res = await authServices.login(user);
        if (res.data.success) {
          const token = res.data.token;
          const user = res.data.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          store.commit("auth_success", token, user);
          this.$router.push("/");
        }
      } catch (error) {
        store.commit("auth_error", error);
      }
    },
  },
};
</script>

<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>
