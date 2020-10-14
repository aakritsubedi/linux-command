<template>
  <div class="navigation">
    <div class="nav-left">
      <div class="tabs">
        <router-link to='/home'>
          <span>Learning Linux</span>
        </router-link>
      </div>
      <div class="icon">
        <span class="fa fa-github"></span>
        <span class="fa fa-code"></span>
        <span class="fa fa-cubes"></span>
      </div>
      <div class="selected-tab">
        <span class="fa fa-terminal"></span> {{ selectedTab }}
        <span class="fa fa-caret-down" style="margin-left: 5px"></span>
      </div>
    </div>
    <div class="nav-center">
      <span class="fa fa-calendar" style="margin-right: 5px"></span>
      {{ date }}
    </div>
    <div class="nav-right">
      <span class="fa fa-volume-up"></span>
      <span class="fa fa-wifi"></span>
      <span class="fa fa-battery-three-quarters"></span>
    </div>
  </div>
  <br>
  <br>
</template>

<script>
export default {
  name: "Navigation",
  props: ["selectedTab"],
  data() {
    return {
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };
  },
};
</script>

<style scoped>
@import "./../../assets/css/navigation.css";
</style>