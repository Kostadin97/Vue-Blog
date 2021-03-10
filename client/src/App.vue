<template>
  <div id="app">
    <Navbar />
    <br />
    <br />
    <div class="container">
      <Errors v-if="error || creationError" :msg="error || creationError" />
      <router-view />
    </div>

    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Errors,
    Footer,
  },
  computed: {
    ...mapGetters(["error"]),
    ...mapGetters(["creationError"]),
  },
};
</script>
