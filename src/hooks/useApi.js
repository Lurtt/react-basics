import { useEffect, useState } from 'react';
import { pokemonAxios } from '../axios'

const useApi = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      if (!didCancel) {
        setLoading(true)
        const response = await pokemonAxios.get(url)

        //simulate long api call
        setTimeout(() => {
          setData(response.data.results)
          setLoading(false)
        }, 3000)
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [url])

  return [ data, loading ]
}

export default useApi