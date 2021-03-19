<template>
  <div class="row">
    <div class="col-lg-6">
      <button
        v-on:click="likePost"
        class="btn btn-primary"
        style="color: white;"
      >
        Like
      </button>
    </div>
    <div class="col-lg-6">
      <button
        v-on:click="unlikePost"
        class="btn btn-primary"
        style="color: white;"
      >
        Unlike
      </button>
    </div>
    <div class="col-lg-6">Likes: {{ likesLength }}</div>
  </div>
</template>

<script>
import postServices from "../services/postServices";

export default {
  data() {
    return {
      likesLength: 0,
    };
  },
  methods: {
    async likePost() {
      try {
        const postId = this.$route.params.postId;

        postServices.likePost(postId);
        this.likesLength += 1;
      } catch (error) {
        console.log(error);
      }

      // this.likesLength++;
    },
    async unlikePost() {
      try {
        const postId = this.$route.params.postId;

        postServices.unlikePost(postId);
        this.likesLength -= 1;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    const postId = this.$route.params.postId;

    postServices.getOne(postId).then((res) => {
      this.likesLength = res.data.likes.length;
    });
  },
};
</script>

<style></style>
