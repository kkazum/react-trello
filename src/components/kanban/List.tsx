import React from 'react'
import styled from 'styled-components'

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
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{ props.title }</ListTitle>
        <DeleteList>×</DeleteList>
      </ListHeader>
    </ListContainer>
  )
}

export default List
