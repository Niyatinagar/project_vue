<!-- /* eslint-disable */ -->
<template>
  <div>
    <NavMenu />
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import axios from 'axios'

import NavMenu from "@/components/NavMenu";
import FooterPage from "@/components/FooterPage";

export default {
  name: "App",
  components: {
    NavMenu,
    FooterPage
  },
  beforeCreate() {
    this.$store.commit("initializeStore")

    const token = this.$store.state.user.token

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token
    } else {
      axios.defaults.headers.common["Authorization"] = ""
    }
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
