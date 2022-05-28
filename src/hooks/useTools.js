import { useQuery } from "react-query"

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('alltools', () => fetch('https://blooming-ridge-15551.herokuapp.com/product').then(res => res.json()))


    return [tools, isLoading, refetch]
}
export default useTools