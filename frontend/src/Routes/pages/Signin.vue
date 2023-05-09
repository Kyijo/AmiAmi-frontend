<template>
   <div class="flex justify-center items-center b-20">
    <div class="w-full max-w-sm form-wrapper">
      <form class="shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 bg-[#331147]">
          <div class="mb-4">
            <label class="block font-bold mb-2 text-white" for="username">
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              v-model="username"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2 text-white" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold mb-2 text-white" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
          <div class="mb-6">
            <label class="block font-bold mb-2 text-white" for="confirmPassword">
              Confirm Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Retype your password"
              v-model="confirmPassword"
            />
            <p class="text-gray-500 text-xs">Your password can go brrrr 💅🏼</p>
            <p class="text-red-500 text-xs italic" v-if="password !== confirmPassword">
              Passwords do not match
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="signin"
              :disabled="password !== confirmPassword"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Beep Beep AmiAmi rights.
        </p>
      </div>
    </div>
  </template>
  
  <style>
  .form-wrapper {
    padding: 2rem;
  }
  </style>

  <script>
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      sigin() {
      },
    },
  };
  </script>