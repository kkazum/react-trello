import React, { useContext} from 'react'
import styled from 'styled-components'
import AppContext from '../contexts/AppContext'
import { Card, StorageKey } from '../utils'
import CardAdd from './CardAdd'
import BoardCard from './Card'

const ListContainer = styled.div `
  margin: 0 5px auto;
  position: relative;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  min-width: 290px;
  width: 290px;
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  border: solid #ddd 1px;
  color: gray;
  vertical-align: top;
`
const ListHeader = styled.div `
  width: 290px;
  display: inline-flex;
  justify-content: space-between;
`
const ListTitle = styled.p `
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
`

const DeleteList = styled.div `
  position: absolute;
  top: 6px;
  right: 14px;
  font-size: 28px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

interface Props {
  key: number
  title: string
  listIndex: number
}

const List: React.FC<Props> = (props) => {
  const {state , setState} = useContext(AppContext)
  const { title, listIndex } = props
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{ title }</ListTitle>
        <DeleteList onClick={() => setState(() => {
          const preValue = [...state]
          preValue.splice(listIndex, 1)
          localStorage.setItem(StorageKey, JSON.stringify(preValue))
          return [...preValue]
        })}>×</DeleteList>
      </ListHeader>
        {
          state[listIndex].cards.map((ele: Card, index) => {
            return (
              <BoardCard
                body={ele.body}
                key={index}
                cardIndex={index}
                listIndex={listIndex}
              />
            )
          })
        }
      <CardAdd listIndex={listIndex} />
    </ListContainer>
  )
}

export default List
