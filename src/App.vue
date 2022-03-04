<script setup>
import CardList from './components/CardList.vue';
import NavBar from './components/NavBar.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>

  <NavBar/>
  <!-- <CardList /> -->
  <!-- <div> -->
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/user">Users</router-link> -->
    <!-- name을 쓰면 상속받아야 한다.  -->
    <!-- <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'about'}">About</router-link>
    <router-link :to="{name: 'users'}">Users</router-link> -->
  <!-- </div> -->
<router-view></router-view>
</template>

<style>
* {
  padding:0px;
  margin:0px;
}
</style>
