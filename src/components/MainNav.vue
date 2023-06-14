<template>
  <header>
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 46">
        <path
          d="M68.3 24H79c8-11.4 29.8-18.8 41.7-24l-5.4 1.6-.3.2-15.3 4.6-3.1.9-17 5.3-3.4-3.1h-5.4l-3.5 3.2L43 5 32 1.6 26.6 0c12.3 5.4 35.1 14.5 41.7 24zm5.2-11.4c.9 0 1.6.3 2.2.8.6.5.9 1.1.9 1.9 0 .8-.4 2-1.1 3-.5.7-1.2 1.2-1.9 1.3-.7 0-1.3-.5-1.8-1.2-.7-.9-1.1-2-1.1-2.9v-.2c-.2-1.5 1.1-2.7 2.8-2.7zm70.3 17.5c-.5-1.3-2.4-1.5-4.1-1.5h-15.9l-.1.4-.1.2-4.8 16-.1.2-.2.7h16.8c2.8 0 4.6-1 5.5-3.6L143 35c1-2.6 1.2-3.9.8-4.9zm-10.2 11.7h-6.3l2.7-8.9h6.3l-2.7 8.9zM94.5 29.1c-.8-.4-2-.5-3.1-.5H79.9c-2.8 0-4.6 1-5.5 3.6l-2.2 7.5c-.6 2-1.8 4.8.3 5.9.8.4 2 .5 3.1.5h11.5c2.8 0 4.6-1 5.5-3.6l2.2-7.5c.6-2 1.8-4.9-.3-5.9zm-9.2 12.7h-6.4l2.7-8.9H88l-2.7 8.9zm-39.8 0H32.8l.7-2.3h10.9l.1-.4.1-.2.9-2.9.1-.2.2-.7h-11l.7-2.3h13.8l.1-.4.1-.2.8-2.8.1-.2.2-.7H29.3l-.1.4-.2.2-4.8 16-.1.2-.1.7h21.2l.1-.4.1-.2.8-2.8.1-.2.2-.7h-1zm70.2-13.3H99.2c-1.6 5.5-3.3 11-4.9 16.6l-.1.2-.3.7h7.5l.1-.4.1-.2 1.7-5.6h2.5l2.7 5.7.1.1.1.3h8.2l-3.3-6.6c3.4-.4 4.2-1.8 4.8-4.2.2-.6.3-1.2.5-1.7 1.2-3.5-.1-4.8-3.2-4.9zm-4.3 5.1L111 35c-.1.4-.3.5-.7.6l-6.4 1.7 1.4-4.5h5.5c.6 0 .8.2.6.8zm-86.9 1.6c.2-.6.3-1.2.5-1.7 1.2-3.6-.1-4.9-3.2-4.9H5.3C3.7 34.1 2 39.6.4 45.2l-.1.2-.3.6h7.4l.1-.4.1-.2 1.7-5.6h2.5l2.7 5.7.1.1.1.3h8.2l-3.3-6.6c3.5-.3 4.3-1.7 4.9-4.1zm-7-1.6l-.4 1.4c-.1.4-.3.5-.7.6L10 37.3l1.4-4.5h5.5c.6 0 .8.2.6.8zM71.1 35l1.2-3.8c.5-1.3-.4-2.8-1.9-2.7H57c-2.8 0-4.6 1-5.5 3.6l-2.2 7.5c-.6 2-1.8 4.8.3 5.9.8.4 2 .5 3.1.5h12.5c1.5 0 3.2-1.4 3.6-2.7l1-3.7h-5.7l-.6 2.1h-7.3l2.7-8.9h7l-.8 2.2h6z"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <ul v-if="!searchBool">
      <li @click="navBool = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="rgb(235,235,235)"
        >
          <path d="M3 4H21V6H3V4ZM3 11H19V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </li>
      <li class="search-li" @click="showSearch">
        <svg
          class="search-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="rgb(235,235,235)"
        >
          <path
            d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
          ></path>
        </svg>
      </li>
      <li class="premium-li">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path
            d="M2.66699 25.3334H29.3337V28.0001H2.66699V25.3334ZM2.66699 6.66675L9.33366 11.3334L16.0003 2.66675L22.667 11.3334L29.3337 6.66675V22.6667H2.66699V6.66675ZM5.33366 11.7881V20.0001H26.667V11.7881L22.107 14.9801L16.0003 7.04008L9.89366 14.9801L5.33366 11.7867V11.7881Z"
          ></path>
        </svg>
        <span>Перейти на премиум</span>
      </li>
      <li class="login-li">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.5 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.5 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.5 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.6022 11 11.2206 10.842 10.9393 10.5607C10.658 10.2794 10.5 9.89782 10.5 9.5C10.5 9.10218 10.658 8.72064 10.9393 8.43934C11.2206 8.15804 11.6022 8 12 8C12.3978 8 12.7794 8.15804 13.0607 8.43934C13.342 8.72064 13.5 9.10218 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11Z"
          ></path>
        </svg>
        <span>Войти</span>
      </li>
    </ul>

    <div class="search" v-if="searchBool">
      <OnClickOutside @trigger="searchBool = false">
        <label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
            ></path>
          </svg>
          <input
            ref="input"
            type="search"
            placeholder="Станции, плейлисты, треки, события"
          />
        </label>
      </OnClickOutside>

      <div class="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="rgb(168, 168, 168)"
        >
          <path
            d="M12.0002 10.586L16.9502 5.636L18.3642 7.05L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.05L7.05023 5.636L12.0002 10.586Z"
          ></path>
        </svg>
      </div>
    </div>

    <transition name="nav-transition">
      <nav class="nav" v-if="navBool">
        <div class="nav-logo">
          <svg
            class="icon-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144 46"
          >
            <path
              d="M68.3 24H79c8-11.4 29.8-18.8 41.7-24l-5.4 1.6-.3.2-15.3 4.6-3.1.9-17 5.3-3.4-3.1h-5.4l-3.5 3.2L43 5 32 1.6 26.6 0c12.3 5.4 35.1 14.5 41.7 24zm5.2-11.4c.9 0 1.6.3 2.2.8.6.5.9 1.1.9 1.9 0 .8-.4 2-1.1 3-.5.7-1.2 1.2-1.9 1.3-.7 0-1.3-.5-1.8-1.2-.7-.9-1.1-2-1.1-2.9v-.2c-.2-1.5 1.1-2.7 2.8-2.7zm70.3 17.5c-.5-1.3-2.4-1.5-4.1-1.5h-15.9l-.1.4-.1.2-4.8 16-.1.2-.2.7h16.8c2.8 0 4.6-1 5.5-3.6L143 35c1-2.6 1.2-3.9.8-4.9zm-10.2 11.7h-6.3l2.7-8.9h6.3l-2.7 8.9zM94.5 29.1c-.8-.4-2-.5-3.1-.5H79.9c-2.8 0-4.6 1-5.5 3.6l-2.2 7.5c-.6 2-1.8 4.8.3 5.9.8.4 2 .5 3.1.5h11.5c2.8 0 4.6-1 5.5-3.6l2.2-7.5c.6-2 1.8-4.9-.3-5.9zm-9.2 12.7h-6.4l2.7-8.9H88l-2.7 8.9zm-39.8 0H32.8l.7-2.3h10.9l.1-.4.1-.2.9-2.9.1-.2.2-.7h-11l.7-2.3h13.8l.1-.4.1-.2.8-2.8.1-.2.2-.7H29.3l-.1.4-.2.2-4.8 16-.1.2-.1.7h21.2l.1-.4.1-.2.8-2.8.1-.2.2-.7h-1zm70.2-13.3H99.2c-1.6 5.5-3.3 11-4.9 16.6l-.1.2-.3.7h7.5l.1-.4.1-.2 1.7-5.6h2.5l2.7 5.7.1.1.1.3h8.2l-3.3-6.6c3.4-.4 4.2-1.8 4.8-4.2.2-.6.3-1.2.5-1.7 1.2-3.5-.1-4.8-3.2-4.9zm-4.3 5.1L111 35c-.1.4-.3.5-.7.6l-6.4 1.7 1.4-4.5h5.5c.6 0 .8.2.6.8zm-86.9 1.6c.2-.6.3-1.2.5-1.7 1.2-3.6-.1-4.9-3.2-4.9H5.3C3.7 34.1 2 39.6.4 45.2l-.1.2-.3.6h7.4l.1-.4.1-.2 1.7-5.6h2.5l2.7 5.7.1.1.1.3h8.2l-3.3-6.6c3.5-.3 4.3-1.7 4.9-4.1zm-7-1.6l-.4 1.4c-.1.4-.3.5-.7.6L10 37.3l1.4-4.5h5.5c.6 0 .8.2.6.8zM71.1 35l1.2-3.8c.5-1.3-.4-2.8-1.9-2.7H57c-2.8 0-4.6 1-5.5 3.6l-2.2 7.5c-.6 2-1.8 4.8.3 5.9.8.4 2 .5 3.1.5h12.5c1.5 0 3.2-1.4 3.6-2.7l1-3.7h-5.7l-.6 2.1h-7.3l2.7-8.9h7l-.8 2.2h6z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="white"
            />
          </svg>
          <svg
            @click="navBool = false"
            class="icon-2"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="rgb(168, 168, 168)"
          >
            <path
              d="M12.0002 10.586L16.9502 5.636L18.3642 7.05L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.05L7.05023 5.636L12.0002 10.586Z"
            ></path>
          </svg>
        </div>

        <div class="middle">
          <MenuThree />

          <div class="menu">
            <ul>
              <li>Superchart</li>
              <li>Club chart</li>
              <li>New</li>
            </ul>

            <ul>
              <li class="color-green">Премиум</li>
              <li>Новости</li>
              <li>Label</li>
              <li>Booking</li>
            </ul>

            <ul>
              <li>Города вещания</li>
              <li>Расписание</li>
              <li>Рекломадателям</li>
            </ul>

            <ul>
              <li>Контакты</li>
              <li>Про Record</li>
              <li>Сообщить о проблеме</li>
            </ul>
          </div>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import MenuThree from '@/components/shared/MenuThree.vue'

import { OnClickOutside } from '@vueuse/components'

import { ref } from 'vue'

const searchBool = ref(false)
const input = ref()

const navBool = ref(false)

const showSearch = () => {
  searchBool.value = true
  // input.value.focus()
}
</script>

<style lang="scss" scoped>
@import '@/globals';
header {
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2.8rem 4rem;
  .logo {
    width: 14rem;
    svg {
      width: 100%;
      height: 100%;
      fill: #fff;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
    li {
      cursor: pointer;
    }

    .search-li {
      flex-grow: 1;
      justify-content: flex-start;
      cursor: auto;

      .search-svg {
        cursor: pointer;
      }
    }

    .premium-li,
    .login-li {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-weight: 500;
      transition: all 0.1s linear;

      &:hover {
        color: $color-main;
      }
    }

    .premium-li {
      font-size: 1.4rem;
      color: $color-gray-1;
      margin-left: auto;

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }

    .login {
    }
  }

  .search {
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    label {
      display: flex;
      padding: 0.8rem 1.2rem;
      gap: 1rem;
      width: 42rem;
      background-color: $color-bg-2;
      border-radius: 0.8rem;
      margin-right: 4rem;
      svg {
        color: $color-gray-2;
      }

      input {
        all: unset;
        display: inline-block;
        width: 100%;

        &::placeholder {
          font-family: inherit;
          font-size: 1.4rem;
        }
      }
    }

    .close {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }

  .nav {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: $color-bg;
    padding: 3.2rem 4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .nav-logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: max-width;
      box-sizing: content-box;

      .icon-1 {
        width: 112px;
      }

      .icon-2 {
        width: 4rem;
        cursor: pointer;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      margin: 14rem auto 0;

      .menu {
        display: flex;
        gap: 4.8rem;
        ul {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 1.6rem;
          font-size: 2rem;
          color: $color-gray-1;
          width: max-content;
          li {
            line-height: 1.4;
            &:hover {
              color: $color-text;
            }
          }
        }
      }
    }
  }
}

.nav-transition-enter-active,
.nav-transition-leave-active {
  transition: opacity 0.5s ease;
}

.nav-transition-enter-from,
.nav-transition-leave-to {
  opacity: 0;
}
</style>
