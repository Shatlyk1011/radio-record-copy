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
            <li v-for="tag in tags" :key="tag.id">
              <div v-html="tag.svg"></div>
              <span>{{ tag.name }}</span>
            </li>
          </ul>
        </div>
      </transition>
    </OnClickOutside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'

defineProps({
  tags: {
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
      li {
        display: flex;
        align-items: center;

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
}
</style>
