import useSWR, { SWRConfiguration } from "swr"
import { fetcher } from "../../config/axios"

const useFetch =(url: string, options?: SWRConfiguration) => useSWR(url, fetcher, options)
export default useFetch