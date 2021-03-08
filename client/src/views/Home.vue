<template>
  <div class="container">
    <div class="row">
      <div
        v-for="post in posts"
        :key="post._id"
        class="col-lg-4 col-md-6 col-sm-12 card-div"
      >
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="post.imageUrl" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>

            <p class="card-text">
              {{ post.description }}
            </p>
            <router-link
              class="btn btn-light card-link"
              :to="`/edit/${post._id}`"
              >Edit</router-link
            >
            <router-link
              class="btn btn-dark card-link"
              :to="`/details/${post._id}`"
              >Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios.get("http://localhost:5000/api/posts").then((result) => {
      this.posts = result.data;
    });
    // console.log(this.posts);
  },
};
</script>

<style>
.card-div {
  margin-top: 30px;
}
</style>
