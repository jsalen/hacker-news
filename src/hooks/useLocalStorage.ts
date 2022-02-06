/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'

export function useLocalStorage(key: string, initialValue: Array<any>) {
  const [storedValue, setStoredValue] = useState<News[]>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: News[]) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return { storedValue, setValue }
}
