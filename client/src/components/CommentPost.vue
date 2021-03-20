<template>
  <div>
    <p
      style="text-align: left;"
      v-for="(comment, index) in post.comments"
      :key="index"
    >
      {{ comment.author.username }}: {{ comment.comment }}
    </p>
  </div>
</template>

<script>
import postServices from "../services/postServices";

export default {
  data() {
    return {
      post: [],
    };
  },
  methods: {
    async loadPosts() {
      let postId = await this.$route.params.postId;
      let res = await postServices.getOne(postId);
      this.post = res.data;
    },
  },
  created() {
    this.loadPosts();
  },
};
</script>

<style></style>
