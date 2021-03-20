<template>
  <div class="container">
    <h1 class="latest-posts-h1">Saved Posts</h1>
    <hr />
    <div class="row">
      <div id="card" class="card" v-for="post in posts" :key="post._id">
        <img
          style="max-height: 190px;"
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
            class="btn btn-light card-link"
            style="float: left; width: 45%;"
            :to="`/edit/${post._id}`"
          >
            Edit
          </router-link>
          <router-link
            class="btn btn-dark card-link"
            style="float: left; width: 45%;"
            :to="`/details/${post._id}`"
            >Details</router-link
          >
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
    axios.get("http://localhost:5000/api/posts/saved").then((result) => {
      // this.posts = result.data;
      let postsIdsArray = result.data;
      postsIdsArray.forEach((postId) => {
        axios.get(`http://localhost:5000/api/posts/${postId}`).then((res) => {
          // console.log(res);
          this.posts.push(res.data);
        });
      });
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
