<template>
  <div :class="['auth', showSidebar ? 'bg' : '']">
    <OnClickOutside @trigger="emitCloseSidebar">
      <component
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
  z-index: 1500;
  display: flex;
  justify-content: flex-end;

  // background: rgba($color-bg-2, 0.7);

  &.bg {
  }
}
</style>
