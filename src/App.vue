<template>
  <div class="app container">
    <MainNav />
    <router-view />
  </div>
</template>

<script setup>
import MainNav from '@/components/MainNav.vue'
</script>

<style lang="scss">
.app {
  padding-top: 12rem;
}
</style>
