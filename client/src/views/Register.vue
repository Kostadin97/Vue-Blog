<template>
  <div class="row">
    <div class="card mx-auto">
      <div class="card-header text-white bg-dark">
        <h4>Register</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="registerUser">
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
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              v-model="name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              v-model="email"
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
          <div class="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              name="confirm_password"
              id="confirm_password"
              v-model="confirm_password"
            />
          </div>
          <button class="btn btn-dark">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authServices from "../services/authServices";
import store from "../store";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: "",
    };
  },
  methods: {
    async registerUser() {
      store.commit("register_request");
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
      };
      try {
        let res = await authServices.register(user);
        if (res.data.success !== undefined) {
          store.commit("register_success");
          this.$router.push("login");
        }
      } catch (error) {
        store.commit("register_error", error);
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
