<template>
  <div class="filters">
    <SortFilter />
    <div class="favs" tabindex="0">
      <img src="@/assets/icons/heart.svg" alt="heart icon" />
      <span>Избранные</span>
    </div>
    <StyleFilter />
    <ThemeFilter />
  </div>
</template>

<script setup>
import SortFilter from './Filters/SortFilter.vue'
import StyleFilter from './Filters/StyleFilter.vue'
import ThemeFilter from './Filters//ThemeFilter.vue'
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
