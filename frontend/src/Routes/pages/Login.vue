<template>
    <div class="flex justify-center items-center b-20">
      <div class="w-full max-w-sm p-8">
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
            <label class="block font-bold mb-2 text-white" for="password">
              Password
            </label>
            <div class="relative">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                v-model="password"
              />
              <div class="password-toggle" @click="showPassword = !showPassword">
                <img
                  class="password-icon"
                  src="../../assets/img/logos/password.png"
                  alt="Show Password"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="login">
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
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        showPassword: false,
      };
    },
    methods: {
      login() {
        // Add your login logic here
      },
    },
  };
  </script>
  
  <style>
  .password-toggle {
    position: absolute;
    top: 40%;
    right: .5rem;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .password-icon {
    width: 24px;
    height: 24px;
  }
  
  </style>
  