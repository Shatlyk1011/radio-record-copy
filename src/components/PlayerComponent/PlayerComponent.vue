<template>
  <section class="section-player">
    <div class="player" v-if="width > 920">
      <div class="menu">
        <button type="button" :class="playing ? 'active ' : null">
          <svg
            @click="playing = false"
            class="action-svg"
            v-if="playing && !isWaiting"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="rgb(235,235,235)"
            viewBox="0 0 320 512"
          >
            <path
              d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
            />
          </svg>
          <LoadingComponent v-if="isWaiting" />
          <svg
            @click="playing = true"
            class="action-svg"
            v-if="!playing && !isWaiting"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="rgb(235,235,235)"
            viewBox="0 0 384 512"
          >
            <path
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            />
          </svg>
        </button>
        <svg
          class="menu-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-if="!noSound"
          width="24"
          height="24"
          fill="rgb(122, 122, 122)"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.889 16H2C1.73478 16 1.48043 15.8947 1.29289 15.7071C1.10536 15.5196 1 15.2652 1 15V9.00002C1 8.73481 1.10536 8.48045 1.29289 8.29291C1.48043 8.10538 1.73478 8.00002 2 8.00002H5.889L11.183 3.66802C11.2563 3.60797 11.3451 3.56996 11.4391 3.55841C11.5331 3.54687 11.6284 3.56227 11.714 3.60282C11.7996 3.64337 11.872 3.7074 11.9226 3.78745C11.9732 3.86751 12.0001 3.9603 12 4.05502V19.945C12.0001 20.0397 11.9732 20.1325 11.9226 20.2126C11.872 20.2926 11.7996 20.3567 11.714 20.3972C11.6284 20.4378 11.5331 20.4532 11.4391 20.4416C11.3451 20.4301 11.2563 20.3921 11.183 20.332L5.89 16H5.889ZM19.406 20.134L17.99 18.718C18.938 17.8745 19.6964 16.8397 20.2152 15.6817C20.734 14.5237 21.0015 13.2689 21 12C21.0012 10.6661 20.7054 9.34867 20.1339 8.14339C19.5624 6.93811 18.7296 5.87526 17.696 5.03202L19.116 3.61202C20.3345 4.64357 21.3132 5.9285 21.9841 7.37722C22.6549 8.82593 23.0016 10.4035 23 12C23 15.223 21.614 18.122 19.406 20.134ZM15.863 16.591L14.441 15.169C14.9265 14.7957 15.3196 14.3158 15.5899 13.7663C15.8602 13.2167 16.0006 12.6124 16 12C16 10.57 15.25 9.31502 14.12 8.60802L15.559 7.16902C16.3165 7.72621 16.9321 8.45387 17.3562 9.29314C17.7802 10.1324 18.0008 11.0597 18 12C18 13.842 17.17 15.49 15.863 16.591Z"
          ></path>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="rgb(122, 122, 122)"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.889 16H2C1.73478 16 1.48043 15.8947 1.29289 15.7071C1.10536 15.5196 1 15.2652 1 15V9.00002C1 8.73481 1.10536 8.48045 1.29289 8.29291C1.48043 8.10538 1.73478 8.00002 2 8.00002H5.889L11.183 3.66802C11.2563 3.60797 11.3451 3.56996 11.4391 3.55841C11.5331 3.54687 11.6284 3.56227 11.714 3.60282C11.7996 3.64337 11.872 3.7074 11.9226 3.78745C11.9732 3.86751 12.0001 3.9603 12 4.05502V19.945C12.0001 20.0397 11.9732 20.1325 11.9226 20.2126C11.872 20.2926 11.7996 20.3567 11.714 20.3972C11.6284 20.4378 11.5331 20.4532 11.4391 20.4416C11.3451 20.4301 11.2563 20.3921 11.183 20.332L5.89 16H5.889ZM20.414 12L23.95 15.536L22.536 16.95L19 13.414L15.464 16.95L14.05 15.536L17.586 12L14.05 8.46402L15.464 7.05002L19 10.586L22.536 7.05002L23.95 8.46402L20.414 12Z"
          ></path>
        </svg>
        <input @input="handleVolume" class="range" type="range" min="0" max="100" ref="range" />
      </div>
    </div>

    <!-- COMPACT PLAYER -->
    <div class="player-compact" v-if="(width <= 920 && playing) || (width <= 920 && autoplay)">
      <div class="player-compact__info">
        <button class="player-compact__btn" type="button">
          <img v-if="playlist?.track.image100" :src="playlist?.track.image100" alt="playlist img" />
          <img
            v-else
            src="https://www.radiorecord.ru/local/templates/record/assets/build/images/DefaultTrack_100.png"
            alt="playlist img"
          />

          <div class="wrap-abs">
            <svg
              @click="playing = false"
              v-if="playing && !isWaiting"
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(235,235,235)"
              viewBox="0 0 320 512"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
              />
            </svg>

            <LoadingComponent class="compact-loading" v-if="isWaiting" />
            <svg
              @click="playing = true"
              v-if="!playing && !isWaiting"
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(235,235,235)"
              viewBox="0 0 384 512"
            >
              <path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>
          </div>
        </button>
        <div class="description">
          <div class="title">{{ playlist?.track.artist }}</div>
          <div class="subtitle">{{ playlist?.track.song }}</div>
          <div class="station-name">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6.116 20.087C4.84003 19.1599 3.80182 17.9437 3.08639 16.538C2.37097 15.1324 1.99867 13.5772 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22.0013 13.5772 21.629 15.1324 20.9136 16.538C20.1982 17.9437 19.16 19.1599 17.884 20.087L16.869 18.348C18.1954 17.3306 19.1698 15.9232 19.6552 14.3236C20.1407 12.724 20.1129 11.0125 19.5757 9.42947C19.0385 7.84648 18.0189 6.47153 16.6601 5.49776C15.3013 4.524 13.6717 4.00034 12 4.00034C10.3283 4.00034 8.69867 4.524 7.3399 5.49776C5.98114 6.47153 4.96154 7.84648 4.42434 9.42947C3.88714 11.0125 3.85932 12.724 4.34478 14.3236C4.83025 15.9232 5.80461 17.3306 7.131 18.348L6.116 20.087ZM8.15 16.602C7.20503 15.8114 6.52634 14.7491 6.20616 13.5594C5.88597 12.3696 5.9398 11.1102 6.36035 9.9521C6.78089 8.79403 7.54776 7.7935 8.55675 7.08644C9.56574 6.37939 10.7679 6.0001 12 6.0001C13.2321 6.0001 14.4343 6.37939 15.4433 7.08644C16.4523 7.7935 17.2191 8.79403 17.6397 9.9521C18.0602 11.1102 18.114 12.3696 17.7939 13.5594C17.4737 14.7491 16.795 15.8114 15.85 16.602L14.82 14.836C15.3818 14.2775 15.7651 13.5649 15.9214 12.7883C16.0777 12.0117 15.9998 11.2062 15.6978 10.4739C15.3957 9.74165 14.8831 9.11552 14.2248 8.67495C13.5664 8.23437 12.7921 7.99917 12 7.99917C11.2079 7.99917 10.4336 8.23437 9.77525 8.67495C9.11694 9.11552 8.60426 9.74165 8.30221 10.4739C8.00016 11.2062 7.92234 12.0117 8.07861 12.7883C8.23488 13.5649 8.61821 14.2775 9.18 14.836L8.15 16.602ZM11 13H13V22H11V13Z"
              ></path>
            </svg>
            <p>{{ channel?.title }}</p>
          </div>
        </div>
      </div>
      <svg
        class="menu-svg"
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
    </div>
    <audio
      :autoplay="autoplay"
      :onLoadstart="onLoadStart"
      preload="auto"
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
import { useWindowSize } from '@vueuse/core'

import LoadingComponent from '@/components/shared/LoadingComponent.vue'

import useStation from '@/composables/useStation'

const audio = ref()
const noSound = ref(false)
const range = ref()

const { playing, volume } = useMediaControls(audio)
const { width } = useWindowSize()

const onLoadStart = () => {
  if (autoplay.value) isWaiting.value = true
}

const { channel, playlist, getPlaylist, handleStation, isPlaying, isWaiting, autoplay } =
  useStation()

const handleVolume = (e: Event) => {
  const val = parseFloat((e.target as HTMLInputElement).value) / 100
  volume.value = val
  localStorage.setItem('volume', val + '')
  //change icon if no volume
  val === 0 ? (noSound.value = true) : (noSound.value = false)
}

const interval = setInterval(async () => {
  await getPlaylist(channel.value!.id)
}, 7000)

onMounted(async () => {
  await handleStation()
  //set default volume from localStorage
  let localVolume = localStorage.getItem('volume')
  if (localVolume && width.value > 920) {
    let volumeInt = parseFloat(localVolume)
    volume.value = volumeInt
    range.value.value = volumeInt * 100
  }
})

onBeforeUnmount(() => clearInterval(interval))
watch([playing, width], () => {
  isPlaying.value = playing.value
  if (width.value <= 920) {
    volume.value = 1
  }
})
</script>

<style lang="scss" scoped>
@import '@/globals';
.section-player {
  z-index: 998;
  background-color: rgb(36, 36, 36);
  .player {
    display: flex;
    justify-content: space-between;

    padding: 0.8rem 2.4rem;
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

        &.active::before {
          content: '';
          animation: pulse 1.4s ease-in-out infinite;
          position: absolute;
          border-radius: 100%;
          z-index: 1100;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
        }

        .action-svg {
          display: inline-block;
          fill: $color-text;
          z-index: 1101;
        }
      }
      .menu-svg {
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
        height: 2px;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -6px;

        background-color: $color-text;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 100%;
      }

      /******** Firefox styles ********/

      input[type='range']::-moz-range-track {
        background-color: $color-white;
        border-radius: 1rem;
        height: 2px;
      }

      input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -6px;

        background-color: $color-text;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 100%;
      }
    }
  }

  /* COMPACT PLAYER */
  .player-compact {
    background-color: rgb(36, 36, 36);
    display: flex;
    justify-content: space-between;
    background-color: rgb(36, 36, 36);
    padding: 1rem 2.4rem;
    border-top: 1px solid #3d3d3d;
    border-bottom: 1px solid #3d3d3d;

    @include respond(phone) {
      padding: 1rem 1.6rem;
    }
    &__info {
      display: flex;
      gap: 1rem;
    }
    &__btn {
      all: unset;
      max-width: 5.6rem;
      border-radius: 1rem;
      max-height: 5.6rem;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }

      .wrap-abs {
        z-index: 500;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color-black, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        .icon {
          width: 2.4rem;
        }

        .compact-loading {
          font-size: 3.2rem;
        }
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: $color-gray-2;

      @include respond(phone) {
        font-size: 1.4rem;
      }

      .title {
        font-weight: 600;
        color: $color-text;
      }

      .subtitle {
        text-transform: uppercase;
      }

      .station-name {
        display: flex;
        align-items: center;
        gap: 3px;
        font-size: 1.2rem;
      }
    }
    .menu-svg {
      transform: rotate(90deg);
      color: $color-gray-2;
      align-self: center;
    }
  }
}
</style>
