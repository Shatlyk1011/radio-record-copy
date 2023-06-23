<template>
  <div class="style-filter">
    <OnClickOutside @trigger="showStyleFilter = false">
      <div class="style-wrap" tabindex="0" @click="showStyleFilter = !showStyleFilter">
        <p>Стили</p>
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

      <div class="style-wrap--port">По стилям</div>

      <transition name="filter">
        <div class="style-list" v-if="showStyleFilter || showFilterPort">
          <ul>
            <router-link
              class="li"
              @click="showStyleFilter = false"
              :to="{ name: 'Home', params: { style: `sort-by-style=${genre.name}` } }"
              v-for="genre in genres"
              :key="genre.id"
            >
              <span>{{ genre.name.toLowerCase() }}</span>
            </router-link>
          </ul>
        </div>
      </transition>

      <!-- close button with selected theme -->
      <div class="selected-style" v-if="selectedStyleName">
        <div class="name">{{ selectedStyleName }}</div>
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { OnClickOutside } from '@vueuse/components'
import { type IGenre } from '@/assets/types'

defineProps({
  genres: {
    required: true,
    type: Array<IGenre>
  },
  showFilterPort: {
    required: true,
    type: Boolean
  }
})

const route = useRoute()

const selectedStyleName = computed(() => {
  if (route.params.style) return route.params.style.slice(14) as string
  else return null
})

const showStyleFilter = ref(false)
</script>

<style lang="scss">
@import '@/globals';
.style-filter {
  position: relative;
  width: 18rem;
  gap: 1rem;
  align-items: center;

  @include respond(tab-port) {
    width: 100%;
  }
  .style-wrap {
    display: flex;
    width: 100%;
    flex-grow: 1;
    padding: 0.8rem 1.6rem;
    align-items: center;
    box-sizing: border-box;

    @include respond(tab-port) {
      display: none;
    }
    p {
      margin-right: auto;
      font-weight: 600;
    }

    svg {
      transform: rotate(90deg);
    }

    &--port {
      display: none;
      @include respond(tab-port) {
        display: block;
        color: $color-gray-2;
        padding-bottom: 0;
        margin-bottom: 1.6rem;
      }
    }
  }

  .style-list {
    position: absolute;
    top: 5rem;
    left: 0;
    padding: 1.6rem;
    background-color: $color-bg-2;
    border-radius: 0.8rem;
    box-sizing: border-box;
    z-index: 35;

    @include respond(tab-port) {
      padding: 0;
      top: 0;
      position: static;
      display: flex;
      background-color: transparent;
    }
    ul {
      columns: 2;
      text-transform: capitalize;

      @include respond(tab-port) {
        columns: auto;
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
        margin-bottom: 2.4rem;
      }
      .li {
        color: $color-text;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s linear;

        @include respond(tab-port) {
          padding: 6px 0.8rem;
          background-color: $color-bg-2;
          border-radius: 1.2rem;
        }
        &:hover {
          color: $color-main;
        }

        &:not(:last-child) {
          margin-bottom: 1.6rem;

          @include respond(tab-port) {
            margin-bottom: 0;
          }
        }

        span {
          display: inline-block;
        }
        img {
          margin-left: auto;
        }
      }
    }
  }

  .selected-style {
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

    @include respond(tab-port) {
      display: none;
    }

    .name {
      font-size: 1.6rem;
    }
    .close {
      padding: 2px;
      border-radius: 100%;
      background-color: rgba($color-text, 0.5);
      cursor: pointer;
      fill: $color-gray-3;
    }
  }
}
</style>
