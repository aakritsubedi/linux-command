<template>
  <Navigation :selectedTab="`Command: ${commandName}`" />
  <div class="command-container">
    <h1 class="command">{{ commandInfo.command }}</h1>
    <br />
    <p>
      {{ commandInfo.description }}
    </p>
    <ul>
      <li>{{ commandInfo.desc }}</li>
    </ul>
    <br />
    <a :href="commandInfo.link">Read More</a>
    <div class="demo">
      <img :src="getImgUrl(commandInfo.file)" :alt="commandName" />
    </div>
  </div>
</template>

<script>
import * as toc from "@/constant/command";

import Navigation from "@/components/Navigation/Navigation";

export default {
  name: "Command",
  components: {
    Navigation,
  },
  methods: {
    getImgUrl: (path) => {
      return require("../assets/images/" + path);
    },
  },
  data() {
    return {
      commandName: this.$route.params.command,
      commandInfo: toc.tableOfContent[this.$route.params.command],
    };
  },
};
</script>

<style scoped>
@import "./../../assets/css/command.css";
</style>