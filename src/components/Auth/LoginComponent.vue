<template>
  <div class="login-component">
    <div class="top">
      <p>Вход</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
            <img src="./../../assets/icons/eye-open.svg" alt="hide/show icon" />
          </span>
          <span @click="showPassword = !showPassword" v-if="!showPassword">
            <img src="./../../assets/icons/eye-close.svg" alt="hide/show icon" />
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

const emit = defineEmits(['changeView'])

const showPassword = ref(false)

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
