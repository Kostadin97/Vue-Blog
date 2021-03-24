<template>
  <div class="container">
    <h1 v-if="isLoggedIn" class="latest-posts-h1">Latest Posts</h1>
    <h1 v-if="!isLoggedIn" class="latest-posts-h1">
      Sign-In or Sign-Up To See All Posts or to Create a Post
    </h1>
    <hr />
    <div class="row" v-if="isLoggedIn">
      <div id="card" class="card" v-for="post in posts" :key="post._id">
        <img
          style="height: 180px;"
          class="card-img-top"
          :src="post.imageUrl"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>

          <p class="card-text">
            {{ post.description.slice(0, 30) + "..." }}
          </p>

          <router-link
            class="btn btn-dark card-link"
            style="float: left; width: 100%;"
            :to="`/details/${post._id}`"
            >Details</router-link
          >
        </div>
      </div>
    </div>
    <div v-if="!isLoggedIn" style="text-align: center;">
      <ul style="list-style-type: none; margin-top: 60px;" class="row">
        <li class="nav-item col-lg-6" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link btn btn-primary"
            >Sign into your existing account!</router-link
          >
        </li>
        <li class="nav-item col-lg-6" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link btn btn-primary">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import postServices from "../services/postServices";
import store from "../store";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  created() {
    store.commit("getall_request");
    postServices
      .getAll()
      .then((res) => {
        store.commit("getall_success");
        this.posts = res.data;
      })
      .catch((error) => {
        store.commit("getall_error", error);
      });
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
  margin-left: 6%;
  margin-top: 20px;
}

.latest-posts-h1 {
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: center;
}

router-link {
  border-radius: 30px;
}
</style>
