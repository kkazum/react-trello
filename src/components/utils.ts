export interface List {
  title: string
  cards: Array<Card>
}

interface Card {
  body: string
}

export interface State {
  state: Array<List>
  setState: React.Dispatch<React.SetStateAction<List[]>>
}

export const StorageKey: string = 'trello-lists'
