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
        <LikePost />
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
              <button class="btn btn-dark form-button">
                Comment
              </button>
            </form>
          </div>
          <p
            style="text-align: left;"
            v-for="(comment, index) in post.comments"
            :key="index"
          >
            {{ comment.author.username }}: {{ comment.comment }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
import postServices from "../services/postServices";
import LikePost from "../components/LikePost";

export default {
  data() {
    return {
      uniqueKey: 0,
      userId: "",
      post: {},
      commentText: "",
      likesLength: 0,
    };
  },
  components: {
    LikePost,
  },
  methods: {
    deletePost() {
      // const postId = this.$route.params.postId;
      // axios
      //   .delete(`http://localhost:5000/api/posts/delete/${postId}`)
      //   .then(() => {
      //     this.$router.push(`/`);
      //   });
    },

    commentPost() {
      //   const postId = this.$route.params.postId;
      //   const commentBody = {
      //     comment: this.commentText,
      //   };
      //   axios
      //     .put(`http://localhost:5000/api/posts/comment/${postId}`, commentBody)
      //     .then(() => {
      //       this.$router.go();
      //     });
    },
  },
  async created() {
    const token = localStorage.getItem("token").slice(7);
    let decoded = jwt.verify(token, "yoursecret");
    this.userId = decoded._id;

    const postId = this.$route.params.postId;

    postServices.getOne(postId).then((res) => {
      this.post = res.data;
      // this.likesLength = res.data.likes.length;
      if (res.data.likes.includes(decoded._id)) {
        this.hasLiked = true;
      } else {
        this.hasLiked = false;
      }
    });
  },
};
</script>

<style>
a {
  border-radius: 10px;
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
