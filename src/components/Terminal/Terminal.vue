<template>
  <div class="fakeScreen">
    <h1 class="terminal-title">
      <img src="@/assets/images/logo.png" alt="Linux Logo" />
      LINUX Command
    </h1>
    <p class="para line1">
      $ learning basic of Linux Command...<span class="span cursor1">_</span>
    </p>
    <p class="para line2">
      - walk throgh the basics of LINUX command... that helps you to get
      started 😎😎<span class="span cursor2">_</span>
    </p>
    <p class="para line3">
      [?] Would you like to continue? <br />
      (Press enter to continue)<span class="span cursor3">_</span>
    </p>
    <p class="para line4" v-if="userChoice">
      > 🏁🏁 Let's Start<span class="span cursor4">_</span>
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

        setTimeout(() => {
          this.$router.push('intro');
        }, 5000);
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