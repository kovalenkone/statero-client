import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchData = async (url: string) => {
  // nprogress.start()
  const response = await axios.get(url)
  // nprogress.done()
  return response.data
}

export const useFetchData = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => fetchData(url),
  })
}
