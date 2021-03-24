<template>
  <div>
    <h2>Profile</h2>
    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import authServices from "../services/authServices";
import store from "../store";

export default {
  computed: mapGetters(["user"]),
  async created() {
    store.commit("profile_request");
    let res = await authServices.getProfile();
    if (res.data.user) {
      store.commit("user_profile", res.data.user);
    }
  },
};
</script>

<style></style>
