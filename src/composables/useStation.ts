import { ref } from 'vue'
import type { IStation, IPlaylist } from '@/assets/types'
import { defaultChannel } from '@/store/store'
//radiorecord

const channel = ref<IStation>()
const playlist = ref<IPlaylist>()
const isPlaying = ref(false)
const isWaiting = ref(false)
const autoplay = ref(false)

const getPlaylist = async (id: number) => {
  const response = await fetch('https://radio-record-copy-api.vercel.app/now')

  const data = await response.json()
  const { result } = data
  result.filter((res: IPlaylist) => {
    if (res.id == id) playlist.value = res
  })
}

const handleStation = async (station?: IStation) => {
  if (station) {
    channel.value = station
    getPlaylist(channel.value.id)
    autoplay.value = true
  } else {
    channel.value = defaultChannel
    getPlaylist(defaultChannel.id)
  }
}
const useStation = () => {
  return { channel, playlist, handleStation, getPlaylist, isPlaying, isWaiting, autoplay }
}

export default useStation
