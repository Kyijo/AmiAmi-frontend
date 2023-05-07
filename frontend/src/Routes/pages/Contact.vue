<template>
    <div>
      <button @click="redirectToExternalSite" class="text-white">zzzz</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToExternalSite() {
        const externalSiteUrl = "/";
        window.location.href = externalSiteUrl;
      },
    },
  };
  </script>
  