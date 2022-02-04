import { useState, useEffect } from 'react'
import axios from 'axios'
import { News } from '../interfaces/News.interface'
import { filterData } from '../utils'

const URL_BY_DATE = 'https://hn.algolia.com/api/v1/search_by_date'

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
          const filteredResults = filterData(res.data.hits)
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
          `https://hn.algolia.com/api/v1/search_by_date?query=${param}&page=0`
        )
        .then((res) => {
          const filteredResults = filterData(res.data.hits)
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
