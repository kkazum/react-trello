import React, { useState } from 'react'
import styled from 'styled-components'
import ListAdd from './ListAdd'
import { List, StorageKey } from '../utils'
import AppContext from '../contexts/AppContext'
import BoardList from './List'

const Wrapper = styled.main `
  background-image: url("./star.jpg");
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
          {
            state.map((ele: List, index) => {
              return (
                <BoardList
                  title={ele.title}
                  key={index}
                  listIndex={index} />
              )
            })
          }
          <ListAdd />
        </ListIndex>
      </Main>
    </Wrapper>
  </AppContext.Provider>
  )
}

export default Board
