<template>
  <div :class="['auth', showSidebar ? 'show' : '']">
    <OnClickOutside class="wrap" @trigger="emitCloseSidebar">
      <component
        class="component"
        @close="emitCloseSidebar"
        @changeView="switchComponent = !switchComponent"
        :is="switchComponent ? LoginComponent : RegisterComponent"
      >
      </component>
    </OnClickOutside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'

import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'

const emit = defineEmits(['closeSidebar'])
defineProps({
  showSidebar: {
    type: Boolean,
    required: true
  }
})

const emitCloseSidebar = () => emit('closeSidebar')

const switchComponent = ref(false)
</script>
<style lang="scss" scoped>
@import '@/globals';
.auth {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s linear;

  .wrap {
    transform: translateX(100%);
    transition: all 0.3s linear;

    @include respond(tab-port) {
      width: 100%;
    }
  }

  &.show {
    z-index: 9999;

    opacity: 1;
    background-color: rgba($color-bg, 0.6);
    .wrap,
    .component {
      transform: translateX(0%);
    }
  }
}
</style>
