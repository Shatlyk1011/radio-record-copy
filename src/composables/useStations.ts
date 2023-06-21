import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { SORT_BY_RECOMMEND, SORT_BY_ALPHABET, SORT_BY_NEW } from '@/store/store'

import { stations } from '@/db'
import type { IStation } from '@/assets/types'

import { useStorageOrder } from '@/store/store'

const { order } = useStorageOrder()

const useStations = (stations: IStation[]) => {
  const route = useRoute()

  const orderBy = (a: IStation, b: IStation) => {
    if (order.value == SORT_BY_ALPHABET) {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
      else return 0
    } else if (order.value == SORT_BY_NEW || order.value == SORT_BY_RECOMMEND) {
      if (a.sort < b.sort) return -1
      if (a.sort > b.sort) return 1
      else return 0
    } else return a.sort - b.sort
  }

  const computedStations = computed(() => {
    if (route.params.theme) {
      const theme = route.params.theme.slice(14).toString().toLowerCase()
      const filterByTheme = stations.filter((station) => {
        const genres = station.genre
          .map((g) => g.name)
          .join()
          .toLowerCase()
        return genres.includes(theme)
      })
      return filterByTheme.sort(orderBy)
    } else if (route.params.style) {
      const style = route.params.style.slice(14).toString().toLowerCase()
      const filterByStyle = stations.filter((station) => {
        const styles = station.genre
          .map((g) => g.name)
          .join()
          .toLowerCase()
        return styles.includes(style)
      })
      return filterByStyle.sort(orderBy)
    } else return stations.sort(orderBy)
  })

  return { computedStations }
}

export default useStations
