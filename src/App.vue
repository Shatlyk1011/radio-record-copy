<template>
  <div class="app">
    <div class="container">
      <MainNav @showSidebar="showSidebar = true" />
      <router-view />
      <FooterComponent />
    </div>
    <transition name="auth-transition">
      <AuthenticationComponent
        :showSidebar="showSidebar"
        @closeSidebar="showSidebar = false"
        v-if="showSidebar"
      />
    </transition>
    <PlayerComponent class="player-component" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import MainNav from '@/components/MainNav.vue'
import PlayerComponent from '@/components/PlayerComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AuthenticationComponent from '@/components/Auth/AuthenticationComponent.vue'

const showSidebar = ref(false)

const body = document.querySelector('body')

watch(showSidebar, () => {
  if (showSidebar.value == true) body?.classList.add('overflow')
  else body?.classList.remove('overflow')
})
</script>

<style lang="scss">
.app {
  // padding-top: 12rem;
  position: relative;
}

.player-component {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.auth-transition-enter-active {
  transition: transform 0.2s linear;
}

.auth-transition-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.auth-transition-leave-active {
}

.auth-transition-leave-to {
  // transform: translateX(100%);
  opacity: 0;
}
</style>
