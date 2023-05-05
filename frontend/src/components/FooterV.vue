<template>
    <footer class="py-6">
      <div class="container mx-auto px-4">
        <div class="flex justify-center items-center">
          <div class="flex items-center">
            <img src="../assets/img/logo.png" alt="Logo" class="h-8 mr-4 rounded-full">
            <p class="font-bold text-white">AmiAmi</p>
          </div>
          <nav class="flex items-center">
            <router-link to="/Home" class="px-4 text-white hover:text-blue-600">Home</router-link>
            <router-link to="/About" class="px-4 text-white hover:text-blue-600">About</router-link>
            <router-link to="/Contact" class="px-4 text-white hover:text-blue-600">Contact</router-link>
          </nav>
        </div>
      </div>
    </footer>
  </template>
  
  
  <script>
import Router from '../Routes/Router.js'
  
  export default {
    name: 'Footer',
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
  