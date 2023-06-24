<template>
  <div class="slider-component padding-10-x">
    <swiper
      class="wrap"
      :modules="[Navigation]"
      :space-between="gap"
      :slides-per-view="'auto'"
      :navigation="{ prevEl: '.prevEl', nextEl: '.nextEl' }"
    >
      <swiper-slide class="slide" v-for="(s, i) in slides" :key="i">
        <img :src="s.imgUrl" :alt="`Slide ${i + 1}`" />
        <div class="title">
          {{ s.title }}
        </div>
      </swiper-slide>
    </swiper>

    <div class="btns">
      <button class="prevEl">
        <img src="./../assets/icons/arrow.svg" alt="arrow-left" />
      </button>
      <button class="nextEl">
        <img src="./../assets/icons/arrow.svg" alt="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const gap = computed(() => {
  if (width.value <= 880 && width.value > 700) return 8
  else if (width.value <= 700) return 6
  else return 16
})

const slides = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Слушайте радио "На Шашлыки!" и еще 7 летних станций'
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Слушайте радио "На Шашлыки!" и еще 7 летних станций'
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Слушайте радио "На Шашлыки!" и еще 7 летних станций'
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Слушайте радио "На Шашлыки!" и еще 7 летних станций'
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Слушайте радио "На Шашлыки!" и еще 7 летних станций'
  }
]
</script>

<style lang="scss" scoped>
@import '@/globals';
.slider-component {
  position: relative;
  .wrap {
    display: flex;
    width: 100%;
    &:hover ~ .btns > .prevEl,
    &:hover ~ .btns > .nextEl {
      opacity: 1;
    }

    .slide {
      flex-basis: 34rem;
      max-height: 16rem;
      position: relative;
      border-radius: 1.6rem;
      overflow: hidden;
      background: rgb(229, 229, 229);
      background: linear-gradient(180deg, rgba(229, 229, 229, 1) 0%, rgba(37, 37, 37, 1) 100%);
      overflow: hidden;

      @include respond(tab-port) {
        flex-basis: 28rem;
        max-height: 14rem;
      }

      @include respond(phone) {
        flex-basis: 28rem;
        max-height: 14rem;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 98%);
      }
      img {
        width: 100%;
        object-fit: contain;
      }

      .title {
        position: absolute;
        bottom: 1.6rem;
        left: 2rem;
        right: 2.8rem;
        z-index: 5;
        color: $color-text;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 1.2;

        @include respond(tab-port) {
          font-size: 1.6rem;
        }
      }
    }
  }
  .btns {
    .prevEl,
    .nextEl {
      all: unset;
      padding: 8px;
      border-radius: 100%;
      background-color: rgba($color-white, 0.8);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.1s linear;
      cursor: pointer;

      opacity: 0;
    }

    &:hover > * {
      opacity: 1;
    }
    .prevEl {
      left: 2rem;
      z-index: 20;
      z-index: 56;

      img {
        transform: rotate(180deg);
        z-index: 4;
      }
    }

    .nextEl {
      right: 2rem;
      z-index: 20;
    }
  }
}
</style>
