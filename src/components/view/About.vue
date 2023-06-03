<template>
<div class="flex justify-between items-center px-4">
    <HeaderLogo/>
    <HeaderNavigation
        :isLoggedIn="isLoggedIn"
        :username="username"
        :showDropdown="showDropdown"
        @toggle-dropdown="toggleDropdown"
        @logout="logout"
        class="relative z-10"
      />
    </div>
    <div>
      <div class="container mx-auto py-10 px-4">
        <h1 class="text-4xl text-center font-bold text-white mb-8">About</h1>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <img src="https://vuejs.org/images/logo.png" alt="Vue.js logo" class="h-10 mr-4">
            <p class="text-white font-bold">Vue.js</p>
          </div>
          <div class="flex items-center mb-4 md:mb-0 mx-4">
            <img src="https://vitejs.dev/logo.svg" alt="Vite.js logo" class="h-10 mr-4">
            <p class="text-white font-bold">Vite.js</p>
          </div>
          <div class="flex items-center mb-4 md:mb-0">
            <img src="https://tailwindui.com/img/tailwindui-logo.svg" alt="TailwindCSS logo" class="h-10 mr-4">
            <p class="text-white font-bold">TailwindCSS</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center mt-4">
          <div class="flex items-center mb-4 md:mb-0">
            <img src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" alt="Java logo" class="h-10 mr-4">
            <p class="text-white font-bold">Java</p>
          </div>
          <div class="flex items-center mb-4 md:mb-0 mx-4">
            <img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" alt="Spring logo" class="h-10 mr-4">
            <p class="text-white font-bold">Spring</p>
          </div>
          <div class="flex items-center mb-4 md:mb-0">
            <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL logo" class="h-10 mr-4">
            <p class="text-white font-bold">PostgreSQL</p>
          </div>
        </div>
        <p class="text-center text-white mt-8">The backend for this project is built using Java and Spring, with a PostgreSQL database hosted on DigitalOcean.</p>
        <p class="text-center text-white mt-4">The whole project can be found on Github in the footer.</p>
        <p class="text-center text-white mt-8 text-lg font-medium">Created by <span class="text-blue-400">Kyijo</span></p>
      </div>
    </div>
    <Footer/>
  </template>
  
  <script>
    import HeaderLogo from '../layout/HeaderComponents/HeaderLogo.vue';
    import HeaderNavigation from '../layout/HeaderComponents/HeaderNavigation.vue';
    import VueJwtDecode from 'vue-jwt-decode';
    import Footer from '../layout/Footer.vue';

  export default {
    name: 'About', 
    components: {
      HeaderLogo,
      HeaderNavigation,
      Footer
    },
    data() {
    return {
      isLoggedIn: false,
      username: '',
      showDropdown: false,
    }
    },
    created() {
    this.checkLogin();
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    checkLogin() {
      const token = sessionStorage.getItem('token');
      if (token) {
        this.isLoggedIn = true;
        this.decodeToken(token);
      } else {
        this.isLoggedIn = false;
      }
    },
    decodeToken(token) {
      const decoded = VueJwtDecode.decode(token);
      if (decoded) {
        this.username = decoded.name;
      }
    },
    logout() {
      sessionStorage.removeItem('token');
      this.$router.push('/login');
    },
  }
}
  </script>
  