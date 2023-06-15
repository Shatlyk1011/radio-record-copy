<template>
  <div class="filters">
    <SortFilter />
    <div class="favs" tabindex="0">
      <img src="@/assets/icons/heart.svg" alt="heart icon" />
      <span>Избранные</span>
    </div>
    <StyleFilter :genres="genre" />
    <ThemeFilter :tags="tags" />
  </div>
</template>

<script setup lang="ts">
import SortFilter from '@/components/Channels/Filters/SortFilter.vue'
import StyleFilter from '@/components/Channels/Filters/StyleFilter.vue'
import ThemeFilter from '@/components/Channels/Filters//ThemeFilter.vue'

import { tags, genre } from '@/db'
</script>

<style lang="scss">
@import '@/globals';
.filters {
  display: flex;
  gap: 0.8rem;
  .favs {
    display: flex;
    gap: 1rem;
    padding: 0.8rem 1.6rem;
    align-items: center;

    img {
    }

    span {
      font-weight: 600;
    }
  }
}

.filter-wrap,
.favs,
.style-wrap,
.theme-wrap {
  background-color: $color-bg-2;
  transition: all 0.1s linear;
  border-radius: 0.8rem;
  cursor: pointer;
  z-index: 35;

  &:hover {
    background-color: $color-bg-3;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: inset 0 0 0 2px rgba(#fff, 0.4);
  }
}
</style>
