import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"
import { Skill } from "./Skill"

interface Props {
  initSkills: string[]
  onChange: (skills: string[]) => void
}

export const SkillsPicker = ({ initSkills, onChange }: Props) => {
  const [skills, setSkills] = useState<string[]>(initSkills)
  const [isAdding, setIsAdding] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isAdding) inputRef.current?.focus()
  }, [isAdding])

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!inputRef || !inputRef.current) return
    const newSkill = inputRef.current.value

    if (newSkill.length > 0 && !skills.includes(newSkill)) {
      const newSkills = [...skills, newSkill]
      onChange(newSkills)
      setSkills(newSkills)
    }

    setIsAdding(false)
  }
  const onRemove = (removeSkill: string) => {
    onChange(skills.filter((skill) => skill !== removeSkill))
  }

  const startAdding = () => {
    setIsAdding(true)
  }
  return (
    <PickerContainer>
      {skills.map((skill) => (
        <Skill onClick={() => onRemove(skill)} key={skill}>
          {skill}
        </Skill>
      ))}

      {isAdding ? (
        <SkillInput
          type="text"
          ref={inputRef}
          onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
        />
      ) : (
        <AddNewSkill onClick={startAdding}>+</AddNewSkill>
      )}
    </PickerContainer>
  )
}
const PickerContainer = styled.div`
  display: flex;
  align-items: center;
`
const AddNewSkill = styled.button``

const SkillInput = styled.input``
