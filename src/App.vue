<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="about">About</RouterLink> |
    <RouterLink to="contact">Contact</RouterLink>
  </div>

  <RouterView/>
</template>

<style scoped>

</style>
