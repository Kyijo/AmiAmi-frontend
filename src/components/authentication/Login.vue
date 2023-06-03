<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-sm p-8 bg-[#331147] rounded-lg shadow-lg">
      <form class="space-y-6" @submit.prevent="login">
        <!-- Logo -->
        <div class="flex justify-center mb-6">
          <img src="src\assets\img\icons\logo.png" alt="Logo" class="h-16 rounded-full">
        </div>

        <!-- Username input -->
        <FormInput
          label="Username"
          placeholder="Enter your username"
          v-bind:value="username" 
          v-on:update:value="username = $event"
        />

        <!-- Password input -->
        <PasswordInput
          v-bind:value="password" 
          v-on:update:value="password = $event"
        />

        <!-- Login button -->
        <SubmitButton text="Log in" @submit="login" />

        <!-- Error message -->
        <ErrorMessage v-if="errorDisplay" :message="errorMessage" />

        <!-- Forgot password link -->
        <ForgottenPassword />

        <!-- Sign up button -->
        <div class="flex justify-center">
          <button class="text-sm text-blue-500 hover:underline" @click="goToSignup">Don't have an account? Sign up</button>
        </div>
      </form>

      <!-- Back to main page button -->
      <BackButton/>
      
      <!-- Footer -->
      <p class="mt-4 text-center text-gray-500 text-xs">&copy;2023 Beep Beep AmiAmi rights.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FormInput from './smallComponents/FormInput.vue';
import PasswordInput from './smallComponents/PasswordInput.vue';
import SubmitButton from './smallComponents/SubmitButton.vue';
import ForgotPassword from './smallComponents/ForgottenPassword.vue';
import ErrorMessage from './smallComponents/ErrorMessage.vue';
import BackButton from './smallComponents/BackButton.vue';

export default {
  components: {
    FormInput,
    PasswordInput,
    SubmitButton,
    ForgotPassword,
    ErrorMessage,
    BackButton,
  },
  data() {
    return {
      username: "",
      password: "",
      errorDisplay: false,
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      try {
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);

        axios.post('http://localhost:1234/api/user/login', formData)
          .then(response => {
            sessionStorage.setItem('token', response.data);
            this.$router.push({path: '/'});
          })
          .catch(error => {
            this.errorDisplay = true;
            this.errorMessage = error.response.data.message;
          });
      } catch (error) {
        console.error(error);
      }
    },
    goToSignup() {
      this.$router.push('/signup');
    },
  }
};
</script>
