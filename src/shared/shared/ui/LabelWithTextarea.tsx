import { on } from "events"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import EditIcon from "@icons/edit.svg?react"

interface Props {
  onSubmit: (value: string) => void
  label: string
  validate: (value: string) => boolean
}

export const LabelWithTextarea = ({ label, onSubmit, validate }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [curLabel, setCurLabel] = useState(label)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    setCurLabel(label)
  }, [label])

  const handleSubmit = () => {
    const newValue = textareaRef.current?.value || ""

    if (!validate(curLabel)) return

    setIsEditing(false)
    onSubmit(newValue)
    setCurLabel(newValue)
  }
  const onChange = () => {
    const newLabel = textareaRef.current?.value || ""
    setCurLabel(newLabel)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }
  const startEditing = () => setIsEditing(true)

  return (
    <Container onClick={startEditing}>
      {isEditing ? (
        <TextareaLayout
          onChange={onChange}
          ref={textareaRef}
          value={curLabel}
          onKeyDown={onKeyDown}
          onBlur={handleSubmit}
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

const TextareaLayout = styled.textarea`
  width: max-content;

  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  font-size: 17px;
  transition: border 0.3s;
  &:focus-within {
    border: 1px solid #2e6ebb;
  }
`
const LabelContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const Text = styled.p`
  font-size: 18px;
  color: black;
  line-height: 30px;
`
const IconContainer = styled.div`
  position: absolute;
  left: calc(100% + 5px);
  bottom: 20%;
`
