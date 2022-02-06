import { useState, useEffect } from 'react'
import axios from 'axios'
import { filterData } from '../utils'

const URL_BY_DATE =
  'https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=500'

function useFetch(param: string) {
  const [data, setData] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    if (param === '') {
      axios
        .get(URL_BY_DATE)
        .then((res) => {
          const filteredResults = filterData(res.data.hits).map((item) => ({
            ...item,
            liked: false,
          }))
          setData(filteredResults)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
    } else {
      axios
        .get(
          `https://hn.algolia.com/api/v1/search_by_date?query=${param}&hitsPerPage=500`
        )
        .then((res) => {
          const filteredResults = filterData(res.data.hits).map((item) => ({
            ...item,
            liked: false,
          }))
          setData(filteredResults)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
    }
  }, [param])

  return { data, loading, error }
}

export default useFetch
