export interface List {
  title: string
  cards: Array<Card>
}

export interface Card {
  body: string
}

export interface State {
  state: Array<List>
  setState: React.Dispatch<React.SetStateAction<List[]>>
}

export interface DropResult {
  removedIndex: number | null
  addedIndex: number | null
  payload?: Card
}
export const StorageKey: string = 'trello-lists'
