import { useEffect, useState } from 'react';
import axios from 'axios'

const useApi = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      if (!didCancel) {
        setLoading(true)
        const response = await axios.get(url)

        //simulate long api call
        setTimeout(() => {
          setData(response.data.results)
          setLoading(false)
        }, 5000)
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