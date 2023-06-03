<template>
    <Header/>
    <h1 class="text-white">
        This the home web of amiami.
    </h1>
    <Footer/>
    </template>
    
    <script>
    import Header from '../layout/Header.vue'
    import Footer from '../layout/Footer.vue'
    export default {
      name: 'Home',
        components: {
            Header,
            Footer
        }
    }
    </script>