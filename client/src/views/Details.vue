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
              v-on:click="deletePost"
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
        <br />
        <p style="text-align: left;">{{ post.description }}</p>
        <br />
        <br />
        <div class="row">
          <div v-if="!post.likes.includes(userId)" class="col-lg-6">
            <button v-on:click="likePost" class="btn btn-primary" style="color: white;">Like</button>
          </div>
          <div v-if="post.likes.includes(userId)" class="col-lg-6">
            <button v-on:click="unlikePost" class="btn btn-primary" style="color: white;">Unlike</button>
          </div>
          <div class="col-lg-6">Likes: {{ likesLength }}</div>
        </div>
        <br />
        <h5>Comments</h5>
        <div style="margin-top: 20px;">
          <div style="width: 100%; padding: 10px;">
            <form @submit.prevent="commentPost">
              <div class="form-group form-input">
                <input
                  id="commentText"
                  type="text"
                  name="commentText"
                  class="form-control"
                  placeholder="Place your comment here..."
                  v-model="commentText"
                />
              </div>
              <button class="btn btn-dark form-button">Comment</button>
            </form>
          </div>
          <p style="text-align: left;" v-for="(comment, index) in post.comments" :key="index">{{comment.author.username}}: {{comment.comment}}</p>
          <!-- <div class="col-lg-4" style="float: right; width: 30%;">
            <a href="#" class="btn btn-dark card-link">Comment</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jwt from 'jsonwebtoken';

export default {
  data() {
    return {
      userId: "",
      post: {},
      commentText: "",
      likesLength: 0,
    };
  },
  methods: {
    likePost() {
      const postId = this.$route.params.postId;
      axios.get(`http://localhost:5000/api/posts/like/${postId}`).then(() => {
        this.$router.go();
      });
    },
    unlikePost() {
      const postId = this.$route.params.postId;
      axios.get(`http://localhost:5000/api/posts/unlike/${postId}`).then(() => {
        this.$router.go();
      });
    },
    
    deletePost() {
      const postId = this.$route.params.postId;
      axios.delete(`http://localhost:5000/api/posts/delete/${postId}`).then(() => {
        this.$router.push(`/`);
      });
    },

    commentPost() {
      const postId = this.$route.params.postId;
      const commentBody = {
        comment: this.commentText
      };
      axios
        .put(`http://localhost:5000/api/posts/comment/${postId}`, commentBody)
        .then(() => {
          this.$router.go();
        });
    },
  },

  created() {
    const token = localStorage.getItem('token').slice(7);
    let decoded = jwt.verify(token, 'yoursecret');
    this.userId = decoded._id;

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
.form-input {
  display: inline-block;
  width: 65%;
}
.form-button {
  display: inline-block;
  width: 30%;
  margin-left: 10px;
  margin-bottom: 5px;
}
</style>
