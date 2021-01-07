import * as React from 'react'
import styled from 'styled-components'


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


const Board = () => {
  return (
    <Wrapper>
      <Header>
        React Trello
      </Header>
      <Main>
        <p className="info-line">All: 0 tasks</p>
      </Main>
    </Wrapper>
  )
}

export default Board
