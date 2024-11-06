import { Resume as IResume } from "@shared/entities/resume/types"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

interface Props extends IResume {}

export const ResumeCard = ({
  education,
  employeeId,
  experience,
  id,
  skills,
  title,
}: Props) => {
  const navigate = useNavigate()

  const goToResume = (id: number) => {
    navigate(`/employer/resumes/${id}`)
  }

  return (
    <ResumeLayout onClick={() => goToResume(id)}>
      <Title>{title}</Title>
      <Experience>{experience}</Experience>
    </ResumeLayout>
  )
}
const ResumeLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s;
  border: 1px solid #dce3eb;
  max-width: 600px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  }
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
`

const Experience = styled.p`
  font-size: 15px;
  color: black;
  line-height: 1.5;
`
