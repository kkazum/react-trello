import { useState } from 'react'

interface List {
  title: string
  cards: Array<Card>
}

interface Card {
  body: string
}

export const useStateWithStorage = (init: List, key: string): [List, (o: List) => void] => {
  const [value, setValue] = useState<List>(JSON.parse(localStorage.getItem(key)!) as List || init)

  const setValueWithStorage = (nextValue: List): void => {
    setValue(nextValue)
    localStorage.setItem(key, JSON.stringify(nextValue))
  }

  return [value, setValueWithStorage]
}

export default useStateWithStorage
