<template>
  <section class="section-player">
    <div class="player">
      <div class="menu">
        <button type="button" @click="playing = !playing">
          <img src="./../assets/icons/pause.svg" alt="pause icon" v-if="playing && !isWaiting" />
          <LoadingComponent v-if="isWaiting" />
          <img src="./../assets/icons/play.svg" alt="pause icon" v-if="!playing && !isWaiting" />
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12 20C11.45 20 10.9793 19.8043 10.588 19.413C10.196 19.021 10 18.55 10 18C10 17.45 10.196 16.979 10.588 16.587C10.9793 16.1957 11.45 16 12 16C12.55 16 13.021 16.1957 13.413 16.587C13.8043 16.979 14 17.45 14 18C14 18.55 13.8043 19.021 13.413 19.413C13.021 19.8043 12.55 20 12 20ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM12 8C11.45 8 10.9793 7.804 10.588 7.412C10.196 7.02067 10 6.55 10 6C10 5.45 10.196 4.97933 10.588 4.588C10.9793 4.196 11.45 4 12 4C12.55 4 13.021 4.196 13.413 4.588C13.8043 4.97933 14 5.45 14 6C14 6.55 13.8043 7.02067 13.413 7.412C13.021 7.804 12.55 8 12 8Z"
          ></path>
        </svg>
      </div>

      <div class="info">
        <div class="info__img">
          <img :src="channel?.icon_fill_white" alt="station icon" />
        </div>
        <div class="info__title">{{ channel?.title }}</div>
        <div class="heart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 21.35L10.55 20.05C8.86667 18.5333 7.475 17.225 6.375 16.125C5.275 15.025 4.4 14.0373 3.75 13.162C3.1 12.2873 2.646 11.4833 2.388 10.75C2.12933 10.0167 2 9.26667 2 8.5C2 6.93333 2.525 5.625 3.575 4.575C4.625 3.525 5.93333 3 7.5 3C8.36667 3 9.19167 3.18333 9.975 3.55C10.7583 3.91667 11.4333 4.43333 12 5.1C12.5667 4.43333 13.2417 3.91667 14.025 3.55C14.8083 3.18333 15.6333 3 16.5 3C18.0667 3 19.375 3.525 20.425 4.575C21.475 5.625 22 6.93333 22 8.5C22 9.26667 21.871 10.0167 21.613 10.75C21.3543 11.4833 20.9 12.2873 20.25 13.162C19.6 14.0373 18.725 15.025 17.625 16.125C16.525 17.225 15.1333 18.5333 13.45 20.05L12 21.35ZM12 18.65C13.6 17.2167 14.9167 15.9873 15.95 14.962C16.9833 13.9373 17.8 13.046 18.4 12.288C19 11.5293 19.4167 10.854 19.65 10.262C19.8833 9.67067 20 9.08333 20 8.5C20 7.5 19.6667 6.66667 19 6C18.3333 5.33333 17.5 5 16.5 5C15.7167 5 14.9917 5.22067 14.325 5.662C13.6583 6.104 13.2 6.66667 12.95 7.35H11.05C10.8 6.66667 10.3417 6.104 9.675 5.662C9.00833 5.22067 8.28333 5 7.5 5C6.5 5 5.66667 5.33333 5 6C4.33333 6.66667 4 7.5 4 8.5C4 9.08333 4.11667 9.67067 4.35 10.262C4.58333 10.854 5 11.5293 5.6 12.288C6.2 13.046 7.01667 13.9373 8.05 14.962C9.08333 15.9873 10.4 17.2167 12 18.65Z"
            ></path>
          </svg>
        </div>

        <img src="@/assets/icons/caret-left.svg" alt="caret left" />

        <div class="track-info">
          <div class="track-img">
            <img :src="playlist?.track.image100" alt="" />
          </div>
          <div class="title-wrap" v-if="playlist">
            <div class="title">{{ playlist.track.artist }}</div>
            <div class="subtitle">{{ playlist.track.song }}</div>
          </div>

          <div class="heart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 21.35L10.55 20.05C8.86667 18.5333 7.475 17.225 6.375 16.125C5.275 15.025 4.4 14.0373 3.75 13.162C3.1 12.2873 2.646 11.4833 2.388 10.75C2.12933 10.0167 2 9.26667 2 8.5C2 6.93333 2.525 5.625 3.575 4.575C4.625 3.525 5.93333 3 7.5 3C8.36667 3 9.19167 3.18333 9.975 3.55C10.7583 3.91667 11.4333 4.43333 12 5.1C12.5667 4.43333 13.2417 3.91667 14.025 3.55C14.8083 3.18333 15.6333 3 16.5 3C18.0667 3 19.375 3.525 20.425 4.575C21.475 5.625 22 6.93333 22 8.5C22 9.26667 21.871 10.0167 21.613 10.75C21.3543 11.4833 20.9 12.2873 20.25 13.162C19.6 14.0373 18.725 15.025 17.625 16.125C16.525 17.225 15.1333 18.5333 13.45 20.05L12 21.35ZM12 18.65C13.6 17.2167 14.9167 15.9873 15.95 14.962C16.9833 13.9373 17.8 13.046 18.4 12.288C19 11.5293 19.4167 10.854 19.65 10.262C19.8833 9.67067 20 9.08333 20 8.5C20 7.5 19.6667 6.66667 19 6C18.3333 5.33333 17.5 5 16.5 5C15.7167 5 14.9917 5.22067 14.325 5.662C13.6583 6.104 13.2 6.66667 12.95 7.35H11.05C10.8 6.66667 10.3417 6.104 9.675 5.662C9.00833 5.22067 8.28333 5 7.5 5C6.5 5 5.66667 5.33333 5 6C4.33333 6.66667 4 7.5 4 8.5C4 9.08333 4.11667 9.67067 4.35 10.262C4.58333 10.854 5 11.5293 5.6 12.288C6.2 13.046 7.01667 13.9373 8.05 14.962C9.08333 15.9873 10.4 17.2167 12 18.65Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="volume">
        <img src="./../assets/icons/volume.svg" alt="volume icon" v-if="!noSound" />
        <img src="./../assets/icons/no-volume.svg" alt="no volume icon" v-else />
        <input @input="handleVolume" class="range" type="range" min="0" max="100" ref="range" />
      </div>
    </div>
    <audio
      autoplay
      :onLoadstart="() => (isWaiting = true)"
      :onPlaying="() => (isWaiting = false)"
      :src="channel?.stream_128"
      ref="audio"
      :muted="noSound"
    ></audio>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useMediaControls } from '@vueuse/core'

import LoadingComponent from '@/components/shared/LoadingComponent.vue'

import useStation from '@/composables/useStation'

const { channel, playlist, getPlaylist, handleStation, isPlaying, isWaiting } = useStation()

const audio = ref()
const noSound = ref(false)
const range = ref()

const { playing, volume } = useMediaControls(audio)

let storage = localStorage

const handleVolume = (e: Event) => {
  const val = parseFloat((e.target as HTMLInputElement).value) / 100
  volume.value = val
  storage.setItem('volume', val + '')
  //change icon if no volume
  val == 0 ? (noSound.value = true) : (noSound.value = false)
}

const interval = setInterval(async () => {
  await getPlaylist(channel.value!.id)
}, 5000)

onMounted(async () => {
  await handleStation()

  //set default volume from local storage
  let localVolume = storage.getItem('volume')
  if (localVolume) {
    let toInt = parseFloat(localVolume)
    volume.value = toInt
    range.value.value = toInt * 100
  }
})

onBeforeUnmount(() => clearInterval(interval))
watch(playing, () => (isPlaying.value = playing.value))
</script>

<style lang="scss" scoped>
@import '@/globals';
.section-player {
  z-index: 1000;

  .player {
    display: flex;
    justify-content: space-between;
    background-color: rgb(36, 36, 36);
    padding: 6px 2.4rem;
    .menu {
      display: flex;
      gap: 2rem;
      align-items: center;
      height: 6.4rem;
      button {
        all: unset;
        display: inline-block;
        background: $color-main;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s linear;
        position: relative;

        .spinner {
          font-size: 2.4rem;
        }

        &:hover {
          &::after {
            animation: scale 0.25s linear both;
          }
        }

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba($color-main, 0.25);
          z-index: 19;
          padding: 3.2rem;
          border-radius: 100%;
        }

        &::before {
          content: '';
          animation: pulse 1.4s ease-in-out infinite;
          position: absolute;
          border-radius: 100%;
          z-index: 31000;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
        }

        img {
          display: inline-block;

          z-index: 200;
        }
      }
      svg {
        fill: $color-gray-3;
        transform: rotate(90deg);
        cursor: pointer;
        transition: all 0.1s linear;
        &:hover {
          fill: $color-gray-2;
        }
      }
    }

    .info {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      &__img {
        width: 4rem;
        height: 4rem;
        padding: 4px;
        background-color: $color-bg-2;
        border-radius: 100%;

        img {
          width: 100%;
        }
      }

      &__title {
        transition: all 0.1s linear;
        cursor: pointer;
        &:hover {
          color: $color-main;
        }
      }

      .heart {
        fill: $color-gray-3;
        cursor: pointer;

        &:hover {
          fill: $color-gray-2;
        }
      }

      img {
      }

      .track-info {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        .track-img {
          width: 4.8rem;
          height: 4.8rem;
          img {
            width: 100%;
          }
        }

        .title-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          cursor: pointer;

          &:hover > .title,
          &:hover > .subtitle {
            color: $color-main;
          }
          .title {
            font-weight: 600;
          }
          .subtitle {
            color: $color-gray-2;
          }
        }
      }
    }
    .volume {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
      }

      /********** Range Input Styles **********/
      /*Range Reset*/
      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
      }

      /* Removes default focus */
      input[type='range']:focus {
        outline: none;
      }

      /* Chrome, Safari, Opera and Edge Chromium styles */

      input[type='range']::-webkit-slider-runnable-track {
        background-color: $color-white;
        border-radius: 1rem;
        height: 4px;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -3px;

        background-color: $color-text;
        height: 1rem;
        width: 1rem;
        border-radius: 100%;
      }

      /******** Firefox styles ********/

      input[type='range']::-moz-range-track {
        background-color: $color-white;
        border-radius: 1rem;
        height: 4px;
      }

      input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -3px;

        background-color: $color-text;
        height: 1rem;
        width: 1rem;
        border-radius: 100%;
      }

      input[type='range']:focus::-moz-range-thumb {
        background-color: $color-white;
        border-radius: 0.5rem;
        height: 0.5rem;
      }
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0rem rgba($color-white, 0.2);
  }
  100% {
    box-shadow: 0 0 0 1.6rem rgba($color-white, 0);
  }
}

@keyframes scale {
  0% {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: rgba($color-main, 0.25);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    background-color: rgba($color-main, 1);
  }
}
</style>
