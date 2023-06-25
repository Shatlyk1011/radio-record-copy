<template>
  <section class="section-channels padding-10-x">
    <ChannelFilters />

    <div v-if="computedStations" :class="['channels', compactVal ? 'channels--compact' : '']">
      <ChannelItem
        :compactVal="compactVal"
        v-for="station in computedStations"
        :key="station.id"
        :station="station"
      />
    </div>
    <LoadingComponent v-else />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ChannelFilters from '@/components/Channels/Filters/ChannelFilters.vue'
import ChannelItem from '@/components/Channels/ChannelItem.vue'
import LoadingComponent from '@/components/shared/LoadingComponent.vue'

import { useStorageCompact } from '@/store/store'

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
  box-sizing: border-box;
  .channels {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin-top: 2.4rem;
    gap: 1.6rem;
    @include respond(tab-land) {
      grid-template-columns: repeat(7, 1fr);
      gap: 1.4rem;
    }
    @include respond(tab-port) {
      grid-template-columns: repeat(6, 1fr);
      gap: 1.2rem;
    }

    @include respond(phone) {
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }

    @include respond(smallest) {
      grid-template-columns: repeat(3, 1fr);
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
      @include respond(smallest) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
