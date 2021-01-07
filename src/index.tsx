import * as React from 'react'
import { render } from 'react-dom'
import Board from './components/kanban/Board'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    font-family: 'Avenir', Helvetica, Arial, 'system-ui', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  }

  body{
    margin: 0;
  }
`

const Main = (
  <>
    <GlobalStyle />
    <Board />
  </>
)

render(Main, document.getElementById('app'))
