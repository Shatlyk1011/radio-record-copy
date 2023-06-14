import { ref, type Ref } from 'vue'
import type { IStation } from '@/assets/types'

const channel = ref<IStation>()

const isPending = ref(false)
const handleStation = (station: IStation) => {
  channel.value = station
  isPending.value = true
}

const useStation = () => {
  return { channel, handleStation, isPending }
}

export default useStation
