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
import { computed, onMounted } from 'vue'
import ChannelFilters from './Filters/ChannelFilters.vue'
import ChannelItem from './ChannelItem.vue'
import { useStorageCompact } from '@/store/store'
import type { IStation } from '@/assets/types'

import useStations from '@/composables/useStations'

import getStations from '@/composables/getStations'

const { stations, getApi } = getStations()

const { computedStations } = useStations(stations)

//compact view
const compact = useStorageCompact()
const compactVal = computed(() => JSON.parse(compact.value))

onMounted(async () => await getApi())
</script>

<style lang="scss" scoped>
@import '@/globals';
.section-channels {
  .channels {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin-top: 2.4rem;
    gap: 1.6rem;

    @include respond(tab-land) {
      grid-template-columns: repeat(6, 1fr);
    }
    @include respond(tab-port) {
      grid-template-columns: repeat(5, 1fr);
    }

    &--compact {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 4.8rem;
      row-gap: 0.8rem;

      @include respond(tab-land) {
        column-gap: 2.4rem;
      }
      @include respond(tab-port) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>
