import { useGetMyResume } from "@employee/entities/resume/model/useGetMyResume"
import styled from "styled-components"

interface Props {
  bottom?: React.ReactNode
}

export const ResumeInfo = ({ bottom }: Props) => {
  const { resume } = useGetMyResume()

  const { title, experience, education, skills, employeeId } = resume

  return (
    <ResumeLayout>
      <Title>{title}</Title>

      <div>
        <SectionTitle>Опыт работы</SectionTitle>
        <Experience>{experience}</Experience>
      </div>

      <div>
        <SectionTitle>Образование</SectionTitle>
        <Education>{education}</Education>
      </div>

      <div>
        <SectionTitle>Навыки</SectionTitle>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillsContainer>
      </div>
      {bottom}
    </ResumeLayout>
  )
}
const ResumeLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 25px 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    padding: 15px 25px;
  }
`

const Experience = styled.div`
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.5;
  margin-bottom: 30px;
`
const Education = styled.div`
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.5;
  margin-bottom: 30px;
`
const Skill = styled.li`
  list-style-type: disc;
  font-size: 15px;
  color: black;
  line-height: 1.5;
`
const SkillsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
`

const Title = styled.h1`
  /* text-align: center; */
  font-size: 30px;
  font-weight: 500;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  grid-column: span 2;
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`
