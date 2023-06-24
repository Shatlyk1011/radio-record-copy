<template>
  <div class="login-component">
    <div class="top">
      <p>Вход</p>
      <svg
        @click="emitClose"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12.0002 10.586L16.9502 5.636L18.3642 7.05L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.05L7.05023 5.636L12.0002 10.586Z"
        ></path>
      </svg>
    </div>

    <div class="middle align-center">
      <p class="help align-center">Войти с помощью</p>
      <div class="links">
        <div class="vk">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M13.0718 20C4.87193 20 0.194878 14.3693 0 5H4.10742C4.24233 11.8768 7.27038 14.7898 9.66896 15.3904V5H13.5365V10.9309C15.9051 10.6756 18.3932 7.97298 19.2327 5H23.1004C22.4558 8.66368 19.7575 11.3663 17.8387 12.4774C19.7575 13.3784 22.8307 15.7357 24 20H19.7425C18.8281 17.1471 16.5497 14.9399 13.5365 14.6396V20H13.0718Z"
            ></path>
          </svg>
        </div>
      </div>
      <span class="or">или</span>

      <form>
        <label>
          <input type="text" placeholder="Адрес электронной почты" required />
        </label>
        <label class="password" required>
          <input :type="showPassword ? 'text' : 'password'" placeholder="Пароль" />
          <span @click="showPassword = !showPassword" v-if="showPassword">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(122,122,122)"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.9999 3.49144C17.3919 3.49144 21.8779 6.88 22.8189 12C21.8789 17.12 17.3919 20.5 11.9999 20.5C6.60791 20.5 2.12191 17.12 1.18091 12C2.12091 6.88 6.60791 3.49144 11.9999 3.49144ZM11.9999 18.5C14.0394 18.4996 16.0183 17.8068 17.6128 16.5352C19.2072 15.2635 20.3228 13.9883 20.7769 12C20.3211 10.0133 19.2048 8.73145 17.6105 7.46147C16.0162 6.19149 14.0382 5.49997 11.9999 5.49997C9.96161 5.49997 7.9836 6.19149 6.38928 7.46147C4.79497 8.73145 3.67868 10.0133 3.22291 12C3.677 13.9883 4.79258 15.2635 6.38705 16.5352C7.98152 17.8068 9.96044 18.4996 11.9999 18.5ZM11.9999 16.5C10.8064 16.5 9.66184 16.0259 8.81793 15.182C7.97401 14.3381 7.49991 13.1935 7.49991 12C7.49991 10.8065 7.97401 9.66193 8.81793 8.81802C9.66184 7.9741 10.8064 7.5 11.9999 7.5C13.1934 7.5 14.338 7.9741 15.1819 8.81802C16.0258 9.66193 16.4999 10.8065 16.4999 12C16.4999 13.1935 16.0258 14.3381 15.1819 15.182C14.338 16.0259 13.1934 16.5 11.9999 16.5ZM11.9999 14.5C12.6629 14.5 13.2988 14.2366 13.7677 13.7678C14.2365 13.2989 14.4999 12.663 14.4999 12C14.4999 11.337 14.2365 10.7011 13.7677 10.2322C13.2988 9.76339 12.6629 9.5 11.9999 9.5C11.3369 9.5 10.701 9.76339 10.2321 10.2322C9.7633 10.7011 9.49991 11.337 9.49991 12C9.49991 12.663 9.7633 13.2989 10.2321 13.7678C10.701 14.2366 11.3369 14.5 11.9999 14.5Z"
              ></path>
            </svg>
          </span>
          <span @click="showPassword = !showPassword" v-if="!showPassword">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgb(122,122,122)"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.34178 18.7819L7.41078 18.2639L8.19778 15.3249C7.01975 14.8904 5.9249 14.2572 4.96078 13.4529L2.80778 15.6069L1.39278 14.1919L3.54678 12.0389C2.33086 10.5826 1.51387 8.83563 1.17578 6.96886L3.14378 6.60986C3.90278 10.8119 7.57878 13.9999 11.9998 13.9999C16.4198 13.9999 20.0968 10.8119 20.8558 6.60986L22.8238 6.96786C22.4861 8.83488 21.6695 10.5822 20.4538 12.0389L22.6068 14.1919L21.1918 15.6069L19.0388 13.4529C18.0747 14.2572 16.9798 14.8904 15.8018 15.3249L16.5888 18.2649L14.6578 18.7819L13.8698 15.8419C12.6321 16.0539 11.3674 16.0539 10.1298 15.8419L9.34178 18.7819Z"
              ></path>
            </svg>
          </span>
        </label>

        <button type="button">Войти</button>

        <p class="help align-center">Восстановить пароль</p>

        <span class="link align-center" @click="emitChangeView"> регистрация </span>
        <p class="help align-center">Если у вас еще нет аккаунта</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['changeView', 'close'])

const showPassword = ref(false)

const emitClose = () => emit('close')

const emitChangeView = () => emit('changeView')
</script>

<style lang="scss" scoped>
@import '@/globals';
.login-component {
  background-color: $color-bg;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  width: 52rem;
  height: 100%;

  @include respond(tab-port) {
    width: 100%;
  }

  .top {
    padding: 1.6rem;
    padding-left: 3.2rem;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 2.4rem;
      font-weight: 900;
    }

    svg {
      fill: $color-gray-1;
      transition: all 0.1s linear;
      cursor: pointer;
      &:hover {
        fill: $color-main;
      }
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 4.8rem 8rem;

    .help {
      font-size: 1.4rem;
      color: $color-gray-2;
      margin-bottom: 1.6rem;
    }

    .links {
      display: flex;
      margin-bottom: 1.6rem;
      .vk {
        padding: 8px;
        background-color: rgb(47, 138, 242);
        border-radius: 100%;
        svg {
          fill: $color-text;
        }
      }
    }

    span.or {
      color: $color-gray-3;
      position: relative;
      display: flex;
      width: 100%;
      justify-content: center;
      margin-bottom: 1.6rem;
      &:before {
        content: '';
        position: absolute;
        width: 43%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 2px;
        background-color: #242424;
        box-sizing: border-box;
      }

      &:after {
        content: '';
        position: absolute;
        width: 43%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        height: 2px;
        background-color: #242424;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1.6rem;
      text-align: left;
      label {
        input {
          all: unset;
          padding: 1.6rem 1.2rem;
          background-color: $color-bg-2;
          width: 100%;
          box-sizing: border-box;
          border-radius: 0.8rem;

          &::placeholder {
            font-family: inherit;
            font-size: 1.4rem;
            color: $color-gray-2;
          }
        }
      }

      label.password {
        position: relative;

        input {
          padding-right: 4.4rem;
        }

        span {
          position: absolute;
          top: 50%;
          right: 1.2rem;
          transform: translateY(-50%);
          cursor: pointer;
          img {
          }
        }
      }

      button {
        all: unset;
        padding: 1.6rem 1.2rem;
        background-color: $color-main;
        border-radius: 0.8rem;
        text-align: center;
        font-weight: 600;
        transition: all 0.1s linear;
        cursor: pointer;
        &:hover {
          background-color: rgb(236, 73, 17);
        }
      }

      p {
        transition: all 0.1s linear;
        cursor: pointer;
        &:hover {
          color: $color-main;
        }
      }

      .link {
        text-transform: capitalize;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s linear;
        cursor: pointer;
        &:hover {
          color: $color-main;
        }
      }
    }
  }
}
</style>
