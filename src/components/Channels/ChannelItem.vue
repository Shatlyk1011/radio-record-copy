<template>
  <div class="item" @click="handleStation(station)">
    <div class="svg" v-html="station.svg_outline"></div>
    <div class="title">{{ station.title }}</div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IStation } from '@/assets/types'

import useStation from '@/composables/useStation'

defineProps({
  station: {
    required: true,
    type: Object as PropType<IStation>
  }
})

const { handleStation } = useStation()
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
  flex-basis: 11.1111%;
  flex-grow: 0;
  flex-shrink: 0;

  cursor: pointer;

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
    stroke: $color-gray-2;
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