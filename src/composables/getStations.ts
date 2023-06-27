import { ref } from 'vue'
import type { IGenre, IStation, ITag } from '@/assets/types'

const stations = ref<IStation[]>()
const tags = ref<ITag[]>()
const genres = ref<IGenre[]>()

const getApi = async () => {
  try {
    const res = await fetch('https://radio-record-copy-api.vercel.app')
    const data = await res.json()
    const { result } = data
    stations.value = result.stations
    tags.value = result.tags
    genres.value = result.genre
  } catch (err) {
    console.log('err', err)
  }
}
const getStations = () => {
  return { getApi, stations, tags, genres }
}

export default getStations
