<template>
  <div class="mt-4" v-if="message">
    <span class="text-red-500 italic text-center font-bold">
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
