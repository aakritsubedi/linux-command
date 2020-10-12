<template>
  <div class="intro-container">
    <img src="@/assets/images/logo.png" alt="Linux" />
    <h2 class="intro-title">Linux</h2>
    <div class="title-desc">
      <p>
        Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.
      </p>
      <p>
        Linux is software that sits underneath all of the other software on a computer, receiving requests from those programs and relaying these requests to the computer's hardware.
      </p>
      <ul class="intro-keypoints">
        <li><strong>Initial Release Date: </strong> September 17, 1991</li>
        <li><strong>OS family: </strong> Unix-like</li>
        <li><strong>Developer: </strong> Community; Linus Torvalds</li>
        <li><strong>License: </strong> GPLv2 and others (the name "Linux" is a trademark)</li>
        <li><strong>Written in:</strong> C, Assembly language</li>
      </ul>
      <a href="https://en.wikipedia.org/wiki/Linux" target="_blank">Read More</a>
    </div>
    <router-link to='/home' class="intro-next">
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style scoped>
.intro-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.intro-container img {
  width: 125px;
  height: 125px;
}
.intro-title {
  font-size: 75px;
  font-weight: bold;
  color: #eb542fd8;
}
.title-desc {
  width: 50%;
  text-align: justify;
}
.intro-keypoints {
  margin: 10px 0;
  padding: 0 25px;
}
.intro-next {
  right: 15px;
  bottom: 15px;
  border: none;
  cursor: pointer; 
  color: #ffffff;
  padding: 5px 10px;
  font-weight: bold;
  position: absolute;
  border-radius: 3px;
  text-decoration: none;
  background-color: #5feb5f;
}
</style>