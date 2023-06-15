<template>
  <div class="app">
    <div class="container">
      <MainNav />
      <router-view />
      <FooterComponent />
    </div>
    <PlayerComponent class="player-component" />
  </div>
</template>

<script setup>
import MainNav from '@/components/MainNav.vue'
import PlayerComponent from '@/components/PlayerComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style lang="scss">
.app {
  padding-top: 12rem;
  position: relative;
}

.player-component {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
