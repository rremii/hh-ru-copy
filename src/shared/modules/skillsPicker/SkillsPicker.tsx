import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"
import { Skill } from "./Skill"
import CrossIcon from "@icons/cross.svg?react"

interface Props {
  initSkills: string[]
  onChange: (skills: string[]) => void
}

export const SkillsPicker = ({ initSkills, onChange }: Props) => {
  const [skills, setSkills] = useState<string[]>(initSkills)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!inputRef || !inputRef.current) return
    const newSkill = inputRef.current.value

    if (newSkill.length > 0 && !skills.includes(newSkill)) {
      const newSkills = [...skills, newSkill]
      onChange(newSkills)
      setSkills(newSkills)

      inputRef.current.value = ""
    }
  }
  const onRemove = (removeSkill: string) => {
    if (!inputRef.current) return
    const newSkills = skills.filter((skill) => skill !== removeSkill)
    onChange(newSkills)
    setSkills(newSkills)
    inputRef.current.value = ""
  }

  return (
    <PickerContainer>
      <SkillInput
        placeholder="Enter your skills"
        type="text"
        ref={inputRef}
        onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
      />
      <SkillsContainer>
        {skills.map((skill) => (
          <Skill onClick={() => onRemove(skill)} key={skill}>
            {skill}
            <CrossIcon color="black" width="10" height="10" />
          </Skill>
        ))}
      </SkillsContainer>
    </PickerContainer>
  )
}

const PickerContainer = styled.div``

const SkillInput = styled.input`
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
const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
`
