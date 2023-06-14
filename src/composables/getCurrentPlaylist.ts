import { ref } from 'vue'
import { IPlaylist } from '@/assets/types'

const respond = ref<IPlaylist>()
const getPlaylist = async (id: number) => {
  const response = await fetch('https://www.radiorecord.ru/api/stations/now/')

  const data = await response.json()
  const { result } = data
  result.filter((res) => {
    return (respond.value = result)
  })

  respond.value = result
}

const getCurrentPlaylist = () => {
  return { respond, getPlaylist }
}

export default getCurrentPlaylist
