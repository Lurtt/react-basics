import { useEffect, useState } from 'react';
import { pokemonAxios } from '../axios'

const useApi = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const response = await pokemonAxios.get(url)

        if (!didCancel) {
          setLoading(true)
          //simulate long api call
          setTimeout(() => {
            setData(response.data.results)
            setLoading(false)
          }, 2000)
        }
      } catch (error) {
        if(!didCancel) {
          setLoading(false)
        }
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