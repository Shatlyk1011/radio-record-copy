<template>
  <div class="sort-filter">
    <OnClickOutside @trigger="sortFilterBool = false">
      <div class="filter-wrap" tabindex="0" @click="sortFilterBool = !sortFilterBool">
        <img src="@/assets/icons/up-down.svg" alt="up down arrow" />
      </div>

      <transition name="filter">
        <div class="sort-filter-wrap" v-if="sortFilterBool">
          <ul>
            <li>Сортировака</li>
            <li @click="orderByRecommend">
              Рекомендуемые
              <img
                v-if="order == SORT_BY_RECOMMEND"
                src="@/assets/icons/check.svg"
                alt="check icon"
              />
            </li>
            <li @click="orderByAlphabet">
              По Алфавиту
              <img
                v-if="order == SORT_BY_ALPHABET"
                src="@/assets/icons/check.svg"
                alt="check icon"
              />
            </li>
            <li @click="orderByNew">
              По новизне
              <img v-if="order == SORT_BY_NEW" src="@/assets/icons/check.svg" alt="check icon" />
            </li>
          </ul>
          <ul>
            <li>Вид</li>
            <li @click="compact = 'false'">
              Полный
              <img v-if="compact === 'false'" src="@/assets/icons/check.svg" alt="check icon" v />
            </li>
            <li @click="compact = 'true'">
              Компактный
              <img v-if="compact === 'true'" src="@/assets/icons/check.svg" alt="check icon" />
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

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(20rem - 3.2rem);
        line-height: 1.5;
        img {
          margin-left: auto;
          // width: 100%;
          box-sizing: border-box;
        }

        &:first-child {
          color: $color-gray-3;
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
