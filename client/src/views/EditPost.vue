<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Edit Post</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="editPost">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                v-model="post.title"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                id="description"
                type="text"
                placeholder="Description"
                name="description"
                v-model="post.description"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="imageUrl">Image URL</label>
              <input
                id="imageUrl"
                type="text"
                placeholder="Image URL"
                name="imageUrl"
                v-model="post.imageUrl"
                class="form-control"
              />
            </div>

            <button class="btn btn-dark">
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import postServices from "../services/postServices";

export default {
  data() {
    return {
      post: {},
      title: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    async loadPosts() {
      let postId = await this.$route.params.postId;
      let res = await postServices.getOne(postId);
      this.post = await res.data;
    },

    async editPost() {
      let postId = await this.$route.params.postId;
      let postData = {
        title: this.post.title,
        description: this.post.description,
        imageUrl: this.post.imageUrl,
      };

      store.commit("edit_request");
      postServices
        .editPost(postId, postData)
        .then((res) => {
          if (res.data.success) {
            store.commit("edit_success");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          store.commit("edit_error", error);
        });
    },
  },

  async created() {
    await this.loadPosts();
  },
};
</script>

<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>
