<template>
  <div class="style-filter">
    <OnClickOutside @trigger="styleFilterBool = false">
      <div
        class="style-wrap"
        tabindex="0"
        @click="styleFilterBool = !styleFilterBool"
      >
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

      <transition name="filter">
        <div class="style-list" v-if="styleFilterBool">
          <ul>
            <li v-for="genre in genres" :key="genre.id">
              <span>{{ genre.name.toLowerCase() }}</span>
              <img src="@/assets/icons/check.svg" alt="check icon" />
            </li>
          </ul>
        </div>
      </transition>
    </OnClickOutside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import { type IGenre } from '@/assets/types'

defineProps({
  genres: {
    required: true,
    type: Array<IGenre>
  }
})

const styleFilterBool = ref(false)
</script>

<style lang="scss">
@import '@/globals';
.style-filter {
  position: relative;
  width: 18rem;

  gap: 1rem;
  align-items: center;
  .style-wrap {
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

  .style-list {
    position: absolute;
    top: 5rem;
    left: 0;
    padding: 1.6rem;
    background-color: $color-bg-2;
    border-radius: 0.8rem;
    z-index: 35;
    ul {
      columns: 2;
      text-transform: capitalize;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s linear;
        &:hover {
          color: $color-main;
        }

        &:not(:last-child) {
          margin-bottom: 1.6rem;
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
}
</style>
