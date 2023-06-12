<template>
  <ul class="lists">
    <li class="active">Каналы</li>
    <li>Плейлисты</li>
    <li>События</li>
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

    &.active {
      color: $color-white;
      cursor: text;
    }

    &:hover {
      color: $color-text;
    }
  }
}
</style>
