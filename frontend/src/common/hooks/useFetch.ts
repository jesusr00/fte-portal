import useSWR, { SWRConfiguration } from 'swr'
import { fetcher } from '../../config/axios'

const useFetch = <T>(url: string, options?: SWRConfiguration) =>
  useSWR<T>(url, fetcher, options)
export default useFetch
