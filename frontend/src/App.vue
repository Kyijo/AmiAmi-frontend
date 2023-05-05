<template>
  <div id="app">
    <HeaderV />
    <router-view />
    <FooterV />
  </div>
</template>

<script>
import HeaderV from './components/HeaderV.vue'
import FooterV from './components/FooterV.vue'
export default {
  name: 'app',
  components: {
    HeaderV,
    FooterV
  },
}
</script>
