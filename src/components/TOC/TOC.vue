<template>
  <div class="toc-container">
    <table class="table">
      <thead>
        <th>SN</th>
        <th>Command</th>
        <th>Description</th>
        <th>Options</th>
      </thead>
      <tbody>
        <tr v-for="(unit, id) in toc" :key="id">
          <td width="5%">{{ unit.sn }}.</td>
          <td width="15%">
            <span class="command">{{ unit.command }}</span>
          </td>
          <td>{{ unit.desc }}</td>
          <td width="10%" style="text-align: center;">
            <router-link :to='`/command/${unit.command}`'>
              <i class="fa fa-eye"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as toc from "@/constant/command";

export default {
  name: "TOC",
  data() {
    return {
      toc: toc.tableOfContent,
    };
  },
};
</script>

<style scoped>
@import "./../../assets/css/toc.css";
</style>