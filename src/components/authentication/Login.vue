<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full sm:max-w-sm md:w-4/5 lg:w-3/5 xl:w-2/5 p-8 bg-[#260742] rounded-lg shadow-lg">
      <form class="space-y-6" @submit.prevent="login">
        <div class="flex justify-center mb-6">
          <img src="src\assets\img\icons\logo.jpeg" alt="Logo" class="h-16 rounded-full">
        </div>

        <FormInput
          label="Username"
          placeholder="Enter your username"
          v-bind:value="username" 
          v-on:update:value="username = $event"
        />

        <PasswordInput
          v-bind:value="password" 
          v-on:update:value="password = $event"
        />

        <SubmitButton text="Log in" @submit="login" />

        <ErrorMessage v-if="errorDisplay" :message="errorMessage" />

        <ForgottenPassword />

        <div class="flex justify-center">
          <button class="text-sm text-blue-500 hover:underline" @click="goToSignup">Don't have an account? Sign up</button>
        </div>
      </form>

      <BackButton/>
      
      <p class="mt-4 text-center text-gray-500 text-xs">&copy;2023 Beep Beep AmiAmi rights.</p>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 639px) {
  .max-w-md {
    max-width: 100%;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .max-w-md {
    max-width: 90%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .max-w-md {
    max-width: 80%;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .max-w-md {
    max-width: 70%;
  }
}
</style>

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
        const jsonRequest = {
          username: this.username,
          password: this.password
        };

        axios.post('https://amiami.onrender.com/api/user/login', jsonRequest)
          .then(response => {
            sessionStorage.setItem('token', response.data.token);
            this.$router.push({path: '/'});
          })
          .catch(error => {
            this.errorDisplay = true;
            this.errorMessage = error.response.data
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
