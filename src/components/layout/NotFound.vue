<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-4 text-white">Oopsie! Silly,</h1>
      <img src="https://res.cloudinary.com/dlzcrc5oy/image/upload/v1713341861/amiami_fe/not_found_f7rkoe.jpg" alt="Funny Image" class="h-max w-auto mb-6" />
      <p class="text-lg text-white mb-8">The page you're looking for does not exist.</p>
      <router-link to="/" class="btn-primary">Go to Home</router-link>
    </div>
  </template>

  <script>
  export default {
    name: "NotFound"
  }
  </script>
  
  <style>
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>