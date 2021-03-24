<template>
  <div class="row">
    <div class="col-md-4" style="float: left;">
      <button
        v-if="!isSaved"
        v-on:click="savePost"
        class="btn btn-primary"
        style="color: white; float: left;"
      >
        Save
      </button>
    </div>

    <div class="col-lg-8" v-if="isSaved">You have already saved that post!</div>
  </div>
</template>

<script>
import postServices from "../services/postServices";
export default {
  data() {
    return {
      rerender: false,
      isSaved: false,
      savedPosts: [],
      post: {},
    };
  },

  methods: {
    async loadPosts() {
      const currentPostId = await this.$route.params.postId;
      postServices.getSavedPosts().then((result) => {
        let postsIdsArray = result.data;
        if (postsIdsArray.includes(currentPostId)) {
          this.isSaved = true;
        } else {
          this.isSaved = false;
        }
      });
    },

    async savePost() {
      const currentPostId = await this.$route.params.postId;
      postServices.savePost(currentPostId).then(() => {
        this.isSaved = true;
      });
    },
  },
  async created() {
    await this.loadPosts();
  },
};
</script>
