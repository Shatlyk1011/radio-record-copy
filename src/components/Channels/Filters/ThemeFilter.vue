<template>
  <div class="theme-filter">
    <OnClickOutside @trigger="themeFilterBool = false">
      <div tabindex="0" class="theme-wrap" @click="themeFilterBool = !themeFilterBool">
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
              :to="{ name: 'Home', params: { theme: `sort-by-theme=${tag.name}` } }"
              v-for="tag in tags"
              :key="tag.id"
            >
              <div v-html="tag.svg"></div>
              <span>{{ tag.name }}</span>
            </router-link>
          </ul>
        </div>
      </transition>

      <!-- close button with selected theme -->
      <div class="selected-theme" v-if="selectedThemeName">
        <div class="wrap">
          <div id="icon" v-html="selectedThemeIcon"></div>
          <div class="name">{{ selectedThemeName }}</div>
        </div>
        <router-link to="/">
          <svg
            class="close"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.0002 10.586L16.9502 5.636L18.3642 7.05L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.05L7.05023 5.636L12.0002 10.586Z"
            ></path>
          </svg>
        </router-link>
      </div>
    </OnClickOutside>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType, computed } from 'vue'
import { useRoute } from 'vue-router'
import { OnClickOutside } from '@vueuse/components'
import type { ITag } from '@/assets/types'

const props = defineProps({
  tags: {
    type: Array as PropType<ITag[]>,
    required: true
  }
})

const route = useRoute()

const themeFilterBool = ref(false)

const selectedThemeName = computed(() => {
  if (route.params.theme) {
    let theme = route.params.theme.slice(14) as string
    return theme
  } else return null
})

const selectedThemeIcon = computed(() => {
  if (route.params.theme && selectedThemeName.value) {
    let selected = props.tags.filter((tag) => {
      let tagName = tag.name.toLowerCase()
      return tagName == selectedThemeName.value!.toLowerCase()
    })
    return selected[0].svg
  } else return false
})
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
        color: $color-text;
        text-decoration: none;
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

  .selected-theme {
    color: $color-text;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: $color-gray-3;
    border-radius: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.6rem;
    box-sizing: border-box;
    font-weight: 600;

    .wrap {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        fill: $color-white !important;
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    .close {
      padding: 2px;
      border-radius: 100%;
      background-color: rgba($color-text, 0.4);
      cursor: pointer;
      fill: $color-gray-3;
    }
  }
}
</style>
