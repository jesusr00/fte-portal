import { Photo } from '@/utils/getPhotoURL'
import useFetch from '../../../common/hooks/useFetch'

interface DirectionCouncilResponse {
  id: number
  description: string
  title: string
  members: DirectionCouncilMember[]
}

interface DirectionCouncilMember {
  id: number
  name: string
  description: null | string
  degree: null | string
  position: null | string
  photo: Photo
}
const useGetDirectionCouncil = () => {
  return useFetch<DirectionCouncilResponse>('/direction-council')
}
export default useGetDirectionCouncil
