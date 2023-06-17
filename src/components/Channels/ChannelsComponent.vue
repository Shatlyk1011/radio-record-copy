<template>
  <section class="section-channels padding-10-x">
    <ChannelFilters />

    <div class="channels">
      <ChannelItem v-for="station in computedStations" :key="station.id" :station="station" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ChannelFilters from './Filters/ChannelFilters.vue'
import ChannelItem from './ChannelItem.vue'

import { stations } from '@/db'

const route = useRoute()

/* filter by theme */
const computedStations = computed(() => {
  if (route.params.theme) {
    const theme = route.params.theme.slice(14).toString().toLowerCase()
    return stations.filter((station) => {
      let genres = station.genre
        .map((g) => g.name)
        .join()
        .toLowerCase()
      return genres.includes(theme)
    })
  } else if (route.params.style) {
    const style = route.params.style.slice(14).toString().toLowerCase()
    return stations.filter((station) => {
      let styles = station.genre
        .map((g) => g.name)
        .join()
        .toLowerCase()
      return styles.includes(style)
    })
  } else return stations
})
</script>

<style lang="scss" scoped>
.section-channels {
  .channels {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin-top: 2.4rem;

    gap: 1.6rem;
  }
}
</style>
