import React, { useState }from 'react'
import styled from 'styled-components'
import useStateWithStorage from '../hooks/use_state_kanban_list'

const Form = styled.form`
  margin: 0 10px auto;
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  width: 320px;
`

const Input = styled.input<{ isEditing: Boolean }>`
  padding: 20px 15px;
  width: calc(100% - 30px);
  background-color: ${props => props.isEditing ? 'white': '#ccc'};
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-family: "Noto Sans Japanese", "Noto Sans", 'system-ui', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #242424;
  cursor: pointer;
  overflow: overlay;
  &:focus {
    outline: 0;
    cursor: initial;
  }
`

const Button = styled.button<{ isTitleExists: Boolean }>`
  margin-top: 15px;
  padding: 15px 18px;
  background-color:${(props) => (props.isTitleExists ? "#00d78f": "#999")};
  border: none;
  border-radius: 8px;
  font-family: "Noto Sans Japanese", "Noto Sans", 'system-ui', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const StorageKey: string = 'trello-lists'

const List: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [list, setList] = useStateWithStorage({
    title: "",
    cards: []
  }, StorageKey)
  // listが変化してるからコンポーネントが再描画される。カスタムフック側のvalueがlistに入った時点で繋がる。
  const [isEditing, setIsEditing] = useState<Boolean>(false)
  const [isTitleExists, setTitleExists] = useState<Boolean>(false)

  const editing = (): void => setIsEditing(!isEditing)
  const titleExists = (): void => setTitleExists(!isTitleExists)

  return (
    <>
    <Form onSubmit={(e) => {
      e.preventDefault()
      setList({
        title: title,
        cards: [
          {body:"aaa"},
          {body:"bbb"},
        ]
      })
    }}>
      <Input
        onFocus={() => editing()}
        onBlur={() => editing()}
        onChange={e => setTitle(e.target.value)}
        type="text"
        value={title}
        placeholder="Add new list"
        isEditing={isEditing}
      />
      <Button
        onMouseOver={() => titleExists()}
        onMouseOut={() => titleExists()}
        isTitleExists={isTitleExists} type="submit">
        Add
      </Button>
    </Form>
  </>
  )
}

export default List
