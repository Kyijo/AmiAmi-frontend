<template>
  <header>
    <div class="top-0 flex justify-between items-center px-4">
      <div class="w-20">
        <!-- logo of the website that will redirect to home page once you click on it-->
        <router-link to="/">
          <img src="../assets/img/logos/logo.png" alt="website logo" class="rounded-full logo">
        </router-link>
      </div>
      <!--navbar to -->
      <nav class="flex justify-center">
        <router-link to="/Post" class="px-4 text-white hover:text-green-600 h-7 hover:font-bold">Post</router-link>
        <router-link to="/Signin" class="px-4 text-white hover:text-blue-600 bg-green-500 rounded-lg h-7 font-bold">Sign in</router-link>
        <router-link to="/Login" class="px-4 text-white hover:text-blue-600">Log in</router-link>
      </nav>
    </div>
    <div class="grid gap-4 content-between px-4">
  <!-- div to view all tags that are available on the website -->
  <span class="left-20 relative w-max px-4 font-bold text-white">SOME TAGS</span>
  <div class="flex justify-around">
    <!-- div to show some tags -->
    <a href="#" class="relative block w-20 h-20 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="absolute inset-0 bg-center bg-cover" id="tag"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-bold text-center bg-black bg-opacity-50">Gaming</div>
    </a>
    <a href="#" class="relative block w-20 h-20 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="absolute inset-0 bg-center bg-cover" id="tag2"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-bold text-center bg-black bg-opacity-50">Funny</div>
    </a>
    <a href="#" class="relative block w-20 h-20 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="absolute inset-0 bg-center bg-cover" id="tag3"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-bold text-center bg-black bg-opacity-50">Anime</div>
    </a>
    <a href="#" class="relative block w-20 h-20 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="absolute inset-0 bg-center bg-cover" id="tag6"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-bold text-center bg-black bg-opacity-50">Space</div>
    </a>
    <a href="#" class="relative block w-20 h-20 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
     <div class="absolute inset-0 bg-center bg-cover" id="tag5"></div>
     <div class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-bold text-center bg-black bg-opacity-50">Photo</div>
    </a>
    <a href="#" class="relative block w-20 h-20 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
      <div class="absolute inset-0 bg-center bg-cover" id="tag4"></div>
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-bold text-center bg-black bg-opacity-50">Art</div>
    </a>
  </div>
  <a href="#" class="right-20 absolute px-4 text-white hover:text-blue-600 font-bold">VIEW ALL TAGS</a>
</div>
  </header>
</template>

<style>
.router-link-active {
  font-weight: bold;
  color: #85658D;
}
/* I really wanted to use tailwind to load these PNGs but i got gapped by frontend*/
#tag{
  background-image: url('../assets/img/bg-tag/bg-gaming.png');
}
#tag2{
  background-image: url('../assets/img/bg-tag/bf-funny.png');
}
#tag3{
  background-image: url('../assets/img/bg-tag/bg-anime.png');
}
#tag4{
  background-image: url('../assets/img/bg-tag/bg-art.png');
}
#tag5{
  background-image: url('../assets/img/bg-tag/bg-photo.png');
}
#tag6{
  background-image: url('../assets/img/bg-tag/bg-space.png');
}
.logo {
  transition: all 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.05);
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