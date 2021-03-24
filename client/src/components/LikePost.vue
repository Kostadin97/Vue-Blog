<template>
  <div class="col-lg-6">Likes: {{ likesLength }}</div>
</template>

<script>
import postServices from "../services/postServices";

export default {
  data() {
    return {
      likesLength: 0,
    };
  },
  async created() {
    let postId = await this.$route.params.postId;
    let res = await postServices.getOne(postId);
    this.likesLength = await res.data.likes.length;
  },
};
</script>

<style></style>
