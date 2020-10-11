<template>
  <div class="fakeScreen">
    <h1 class="terminal-title">
      <img src="@/assets/images/logo.png" alt="Linux Logo" />
      LINUX Command
    </h1>
    <p class="line1">
      $ learning basic of Linux Command...<span class="cursor1">_</span>
    </p>
    <p class="line2">
      - walk throgh the basics of LINUX command... that helps you to get
      started 😎😎<span class="cursor2">_</span>
    </p>
    <p class="line3">
      [?] Would you like to continue? <br />
      (Press enter to continue)<span class="cursor3">_</span>
    </p>
    <p class="line4" v-if="userChoice">
      > 🏁🏁 Let's Start<span class="cursor4">_</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  data() {
    return {
      userChoice: false,
      continueEvent: null
    }
  },
  methods: {
    handleKeyDown: function(e) {
      if(e.which === 13) {
        this.userChoice = true;
      }
    }
  },
  created() {
    this.continueEvent = document.addEventListener('keydown', (e) => this.handleKeyDown(e));
  },
  beforeDistroy() {
    document.removeEventListener('keydown', (e) => this.handleKeyDown(e));
  }
};
</script>

<style scoped>
@import "./../../assets/css/terminal.css";
</style>