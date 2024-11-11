import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"
import CrossIcon from "@icons/cross.svg?react"

interface Props {
  initRequirements: string[]
  onChange: (requirements: string[]) => void
}

export const RequirementsPicker = ({ initRequirements, onChange }: Props) => {
  const [requirements, setRequirements] = useState<string[]>(initRequirements)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setRequirements(initRequirements)
  }, [initRequirements])

  const onSubmit = () => {
    if (!inputRef || !inputRef.current) return
    const newRequirement = inputRef.current.value

    if (newRequirement.length > 0 && !requirements.includes(newRequirement)) {
      const newRequirements = [...requirements, newRequirement]
      setRequirements(newRequirements)
      onChange(newRequirements)

      inputRef.current.value = ""
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && document.activeElement === inputRef.current) {
      e.preventDefault()
      e.stopPropagation()
      onSubmit()
    }
  }

  const handleRequirementClick =
    (removeRequirement: string) => (e: React.MouseEvent<HTMLLIElement>) => {
      if (!inputRef.current) return
      const newRequirements = requirements.filter(
        (requirement) => requirement !== removeRequirement
      )
      setRequirements(newRequirements)
      onChange(newRequirements)
      inputRef.current.value = ""
    }

  return (
    <PickerContainer>
      <RequirementInput
        placeholder="Введите требования"
        type="text"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <RequirementsContainer>
        {requirements.map((requirement) => (
          <Requirement
            onClick={handleRequirementClick(requirement)}
            key={requirement}
          >
            {requirement}
            <CrossIcon color="black" width="10" height="10" />
          </Requirement>
        ))}
      </RequirementsContainer>
    </PickerContainer>
  )
}
const Requirement = styled.li`
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  line-height: 17px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(100%);
    width: 7px;
    height: 7px;
    background-color: black;
    border-radius: 50%;
  }
`
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
