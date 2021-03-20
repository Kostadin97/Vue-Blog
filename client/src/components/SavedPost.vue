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
import axios from "axios";
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
      axios.get("http://localhost:5000/api/posts/saved").then((result) => {
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
      axios
        .put(`http://localhost:5000/api/posts/save/${currentPostId}`)
        .then(() => {
          this.isSaved = true;
        });
    },
  },
  async created() {
    await this.loadPosts();
  },
};
</script>
