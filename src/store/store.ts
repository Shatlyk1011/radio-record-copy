import { ref } from 'vue'
import { createGlobalState, useStorage } from '@vueuse/core'

export const SORT_BY_RECOMMEND = 'SORT_BY_RECOMMEND'
export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET'
export const SORT_BY_NEW = 'SORT_BY_NEW'

export const useStorageCompact = createGlobalState(() => useStorage('compact', 'false'))

export const useStorageOrder = createGlobalState(() => {
  const order = ref(SORT_BY_RECOMMEND)

  const orderByRecommend = () => (order.value = SORT_BY_RECOMMEND)

  const orderByAlphabet = () => (order.value = SORT_BY_ALPHABET)

  /* сортировка по новизне: непонятно. даты отсутствуют. */
  const orderByNew = () => (order.value = SORT_BY_NEW)

  return { order, orderByRecommend, orderByAlphabet, orderByNew }
})
