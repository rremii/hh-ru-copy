import { useEffect, useRef, useState } from "react"

import EditIcon from "@icons/edit.svg?react"
import styled from "styled-components"

interface Props {
  onChange: (value: string) => void
  label: string
  validate: (value: string) => boolean
}

export const LabelWithEdit = ({ onChange, label, validate }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [curLabel, setCurLabel] = useState(label)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setCurLabel(label)
  }, [label])

  const onSubmit = () => {
    if (!validate(curLabel)) return

    setIsEditing(false)
    onChange(curLabel)
  }

  const onTextChange = () => {
    if (!inputRef.current) return
    const newLabel = inputRef.current.value
    setCurLabel(newLabel)
  }

  return (
    <Container onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <Input
          ref={inputRef}
          onBlur={onSubmit}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSubmit()
            }
          }}
          onChange={onTextChange}
          value={curLabel}
          autoFocus={true}
        />
      ) : (
        <LabelContainer>
          <Text>{curLabel}</Text>
          <IconContainer>
            <EditIcon color={"#000"} width={20} height={20} />
          </IconContainer>
        </LabelContainer>
      )}
    </Container>
  )
}

const Container = styled.button`
  position: relative;
  cursor: pointer;
`
const Input = styled.input`
  padding: 0 12px;
  border-radius: 7px;
  border: 1px solid #e0e0e0;
  height: 30px;
  font-size: 17px;
  color: black;
`

const LabelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: max-content; */
`
const Text = styled.p`
  font-size: 18px;
  color: black;
  line-height: 30px;
  max-width: 100%;
`
const IconContainer = styled.div`
  position: absolute;
  left: calc(100% + 5px);
  bottom: 20%;
`
