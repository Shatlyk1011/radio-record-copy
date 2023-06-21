<template>
  <section class="section-channels padding-10-x">
    <ChannelFilters />

    <div :class="['channels', compactVal ? 'channels--compact' : '']">
      <ChannelItem
        :compactVal="compactVal"
        v-for="station in computedStations"
        :key="station.id"
        :station="station"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ChannelFilters from './Filters/ChannelFilters.vue'
import ChannelItem from './ChannelItem.vue'
import { useStorageCompact, useStorageOrder } from '@/store/store'

/*  */
import useStations from '@/composables/useStations'
/*  */

import { stations } from '@/db'
import type { IStation } from '@/assets/types'

const route = useRoute()

const { computedStations } = useStations(stations)

/* const { order } = useStorageOrder()

let orderBy = (a: IStation, b: IStation) => {
  if (order.value == 'alphabet') {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    else return 0
  } else if (order.value == 'new' || order.value == 'recommend') {
    if (a.sort < b.sort) return -1
    if (a.sort > b.sort) return 1
    else return 0
  } else return a.sort - b.sort
} */

/* filter by theme or style */
/* const computedStations = computed(() => {
  if (route.params.theme) {
    const theme = route.params.theme.slice(14).toString().toLowerCase()
    const filterByTheme = stations.filter((station) => {
      let genres = station.genre
        .map((g) => g.name)
        .join()
        .toLowerCase()
      return genres.includes(theme)
    })
    return filterByTheme.sort(orderBy)
  } else if (route.params.style) {
    const style = route.params.style.slice(14).toString().toLowerCase()
    const filterByStyle = stations.filter((station) => {
      let styles = station.genre
        .map((g) => g.name)
        .join()
        .toLowerCase()
      return styles.includes(style)
    })
    return filterByStyle.sort(orderBy)
  } else return stations.sort(orderBy)
}) */

//compact view
const compact = useStorageCompact()
const compactVal = computed(() => JSON.parse(compact.value))
</script>

<style lang="scss" scoped>
.section-channels {
  .channels {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin-top: 2.4rem;
    gap: 1.6rem;

    &--compact {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 4.8rem;
      row-gap: 0.8rem;
    }
  }
}
</style>
