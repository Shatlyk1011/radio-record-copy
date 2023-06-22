<template>
  <div
    tabindex="0"
    ref="item"
    :class="[
      'item',
      stationNameCheck && isPlaying ? 'active' : null,
      compactVal ? 'item--compact' : null
    ]"
    @click="handleStation(station)"
  >
    <svg
      class="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 20C11.45 20 10.9793 19.8043 10.588 19.413C10.196 19.021 10 18.55 10 18C10 17.45 10.196 16.979 10.588 16.587C10.9793 16.1957 11.45 16 12 16C12.55 16 13.021 16.1957 13.413 16.587C13.8043 16.979 14 17.45 14 18C14 18.55 13.8043 19.021 13.413 19.413C13.021 19.8043 12.55 20 12 20ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM12 8C11.45 8 10.9793 7.804 10.588 7.412C10.196 7.02067 10 6.55 10 6C10 5.45 10.196 4.97933 10.588 4.588C10.9793 4.196 11.45 4 12 4C12.55 4 13.021 4.196 13.413 4.588C13.8043 4.97933 14 5.45 14 6C14 6.55 13.8043 7.02067 13.413 7.412C13.021 7.804 12.55 8 12 8Z"
      ></path>
    </svg>
    <div class="svg-container">
      <span v-html="stationNameCheck ? station.svg_fill : station.svg_outline"></span>
      <LoadingComponent
        :class="['loading', compactVal ? 'loading--compact' : '']"
        v-if="stationNameCheck && isWaiting"
      />
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
  },
  compactVal: {
    required: true,
    type: Boolean
  }
})

const { handleStation, channel, isPlaying, isWaiting } = useStation()
const item = ref()

const stationNameCheck = computed(() => {
  let stationTitle = props.station.title.toLowerCase()
  return stationTitle === channel.value?.title.toLowerCase()
})
</script>

<style lang="scss">
@import '@/globals';

// no transition needed
.item {
  border-radius: 0.8rem;
  background-color: rgba($color-white, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  position: relative;
  cursor: pointer;
  position: relative;
  padding: 0.8rem !important;
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

    .menu-icon {
      color: $color-text;
      opacity: 1;
    }
  }

  &.item--compact {
    flex-direction: row;
    height: auto;

    .menu-icon {
      top: 50%;
      transform: translate(2rem, -50%);
      right: 1rem;
    }

    .svg-container {
      height: 4.8rem;
      width: 4.8rem;
    }

    &:hover {
      .menu-icon {
        transform: translate(0, -50%);
        right: 1rem;
      }
    }

    &.active {
      .menu-icon {
        transform: translate(0, -50%);
        right: 1rem;
      }
    }
  }

  &:hover {
    background-color: rgba($color-white, 0.15);

    & > .menu-icon {
      opacity: 1;
    }

    & > .svg-container > span > svg {
      opacity: 1;
      stroke: $color-white;
    }
  }

  .menu-icon {
    position: absolute;
    top: 3px;
    right: 0;
    color: $color-gray-2;
    transition: all 0.15s ease-out;

    opacity: 0;

    &:hover {
      color: $color-text;
    }
  }

  .svg-container {
    width: 9.6rem;
    height: 9.6rem;
    position: relative;
    svg {
      transition: opacity 0.2s ease-in-out;
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
    border-radius: 8px;
  }

  &--compact {
    font-size: 2.4rem;
  }
}
</style>
