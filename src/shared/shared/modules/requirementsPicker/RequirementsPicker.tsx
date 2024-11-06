import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"
import { Requirement } from "./Requirement"
import CrossIcon from "@icons/cross.svg?react"

interface Props {
  initRequirements: string[]
  onChange: (requirements: string[]) => void
}

export const RequirementsPicker = ({ initRequirements, onChange }: Props) => {
  const [requirements, setRequirements] = useState<string[]>(initRequirements)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!inputRef || !inputRef.current) return
    const newRequirement = inputRef.current.value

    if (newRequirement.length > 0 && !requirements.includes(newRequirement)) {
      const newRequirements = [...requirements, newRequirement]
      onChange(newRequirements)
      setRequirements(newRequirements)

      inputRef.current.value = ""
    }
  }
  const onRemove = (removeRequirement: string) => {
    if (!inputRef.current) return
    const newRequirements = requirements.filter(
      (requirement) => requirement !== removeRequirement
    )
    onChange(newRequirements)
    setRequirements(newRequirements)
    inputRef.current.value = ""
  }

  return (
    <PickerContainer>
      <RequirementInput
        placeholder="Enter your requirements"
        type="text"
        ref={inputRef}
        onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
      />
      <RequirementsContainer>
        {requirements.map((requirement) => (
          <Requirement onClick={() => onRemove(requirement)} key={requirement}>
            {requirement}
            <CrossIcon color="black" width="10" height="10" />
          </Requirement>
        ))}
      </RequirementsContainer>
    </PickerContainer>
  )
}

const PickerContainer = styled.div``

const RequirementInput = styled.input`
  display: block;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 10px 20px;
  width: 100%;
  font-size: 17px;
  line-height: 17px;
  margin-bottom: 10px;
  transition: border 0.3s;
  &:focus-within {
    border: 1px solid #2e6ebb;
  }
`
const RequirementsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  max-height: 150px;
  overflow-y: auto;
`
