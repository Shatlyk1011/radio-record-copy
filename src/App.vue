<template>
  <div class="app">
    <div class="container">
      <MainNav @showSidebar="showSidebar = true" :showMenu="showMenu" />
      <router-view />
      <FooterComponent />
    </div>
    <AuthenticationComponent :showSidebar="showSidebar" @closeSidebar="showSidebar = false" />
    <div class="player-component">
      <PlayerComponent />
      <SecondNav
        v-if="showSecondNav"
        @showMenu="showMenu = !showMenu"
        @showSidebar="showSidebar = true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

import MainNav from '@/components/Navigation/MainNav.vue'
import SecondNav from '@/components/Navigation/SecondNav.vue'
import PlayerComponent from '@/components/PlayerComponent/PlayerComponent.vue'
import FooterComponent from '@/components/Navigation/FooterComponent.vue'
import AuthenticationComponent from '@/components/Auth/AuthenticationComponent.vue'

const { width } = useWindowSize()

const showSidebar = ref(false)
const showMenu = ref(false)

const body = document.querySelector('body')

const showSecondNav = computed(() => {
  if (width.value < 920) return true
  else return false
})

watch(showSidebar, () => {
  if (showSidebar.value == true) body?.classList.add('overflow')
  else body?.classList.remove('overflow')
})
</script>

<style lang="scss">
.app {
  padding-top: 12rem;
  position: relative;
}

.player-component {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1600;
}
</style>
