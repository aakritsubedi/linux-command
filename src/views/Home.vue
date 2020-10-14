<template>
  <div class="home-container">
    <Navigation selectedTab='Table of content' />
    <div class="banner">
    </div>
    <TOC />
  </div>
</template>

<script>
import TOC from '@/components/TOC/TOC';
import Navigation from '@/components/Navigation/Navigation';

export default {
  name: 'Home',
  components: {
    TOC,
    Navigation
  }
}
</script>

<style scoped>
  .banner {
    background-image: url('./../assets/images//linux-bg.jpeg');
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    height: 225px;
    width: 100%;
    background-color: #000000;
  }
  .home-container {
    background-color: #ffffff;
    min-height: 100vh;
    color: #000000;
  }
</style>