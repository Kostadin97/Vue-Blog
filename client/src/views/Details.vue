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
          <div class="col-lg-6">
            <button
              v-if="!hasLiked"
              v-on:click="likePost"
              class="btn btn-primary"
              style="color: white; float: left;"
            >
              Like
            </button>

            <button
              v-if="hasLiked"
              v-on:click="unlikePost"
              class="btn btn-primary"
              style="color: white; float: left;"
            >
              Unlike
            </button>
          </div>
          <LikePost :key="uniqueLikesKey" />
        </div>

        <br />

        <div style="margin-top: 20px;">
          <h5>Comments</h5>
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
            <CommentPost :key="uniqueCommentsKey" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
import postServices from "../services/postServices";
import LikePost from "../components/LikePost";
import CommentPost from "../components/CommentPost";

export default {
  data() {
    return {
      uniqueLikesKey: 1,
      uniqueCommentsKey: 1,
      userId: "",
      post: {},
      commentText: "",
      likesLength: 0,
      hasLiked: false,
    };
  },
  components: {
    LikePost,
    CommentPost,
  },
  methods: {
    async loadPosts() {
      const token = localStorage.getItem("token").slice(7);
      const userId = jwt.verify(token, "yoursecret")._id;

      let postId = await this.$route.params.postId;
      let res = await postServices.getOne(postId);
      if (res.data.likes.includes(userId)) {
        this.hasLiked = true;
      } else {
        this.hasLiked = false;
      }
      this.post = await res.data;
    },

    async likePost() {
      const postId = await this.$route.params.postId;
      postServices.likePost(postId).then(() => {
        this.uniqueLikesKey++;
        this.hasLiked = true;
      });
    },

    async unlikePost() {
      const postId = await this.$route.params.postId;
      postServices.unlikePost(postId).then(() => {
        this.uniqueLikesKey++;
        this.hasLiked = false;
      });
    },

    async commentPost() {
      const postId = await this.$route.params.postId;
      const commentBody = {
        comment: this.commentText,
      };

      postServices.commentPost(postId, commentBody).then(() => {
        this.uniqueCommentsKey++;
        this.commentText = "";
      });
    },

    async deletePost() {
      const postId = await this.$route.params.postId;
      postServices.deletePost(postId).then(() => {
        this.$router.push("/");
      });
    },
  },
  async created() {
    await this.loadPosts();
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
