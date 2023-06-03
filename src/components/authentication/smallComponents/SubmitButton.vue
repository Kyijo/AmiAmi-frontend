<template>
    <div class="flex items-center justify-center">
      <button
        class="transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="$emit('submit')"
      >
        <i class="fas fa-sign-in-alt mr-1"></i>
        {{ text }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: String,
    },
  };
  </script>
  