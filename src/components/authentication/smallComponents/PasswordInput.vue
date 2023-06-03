<template>
    <div class="mb-4">
      <label class="block font-bold mb-2 text-white" for="password">
        <i class="fas fa-lock inline-block h-4 w-4 mr-2"></i>
        Password
      </label>
      <div class="relative">
        <input
            class="transition-all duration-300 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white placeholder-gray-300 focus:placeholder-gray-500"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            placeholder="Enter your password"
           :rules="['Required']"
          />
        <div class="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer" @click="showPassword = !showPassword">
          <i class="fas fa-eye ml-1 text-white"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPassword: false,
      };
    },
    props: {
      value: String,
    },
  };
  </script>
  