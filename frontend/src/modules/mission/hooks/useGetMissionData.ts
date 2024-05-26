import useFetch from '../../../common/hooks/useFetch'

interface FacultyResponse {
  id: number
  mission: string
  vision: string
  objective: string
}

const useGetMissionData = () => {
  return useFetch<FacultyResponse>('/faculty')
}
export default useGetMissionData
