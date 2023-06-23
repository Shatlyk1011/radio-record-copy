<template>
  <div :class="['sort-filter', sortFilterBool ? 'layer' : null]">
    <OnClickOutside @trigger="sortFilterBool = false">
      <div class="filter-wrap" tabindex="0" @click="sortFilterBool = !sortFilterBool">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="rgb(235,235,235)"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.9498 7.95L10.5358 9.364L7.9998 6.828V20H5.9998V6.828L3.4648 9.364L2.0498 7.95L6.9998 3L11.9498 7.95ZM21.9498 16.05L16.9998 21L12.0498 16.05L13.4638 14.636L16.0008 17.172L15.9998 4H17.9998V17.172L20.5358 14.636L21.9498 16.05Z"
          ></path>
        </svg>
      </div>

      <transition name="filter">
        <div class="sort-filter-wrap" v-if="sortFilterBool">
          <div class="filter-wrap-nav">
            <p>Сортировка и вид</p>
            <svg
              @click="sortFilterBool = false"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(235,235,235)"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.0002 10.586L16.9502 5.636L18.3642 7.05L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.05L7.05023 5.636L12.0002 10.586Z"
              ></path>
            </svg>
          </div>
          <ul>
            <li>Сортировака</li>
            <li @click="orderByRecommend">
              Рекомендуемые

              <svg
                v-if="order == SORT_BY_RECOMMEND"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="rgb(252, 88, 31)"
                viewBox="0 0 24 24"
                class="injected-svg"
              >
                <path
                  d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                ></path>
              </svg>
            </li>
            <li @click="orderByAlphabet">
              По Алфавиту
              <svg
                v-if="order == SORT_BY_ALPHABET"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="rgb(252, 88, 31)"
                viewBox="0 0 24 24"
                class="injected-svg"
              >
                <path
                  d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                ></path>
              </svg>
            </li>
            <li @click="orderByNew">
              По новизне
              <svg
                v-if="order == SORT_BY_NEW"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="rgb(252, 88, 31)"
                viewBox="0 0 24 24"
                class="injected-svg"
              >
                <path
                  d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                ></path>
              </svg>
            </li>
          </ul>
          <ul>
            <li>Вид</li>
            <li @click="compact = 'false'">
              Полный
              <svg
                v-if="compact === 'false'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="rgb(252, 88, 31)"
                viewBox="0 0 24 24"
                class="injected-svg"
              >
                <path
                  d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                ></path>
              </svg>
            </li>
            <li @click="compact = 'true'">
              Компактный
              <svg
                v-if="compact === 'true'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="rgb(252, 88, 31)"
                viewBox="0 0 24 24"
                class="injected-svg"
              >
                <path
                  d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                ></path>
              </svg>
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
import { useStorageCompact, useStorageOrder } from '@/store/store'
import { SORT_BY_RECOMMEND, SORT_BY_ALPHABET, SORT_BY_NEW } from '@/store/store'

const sortFilterBool = ref(false)

const compact = useStorageCompact()

const { order, orderByRecommend, orderByAlphabet, orderByNew } = useStorageOrder()
</script>

<style lang="scss">
@import '@/globals';
.sort-filter {
  position: relative;
  display: inline-block;

  @include respond(tab-port) {
    position: static;

    &.layer {
      &::before {
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 200vh;
        background-color: rgba($color-bg, 0.7);
        position: absolute;
        z-index: 1005;
      }
    }
  }

  .filter-wrap {
    display: inline-block;
    padding: 0.8rem;

    img {
    }
  }

  .sort-filter-wrap {
    display: inline-flex;
    gap: 4rem;
    padding: 2rem;
    background-color: $color-bg-2;
    position: absolute;
    top: 5rem;
    left: 0;
    border-radius: 0.8rem;
    z-index: 35;

    @include respond(tab-port) {
      background-color: rgb(20, 20, 20);
      position: fixed;
      top: auto;
      bottom: 0;
      z-index: 1005;
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
      gap: 2.4rem;
    }

    .filter-wrap-nav {
      display: none;

      @include respond(tab-port) {
        display: flex;
        justify-content: space-between;
        color: $color-text;
        font-weight: 600;
        font-size: 1.8;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @include respond(tab-port) {
        background-color: $color-bg-2;
        padding: 1.6rem 1.2rem;
        border-radius: 8px;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(20rem - 3.2rem);
        line-height: 1.5;
        svg {
          margin-left: auto;
          box-sizing: border-box;
        }

        &:first-child {
          color: $color-gray-3;

          @include respond(tab-port) {
            display: none;
          }
        }
        &:not(:first-child) {
          cursor: pointer;
          &:hover {
            color: $color-main;
          }
        }
      }
    }
  }
}
</style>
