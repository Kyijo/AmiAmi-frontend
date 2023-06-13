<template>
    <nav class="flex justify-center">
      <template v-if="isLoggedIn">
        <!-- Post button -->
        <div class="relative flex items-center">
          <router-link to="/Post" class="px-4 text-white hover:text-blue-600 h-7 hover:font-bold bg-green-500 rounded-lg font-bold md-auto">
            <i class="fas fa-plus-circle mr-2"></i>
            Post
          </router-link>
          <!-- Dropdown -->
          <div class="cursor-pointer flex items-center" @click="toggleDropdown">
            <span class="px-2 text-white font-semibold capitalize">{{ username }}</span>
            <i class="fas fa-bars text-white ml-1"></i>
          </div>
          <!-- Dropdown content -->
          <div v-if="showDropdown" class="absolute top-8 right-0 bg-white border border-gray-300 rounded shadow-md z-10">
            <ul class="py-2 flex flex-col">
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="account">Account</li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="logout">Logout</li>
            </ul>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Sign in and Log in links -->
        <router-link to="/signup" class="px-4 text-white hover:text-blue-600 rounded-lg h-7 font-bold">Sign up</router-link>
        <router-link to="/login" class="px-4 text-white hover:text-blue-600 rounded-lg font-bold">Log in</router-link>
      </template>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'HeaderNavigation',
    props: {
      isLoggedIn: {
        type: Boolean,
        default: false,
      },
      username: {
        type: String,
        default: '',
      },
      showDropdown: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      toggleDropdown() {
        this.$emit('toggle-dropdown');
      },
      account() {
      },
      logout() {
        this.$emit('logout');
      },
    },
  };
  </script>
  