import { useState, useEffect } from 'react'
import axios from 'axios'
import { filterData } from '../utils'
import { useAppSelector } from './hooksTypes'

const URL_BY_DATE =
  'https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=500'

function useFetch(param: string) {
  const [data, setData] = useState<News[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const { likedPosts } = useAppSelector((state) => state.likedPosts)

  const isLiked = (post: News) => {
    if (likedPosts.find((liked) => liked.objectID === post.objectID)) {
      return {
        ...post,
        liked: true,
      }
    } else {
      return {
        ...post,
        liked: false,
      }
    }
  }

  useEffect(() => {
    setLoading(true)

    if (param === '') {
      axios
        .get(URL_BY_DATE)
        .then((res) => {
          const filteredResults = filterData(res.data.hits).map((item) =>
            isLiked(item)
          )
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
          const filteredResults = filterData(res.data.hits).map((item) =>
            isLiked(item)
          )
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
