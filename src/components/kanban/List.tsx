import React, { useContext} from 'react'
import styled from 'styled-components'
import AppContext from '../contexts/AppContext'
import { Card, DropResult, List } from '../utils'
import CardAdd from './CardAdd'
import BoardCard from './Card'
import { Container, Draggable } from 'react-smooth-dnd'

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

const ListCounter = styled.p `
  color: rgb(0, 140, 255);
  padding: 15px;
`

interface Props {
  key: number
  title: string
  listIndex: number
}

const List: React.FC<Props> = (props) => {
  const { state , setState} = useContext(AppContext)
  const { title, listIndex } = props
  const { cards } = state[listIndex]

  const applyDrag = (cardArr: Array<Card>, dropResult: DropResult) => {
    const { removedIndex, addedIndex, payload } = dropResult;
    let itemToAdd = payload!; //getChildPayloadのため必ず存在する
    //groupNameで跨ぐとnullがありうる
    itemToAdd = removedIndex !== null ? cardArr.splice(removedIndex, 1)[0] : itemToAdd;
    //groupNameで跨ぐとnullがありうる
    addedIndex !== null && cardArr.splice(addedIndex, 0, itemToAdd);
    return cardArr;
  };

  const onCardDrop = (prevState: Array<List>, columnId: number, dropResult: DropResult) => {
      const newColumn: List = {...prevState[columnId]};
      newColumn.cards = applyDrag(newColumn.cards, dropResult);
      prevState.splice(columnId, 1, newColumn);
      setState([...prevState]);
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{ title }</ListTitle>
        <ListCounter>total: { state[listIndex].cards.length}</ListCounter>
        <DeleteList onClick={() => setState(() => {
          const preValue = [...state]
          preValue.splice(listIndex, 1)
          return [...preValue]
        })}>×</DeleteList>
      </ListHeader>
        <Container groupName="cards" getChildPayload={index => cards[index] } onDrop={(dropResult) => {
            onCardDrop(state, listIndex, dropResult)
        }}>
          {
            state[listIndex].cards.map((ele: Card, index) => {
              return (
                  <Draggable>
                    <BoardCard
                      body={ele.body}
                      key={index}
                      cardIndex={index}
                      listIndex={listIndex}
                    />
                  </Draggable>
              )
            })
          }
        </Container>
      <CardAdd listIndex={listIndex} />
    </ListContainer>
  )
}

export default List
