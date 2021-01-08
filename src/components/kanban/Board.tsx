import * as React from 'react'
import styled from 'styled-components'
import ListAdd from './ListAdd'

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
  return (
    <Wrapper>
      <Header>
        React Trello
      </Header>
      <Main>
        <ListIndex className="info-line">All: 0 tasks</ListIndex>
        <ListAdd />
      </Main>
    </Wrapper>
  )
}

export default Board
