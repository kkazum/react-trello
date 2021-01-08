import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../contexts/AppContext'
import { StorageKey } from '../utils'

const CardContainer = styled.div `
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  padding: 30px 15px 40px;
  background-color: #fff;
  border-radius: 8px;
  width: 260px;
  cursor: pointer;
`
const CloseButton = styled.button `
  position: absolute;
  top: 6px;
  right: 15px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 8px;
  border-color: red;
  border-style: solid;
  background-color: red;
  color: white;
  margin: 5px;
`

const Body = styled.div `
  font-size: 18px;
  width: 100%;
  word-wrap: break-word;
`

interface Props {
  key: number
  body: string
  cardIndex: number
  listIndex: number
}

const Card = (props: Props) => {
  const { state, setState } = useContext(AppContext)
  const { body, cardIndex, listIndex } = props

  return (
    <CardContainer>
      <CloseButton onClick={() => setState(() => {
        const preValue = [...state]
        preValue[listIndex].cards.splice(cardIndex, 1)
        localStorage.setItem(StorageKey, JSON.stringify(preValue))
        return [...preValue]
        })
      }>×</CloseButton>
      <Body>{body}</Body>
    </CardContainer>
  )
}

export default Card
