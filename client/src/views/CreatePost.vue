<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Create Post</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="createPost">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                v-model="title"
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
                v-model="description"
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
                v-model="imageUrl"
                class="form-control"
              />
              <button class="btn btn-dark">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    ...mapActions(["create"]),
    createPost() {
      let post = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
      };
      this.create(post).then((res) => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
.card {
  width: 60%;
}
a {
  border-radius: 10px;
}
</style>
