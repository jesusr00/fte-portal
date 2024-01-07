import useFetch from "../../../common/hooks/useFetch"

const useGetDirectionCouncil = () => {
    return useFetch('/direction-council')
}
export default useGetDirectionCouncil