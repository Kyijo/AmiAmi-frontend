<template>
  <div id="app">
    <HeaderV />
    <router-view />
  </div>
</template>

<script>
import HeaderV from './components/HeaderV.vue'

export default {
  name: 'app',
  components: {
    HeaderV
  },
}
</script>
