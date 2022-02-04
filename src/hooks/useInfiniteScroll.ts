/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const HITS_INCREMENT = 20
const MAX_HITS = 500

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(HITS_INCREMENT)

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return false

    setLoading(true)
    setTimeout(() => {
      setCount(count + HITS_INCREMENT)
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!loading) return

    if (count + HITS_INCREMENT >= MAX_HITS) {
      setCount(MAX_HITS)
    } else {
      setTimeout(() => {
        setCount(count + HITS_INCREMENT)
        setLoading(false)
      }, 500)
    }
  }, [loading])

  return { count }
}
