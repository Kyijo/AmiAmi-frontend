<template>
    <Header />
    <div class=" flex flex-col justify-center items-center">
      <div class="container mx-auto py-10 px-4">
        <h1 class="text-4xl text-center font-bold text-white mb-8">User Account Information</h1>
        <div class="flex flex-row gap-4 items-center">
  <div class="flex items-center">
  <i class="fas fa-user text-white mr-4"></i>
  <div>
    <p class="text-white font-bold text-lg mb-1">Name:</p>
    <p class="text-white text-center">{{ user.name }}</p>
  </div>
</div>
<div class="flex items-center ml-72">
  <i class="fas fa-envelope text-white mr-4"></i>
  <div>
    <p class="text-white font-bold text-lg mb-1">Email:</p>
    <p class="text-white text-center">{{ user.email }}</p>
  </div>
</div>

<div>
    <router-link to="/editaccount" class="px-4 text-white hover:text-blue-600 rounded-lg font-bold">Edit Account</router-link>
</div>
        </div>
      </div>
      <div>
        <p class="text-white font-bold text-lg mb-2">Images uploaded by you</p>
        <!--gonna do this later since my cloud is gone--> 
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import VueJwtDecode from 'vue-jwt-decode';
  import Header from '../layout/Header.vue';
  import Footer from '../layout/Footer.vue';
  
  export default {
    name: 'About',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        user: {
          name: '',
          email: ''
        }
      };
    },
    created() {
      this.checkLogin();
    },
    methods: {
      checkLogin() {
        const token = sessionStorage.getItem('token');
        if (token) {
          this.decodeToken(token);
        }
      },
      decodeToken(token) {
        const decoded = VueJwtDecode.decode(token);
        if (decoded) {
          this.user.name = decoded.name;
          this.user.email = decoded.email;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .text-lg {
    font-size: 1.125rem;
  }
  .container {
    max-width: 600px;
  }
  </style>
  