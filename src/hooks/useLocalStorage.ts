/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

export function useLocalStorage(key: string, initialValue: Array<any>) {
  const [sync, setSync] = useState(true)
  const [storedValue, setStoredValue] = useState([])

  const setValue = (value: Array<any>) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
    setSync(true)
  }

  const fetchStoredValue = () => {
    const item = window.localStorage.getItem(key)
    setSync(true)
    return item ? JSON.parse(item) : initialValue
  }

  const synchronize = () => {
    setSync(false)
  }

  useEffect(() => {
    const value = fetchStoredValue()
    setStoredValue(value)
  }, [sync])

  return { storedValue, setValue, synchronize }
}
