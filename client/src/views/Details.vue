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
        <p>{{ post.description }}</p>
        <router-link class="btn btn-dark card-link" :to="`/edit/${post._id}`"
          >Details</router-link
        >
        <a class="btn btn-dark card-link" href="#">Like</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import image from "../assets/pexels-lumn-316466.jpeg";

export default {
  data() {
    return {
      post: {},
      image,
    };
  },
  created() {
    const postId = this.$route.params.postId;
    axios.get(`http://localhost:5000/api/posts/${postId}`).then((result) => {
      this.post = result.data;
    });
  },
};
</script>

<style></style>
