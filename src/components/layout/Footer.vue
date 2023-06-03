<template>
    <footer class="py-6">
      <div class="container mx-auto px-4">
        <div class="flex justify-center items-center">
          <div class="flex items-center">
            <img src="../../assets/img/icons/logo.png" alt="Logo" class="h-8 mr-4 rounded-full">
            <p class="font-bold text-white">AmiAmi</p>
          </div>
          <nav class="flex items-center">
            <router-link to="/About" class="px-4 text-white hover:text-blue-600">About</router-link>
            </nav>
          <div class="flex float-right">
            <a href="https://www.github.com/Kyijo">
              <img src="../../assets/img/icons/github.png" alt="github logo" class="h-8 mr-4 rounded-full logo">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style>
.logo {
  transition: all 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.05);
}</style>
  
  <script>
  
  export default {
    name: 'Footer',
}
  </script>
  