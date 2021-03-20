<template>
  <div class="container">
    <h1 class="latest-posts-h1">My Posts</h1>
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
            class="btn btn-dark card-link"
            style="width: 100%;"
            :to="`/details/${post._id}`"
            >Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
import postServices from "../services/postServices";

export default {
  name: "home",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async loadPosts() {
      const token = localStorage.getItem("token").slice(7);
      const userId = jwt.verify(token, "yoursecret")._id;

      let res = await postServices.getMyPosts();
      let allPosts = await res.data;
      allPosts.map((x) => {
        if (x.author === userId) {
          this.posts.push(x);
        }
      });
    },
  },
  async created() {
    await this.loadPosts();
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
