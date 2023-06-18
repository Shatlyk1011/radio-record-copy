<template>
  <div
    ref="item"
    :class="['item', stationNameCheck && isPlaying ? 'active' : null]"
    @click="handleStation(station)"
  >
    <div class="svg-container">
      <span v-html="stationNameCheck ? station.svg_fill : station.svg_outline"></span>
      <LoadingComponent class="loading" v-if="stationNameCheck && isWaiting && hasActiveClass" />
    </div>

    <div class="title">{{ station.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import type { IStation } from '@/assets/types'

import LoadingComponent from '@/components/shared/LoadingComponent.vue'

import useStation from '@/composables/useStation'

const props = defineProps({
  station: {
    required: true,
    type: Object as PropType<IStation>
  }
})

const { handleStation, channel, isPlaying, isWaiting } = useStation()
const item = ref()

const stationNameCheck = computed(() => {
  let stationTitle = props.station.title.toLowerCase()
  return stationTitle === channel.value?.title.toLowerCase()
})

const hasActiveClass = computed(() => {
  if (item.value) {
    return item.value.classList.contains('active')
  } else return false
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

  cursor: pointer;
  position: relative;
  padding: 0.8rem;
  box-sizing: border-box;

  &.active {
    background-color: $color-main;

    &:hover {
      background-color: $color-main;
    }

    .svg-container {
      svg {
        opacity: 1;
      }
    }
  }

  &:hover {
    background-color: rgba($color-white, 0.1);

    & > .svg-container > svg {
      opacity: 1;
      stroke: $color-white;
    }
  }

  .svg-container {
    width: 9.6rem;
    height: 9.6rem;
    position: relative;
    svg {
      width: 100%;
      height: 100%;

      opacity: 0.5;
    }
  }
  .title {
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    word-break: break-word;
    padding: 0 5px;
    flex-grow: 1;
    line-height: 1.3;
  }
}

.loading {
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-color: $color-main;
  }
}
</style>
