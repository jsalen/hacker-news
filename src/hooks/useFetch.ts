import { useState, useEffect } from 'react'
import axios from 'axios'
import { News } from '../interfaces/News.interface'

const URL_BY_DATE =
  'https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=15'

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
          setData(res.data.hits)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
    } else {
      axios
        .get(
          `https://hn.algolia.com/api/v1/search_by_date?query=${param}&page=0&hitsPerPage=15`
        )
        .then((res) => {
          const filteredData = res.data.hits.filter(
            (
              author: string,
              story_title: string,
              story_url: string,
              created_at: string
            ) =>
              author !== null &&
              story_title !== null &&
              story_url !== null &&
              created_at !== null
          )
          setData(filteredData)
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
