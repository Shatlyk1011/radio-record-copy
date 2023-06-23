<template>
  <main class="homeView">
    <SliderComponent />
    <div class="wrap padding-10-x">
      <MenuThree />
    </div>

    <ChannelsComponent />
  </main>
</template>

<script setup lang="ts">
import SliderComponent from '@/components/SliderComponent.vue'
import MenuThree from '@/components/shared/MenuThree.vue'
import ChannelsComponent from '@/components/Channels/ChannelsComponent.vue'
</script>

<style lang="scss" scoped>
@import '@/globals';
.wrap {
  margin: 4.8rem 0 3.2rem;

  @include respond(tab-port) {
    margin: 2rem 0;
  }
}
</style>
