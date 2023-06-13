<template>
  <main class="homeView">
    <SliderComponent />
    <div class="wrap padding-10-x">
      <MenuThree />
    </div>
    <div class="padding-10-x">
      <ChannelsComponent />
    </div>
  </main>
</template>

<script setup>
import SliderComponent from '@/components/SliderComponent.vue'
import MenuThree from '@/components/shared/MenuThree.vue'
import ChannelsComponent from '@/components/Channels/ChannelsComponent.vue'
</script>

<style lang="scss" scoped>
.wrap {
  margin: 4.8rem 0 3.2rem;
}
</style>
