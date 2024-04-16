<template>
 <div class="flex justify-center items-center min-h-screen">
    <div class="w-full sm:max-w-sm md:w-4/5 lg:w-3/5 xl:w-2/5 p-8 bg-[#260742] rounded-lg shadow-lg">
      <form class="px-8 pt-6 pb-8 mb-4">
        <div class="flex justify-center mb-6">
          <img src="src\assets\img\icons\logo.jpeg" alt="Logo" class="h-16 rounded-full">
        </div>

        <FormInput
          label="Username"
          placeholder="Enter your username"
          v-bind:value="username" 
          v-on:update:value="username = $event"
          class="mb-4"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          v-bind:value="email"
          v-on:update:value="email = $event"
          :rules="['Required', 'Email']"
          class="mb-4"
        />

        <PasswordInput
          v-bind:value="password" 
          v-on:update:value="password = $event"
          class="mb-4"
        />

        <PasswordInput
          v-bind:value="confirmPassword" 
          v-on:update:value="confirmPassword = $event"
          class="mb-4"
        />
        <p class="text-red-500 text-xs italic" v-if="password !== confirmPassword">
          Passwords do not match
        </p>

        <SubmitButton
          text="Sign In"
          @submit="signin"
          :disabled="password !== confirmPassword"
          class="mb-4"
        />

        <ErrorMessage
          v-if="errorDisplay"
          :message="errorMessage"
          class="mb-4"
        />

        <div class="flex justify-center mt-4">
          <button class="text-sm text-blue-500 hover:underline" @click="goToLogin">Already have an account? Log in</button>
        </div>
      </form>

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
      console.log(this.username, this.email, this.password);
      try {
        const jsonRequest = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        console.log(jsonRequest);
        axios.post('http://localhost:1234/api/user/register', jsonRequest)
          .then(response => {
            sessionStorage.setItem('token', response.data.token);
            this.$router.push({ path: '/' });
          })
          .catch(error => {
            this.errorDisplay = true;
            this.errorMessage = error.response.data;
          });
      } catch (error) {
        console.error(error);
      }
    },
    goToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>
