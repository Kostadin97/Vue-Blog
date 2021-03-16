<template>
  <div class="container">
    <div class="row">
      <div
        v-for="post in posts"
        :key="post._id"
        class="col-lg-4 col-md-6 col-sm-12 card-div"
      >
        <div id="card" class="card" style="width: 18rem;">
          <img class="card-img-top" :src="post.imageUrl" alt="Card image cap" />
          <div class="card-body">
            <h5  class="card-title">{{ post.likes.includes() }}</h5>

            <p class="card-text">
              {{ post.description.slice(0, 90) + "..." }}
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
  },
};
</script>

<style>
.card {
  border-radius: 30px;
}
.card-div {
  margin-top: 30px;
}


router-link {
  border-radius: 30px;
}
</style>
