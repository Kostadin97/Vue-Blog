<template>
  <div class="col-lg-6">Likes: {{likesLength}}</div>
</template>

<script>
// import postServices from "../services/postServices";

export default {
  props: ["likesLength"],
  data() {
    return {
    };
  },
  async created() {
    // let postId = this.$route.params.postId;
    // let res = await postServices.getOne(postId);
    // this.likesLength = res.data.likes.length;
    // console.log(likesLength);
  },
};
</script>

<style></style>
