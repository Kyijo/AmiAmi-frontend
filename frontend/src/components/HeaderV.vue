<template>
  <header>
    <div class="top-0 flex justify-between items-center px-4">
      <div class="w-20">
        <router-link to="/Home">
          <img src="../assets/img/logo.png" alt="website logo" class="rounded-full">
        </router-link>
      </div>
      <nav class="flex justify-center">
        <router-link to="/About" class="px-4">About</router-link>
        <router-link to="/Post" class="px-4">Post</router-link>
        <router-link to="/Signin" class="px-4">Sign in</router-link>
        <router-link to="/Login" class="px-4">Log in</router-link>
      </nav>
    </div>
  </header>
</template>


<style>
.router-link-active {
  font-weight: bold;
  color: #85658D;
  background-color: #fff;
}
</style>

<script>
import Router from '../Routes/Router.js'

export default {
  name: 'HeaderV',
  components: {
    Router
  },
  methods: {
  redirect(route) {
    this.$router.push(route)
  }
}
}
</script>

<style scoped>
</style>
