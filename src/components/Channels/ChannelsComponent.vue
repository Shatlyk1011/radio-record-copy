<template>
  <section class="section-channels padding-10-x">
    <ChannelFilters />

    <div class="channels">
      <ChannelItem
        v-for="station in stations"
        :key="station.id"
        :station="station"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import ChannelFilters from './Filters/ChannelFilters.vue'
import ChannelItem from './ChannelItem.vue'

import { stations } from '@/db'
</script>

<style lang="scss" scoped>
.section-channels {
  .channels {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: 2.4rem;
  }
}
</style>
