<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="card" style="width: 30rem;">
          <div class="card-body">
            <h5
              class="card-title"
              style="text-align: center; font-weight: bold; font-family: 'Courier New', monospace; font-size: 25px"
            >
              {{ post.title }}
            </h5>
          </div>
          <img
            class="card-img-bottom"
            :src="post.imageUrl"
            alt="Card image cap"
          />
          <div class="card-body">
            <router-link
              class="btn btn-light card-link"
              style="float: left; width: 45%;"
              :to="`/edit/${post._id}`"
            >
              Edit
            </router-link>
            <a
              class="btn btn-dark card-link"
              style="float: right; width: 45%;"
              href="#"
              >Delete</a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-6" style="text-align: center;">
        <h3
          style="text-decoration: underline; font-weight: bold; font-family: 'Courier New', monospace; font-size: 25px; margin-top: 15px;"
        >
          Description
        </h3>
        <br />
        <hr />
        <br />
        <p style="text-align: left;">{{ post.description }}</p>
        <br />
        <hr />
        <br />
        <div class="row">
          <div class="col-lg-6">
            <a v-on:click="likePost" class="btn btn-primary" href="#">Like</a>
          </div>
          <div class="col-lg-6">Likes: {{ likesLength }}</div>
        </div>
        <br />
        <h5>Comments</h5>
        <div style="margin-top: 20px;" class="row">
          <div class="col-lg-8" style="float: left; width: 65%;">
            <input
              class="form-control"
              style="width: 100%;"
              type="text"
              placeholder="Place your comment here..."
            />
            <p style="margin-top: 40px;">1. First Comment</p>
          </div>
          <div class="col-lg-4" style="float: right; width: 30%;">
            <a href="#" class="btn btn-dark card-link">Comment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {},
      likesLength: 0,
    };
  },
  methods: {
    likePost() {
      const postId = this.$route.params.postId;
      axios.get(`http://localhost:5000/api/posts/like/${postId}`).then(() => {
        this.$router.push("/");
      });
    },
  },

  created() {
    const postId = this.$route.params.postId;

    axios.get(`http://localhost:5000/api/posts/${postId}`).then((result) => {
      this.post = result.data;
      this.likesLength = result.data.likes.length;
    });
  },
};
</script>

<style>
a {
  border-radius: 10px;
}
hr {
  border-top: 1px dashed red;
}
</style>
