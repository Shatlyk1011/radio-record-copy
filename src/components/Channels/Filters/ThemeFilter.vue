<template>
  <div class="theme-filter">
    <OnClickOutside @trigger="themeFilterBool = false">
      <div
        tabindex="0"
        class="theme-wrap"
        @click="themeFilterBool = !themeFilterBool"
      >
        <p>Темы</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.172 11.9997L8.22205 7.04974L9.63605 5.63574L16 11.9997L9.63605 18.3637L8.22205 16.9497L13.172 11.9997Z"
          ></path>
        </svg>
      </div>

      <transition name="filter">
        <div class="theme-list" v-if="themeFilterBool">
          <ul>
            <router-link
              class="li"
              @click="themeFilterBool = false"
              :to="{ name: 'Home', params: { tag: `sortByTheme=${tag.name}` } }"
              v-for="tag in tags"
              :key="tag.id"
            >
              <div v-html="tag.svg"></div>
              <span>{{ tag.name }}</span>
            </router-link>
          </ul>
        </div>
      </transition>
      <div class="selected-theme">
        <div class="name">{{ /* selectedTheme */ }}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.0002 10.586L16.9502 5.636L18.3642 7.05L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.05L7.05023 5.636L12.0002 10.586Z"
          ></path>
        </svg>
      </div>
    </OnClickOutside>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import type { ITag } from '@/assets/types'

defineProps({
  tags: {
    type: Array as PropType<ITag[]>,
    required: true
  }
})

const themeFilterBool = ref(false)
</script>

<style lang="scss">
@import '@/globals';
.theme-filter {
  position: relative;
  width: 18rem;

  gap: 1rem;
  align-items: center;
  .theme-wrap {
    display: flex;
    width: 100%;
    flex-grow: 1;
    padding: 0.8rem 1.6rem;
    align-items: center;
    box-sizing: border-box;
    p {
      margin-right: auto;
      font-weight: 600;
    }

    svg {
      transform: rotate(90deg);
    }
  }

  .theme-list {
    position: absolute;
    top: 5rem;
    left: 0;
    padding: 1.6rem;
    background-color: $color-bg-2;
    border-radius: 0.8rem;
    width: 100%;
    box-sizing: border-box;
    z-index: 35;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      text-transform: capitalize;
      .li {
        display: flex;
        align-items: center;
        color: $color-text;
        text-decoration: none;
        gap: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s linear;
        &:hover {
          color: $color-main;
        }

        span {
          display: inline-block;
        }
      }
    }
  }

  .selected-theme {
    color: red;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: $color-white;
    border-radius: 0.8rem;
  }
}
</style>
