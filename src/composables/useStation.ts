import { ref } from 'vue'
import type { IStation, IPlaylist } from '@/assets/types'

import { stations } from '@/db'

const channel = ref<IStation>()
const playlist = ref<IPlaylist>()
const stationPlaying = ref(false)

const getPlaylist = async (id: number) => {
  const response = await fetch('https://www.radiorecord.ru/api/stations/now/')

  const data = await response.json()
  const { result } = data
  result.filter((res: IPlaylist) => {
    if (res.id == id) playlist.value = res
  })
}

const handleStation = async (station?: IStation) => {
  if (station) {
    channel.value = station
    await getPlaylist(channel.value.id)
  } else {
    channel.value = stations[0]
    await getPlaylist(stations[0].id)
  }
}
const useStation = () => {
  return { channel, playlist, handleStation, getPlaylist, stationPlaying }
}

export default useStation
