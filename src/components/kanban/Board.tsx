import React, { useState } from 'react'
import styled from 'styled-components'
import ListAdd from './ListAdd'
import { List, StorageKey } from '../utils'
import AppContext from '../contexts/AppContext'

const Wrapper = styled.main `
  background-image: url("./star.jpg");
  background-size:  cover;
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

const ListIndex = styled.p `
  display: flex;
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
        <ListIndex className="info-line">All: 0 tasks</ListIndex>
        <ListAdd/>
      </Main>
    </Wrapper>
  </AppContext.Provider>
  )
}

export default Board
