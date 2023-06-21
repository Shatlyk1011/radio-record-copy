import { createGlobalState, useStorage } from '@vueuse/core'

export const useCompactView = createGlobalState(() => useStorage('compact', 'false'))
