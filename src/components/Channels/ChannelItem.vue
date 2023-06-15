<template>
  <div
    :class="['item', stationNameCheck && stationPlaying ? 'active' : '']"
    @click="handleStation(station)"
  >
    <div
      class="svg"
      v-html="stationNameCheck ? station.svg_fill : station.svg_outline"
    ></div>
    <div class="title">{{ station.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { IStation } from '@/assets/types'

import useStation from '@/composables/useStation'

const props = defineProps({
  station: {
    required: true,
    type: Object as PropType<IStation>
  }
})

const { handleStation, channel, stationPlaying } = useStation()

const stationNameCheck = computed(() => {
  let stationTitle = props.station.title.toLowerCase()
  return stationTitle === channel.value?.title.toLowerCase()
})
</script>

<style lang="scss">
@import '@/globals';

.item {
  border-radius: 0.8rem;
  background-color: rgba($color-white, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  transition: all 0.1s linear;
  cursor: pointer;

  &.active {
    background-color: $color-main;

    &:hover {
      background-color: $color-main;
    }

    svg {
      opacity: 1;
    }
  }

  &:hover {
    background-color: rgba($color-white, 0.1);

    & > .svg > svg {
      opacity: 1;
      stroke: $color-white;
    }
  }

  svg {
    width: 9.6rem;
    height: 9.6rem;
    padding: 0.8rem;
    transition: all 0.1s linear;
    opacity: 0.5;
  }

  .title {
    box-sizing: border-box;
    padding: 0 5px;
    text-align: center;
    line-height: 1.3;
  }
}
</style>
