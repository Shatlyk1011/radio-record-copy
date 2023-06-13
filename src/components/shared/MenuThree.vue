<template>
  <ul class="lists">
    <li class="active" tabindex="0">Каналы</li>
    <li tabindex="0">Плейлисты</li>
    <li tabindex="0">События</li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/globals';
ul.lists {
  display: flex;
  gap: 4rem;
  font-size: 5.6rem;
  font-weight: 900;
  color: $color-gray-2;
  li {
    cursor: pointer;
    transition: all 0.1s linear;

    &.active,
    &:focus {
      outline: none;
      color: $color-white;
      cursor: text;
    }

    &:hover {
      color: $color-text;
    }
  }
}
</style>
