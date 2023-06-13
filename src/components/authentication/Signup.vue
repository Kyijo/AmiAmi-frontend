<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-8 bg-[#331147] rounded-lg shadow-lg">
      <form class="px-8 pt-6 pb-8 mb-4">
        <!-- Logo -->
        <div class="flex justify-center mb-6">
          <img src="src\assets\img\icons\logo.png" alt="Logo" class="h-16 rounded-full">
        </div>

        <FormInput
          label="Username"
          placeholder="Enter your username"
          v-bind:value="username" 
          v-on:update:value="username = $event"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          v-model="email"
          :rules="['Required', 'Email']"
        />

        <!-- Password input -->
        <PasswordInput
          v-bind:value="password" 
          v-on:update:value="password = $event"
        />

        <!-- Password input -->
        <PasswordInput
          v-bind:value="confirmPassword" 
          v-on:update:value="confirmPassword = $event"
        />
        <p class="text-red-500 text-xs italic" v-if="password !== confirmPassword">
          Passwords do not match
        </p>

        <!-- Signup button --> 
        <SubmitButton
          text="Sign In"
          @submit="signin"
          :disabled="password !== confirmPassword"
        />

        <!-- Error message -->
        <ErrorMessage
          v-if="errorDisplay"
          :message="errorMessage"
        />

        <!-- Back to login button -->
        <div class="flex justify-center mt-4">
          <button class="text-sm text-blue-500 hover:underline" @click="goToLogin">Already have an account? Log in</button>
        </div>
      </form>

      <!-- Footer -->
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Beep Beep AmiAmi rights.
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FormInput from './smallComponents/FormInput.vue';
import PasswordInput from './smallComponents/PasswordInput.vue';
import SubmitButton from './smallComponents/SubmitButton.vue';
import ErrorMessage from './smallComponents/ErrorMessage.vue';
import BackButton from './smallComponents/BackButton.vue';

export default {
  components: {
    FormInput,
    PasswordInput,
    SubmitButton,
    ErrorMessage,
    BackButton,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showConfirmPassword: false,
      errorDisplay: false,
      errorMessage: "",
    };
  },
  methods: {
    async signin() {
      try {
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('email', this.email);
        formData.append('password', this.password);

        axios.post('http://localhost:1234/api/user/register', formData)
          .then(response => {
            // 
            sessionStorage.setItem('token', response.data);
            this.$router.push({ path: '/' });
          })
          .catch(error => {
            this.errorDisplay = true;
            this.errorMessage = error.response.data.message;
          });
      } catch (error) {
        // Handle any other synchronous errors
        console.error(error);
      }
    },
    goToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>
