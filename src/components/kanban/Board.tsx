import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListAdd from './ListAdd'
import { List, StorageKey, DropResult } from '../utils'
import AppContext from '../contexts/AppContext'
import BoardList from './List'
import { Container, Draggable } from 'react-smooth-dnd';

const Wrapper = styled.main `
  background-image: url("./star.jpg"), url("./star.jpg"); //チラつき防止
  background-size:  cover;
  overflow-x: scroll;
`

const Header = styled.header`
  height: 70px;
  color: white;
  font-style: italic;
  font-size: 40px;
  text-align: left;
  padding: 20px;
`
const Main = styled.main `
  color: white;
  padding: 0 10px;
  width: calc(100% - 40px);
  height: 100%;
`

const ListIndex = styled.div `
  display: flex;
`

const InfoLine = styled.p `
  margin: 20px;
  font-size: 20px;
`

const Board: React.FC = () => {
  const [state, setState] = useState<Array<List>>(JSON.parse(localStorage.getItem(StorageKey)!) || [])
  useEffect(() => {
    localStorage.setItem(StorageKey, JSON.stringify(state))
  }, [state])

  const applyDrag = (listArr: Array<List>, dropResult: DropResult) => {
    const { removedIndex, addedIndex } = dropResult;
    let itemToAdd = listArr.splice(removedIndex!, 1)[0]; //その場で置くとremovedIndexは1になる(nullはない)
    listArr.splice(addedIndex!, 0, itemToAdd); //その場で置くとaddedIndexは1になる(nullはない)
    return listArr;
  };

  const onColumnDrop = (prevState: Array<List>, dropResult: DropResult) => {
    const state = applyDrag(prevState, dropResult);
    setState([...state]);
  }

  return (
  <AppContext.Provider value={{ state, setState }}>
    <Wrapper>
      <Header>
        React Trello
      </Header>
      <Main>
        <InfoLine>
          All: {state.length} tasks
        </InfoLine>
        <ListIndex className="info-line">
          <Container orientation="horizontal" onDrop={(dropResult) => {
              onColumnDrop(state, dropResult)
          }}>
            {
              state.map((ele: List, index) => {
                return (
                  <Draggable>
                    <BoardList
                      title={ele.title}
                      key={index}
                      listIndex={index} />
                  </Draggable>
                )
              })
            }
            <ListAdd />
          </Container>
        </ListIndex>
      </Main>
    </Wrapper>
  </AppContext.Provider>
  )
}

export default Board
