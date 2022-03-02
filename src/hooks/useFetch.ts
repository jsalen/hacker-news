/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { filterData } from '../utils'
import { useAppSelector } from './hooksTypes'

const BASE_URL = 'https://hn.algolia.com/api/v1/search_by_date?hitsPerPage=20'

function useFetch(param: string, page: number) {
  const [data, setData] = useState<News[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
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
        .get(`${BASE_URL}&page=${page - 1}`)
        .then((res) => {
          const filteredResults = filterData(res.data.hits).map((item) =>
            isLiked(item)
          )
          setData(filteredResults)
          setTotalPages(res.data.nbPages)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
    } else {
      axios
        .get(`${BASE_URL}&query=${param}&page=${page - 1}`)
        .then((res) => {
          const filteredResults = filterData(res.data.hits).map((item) =>
            isLiked(item)
          )
          setData(filteredResults)
          setTotalPages(res.data.nbPages)
          setLoading(false)
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
    }
  }, [param, page])

  return { data, totalPages, loading, error }
}

export default useFetch
