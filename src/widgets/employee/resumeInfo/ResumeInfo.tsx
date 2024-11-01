import { useGetMyResume } from "@entities/resume/model/useGetMyResume"
import styled from "styled-components"

export const ResumeInfo = () => {
  const { resume } = useGetMyResume()

  const { title, experience, education, skills, employeeId } = resume

  return (
    <ResumeLayout>
      <Title>{title}</Title>
      <Experience>{experience}</Experience>
      <Education>{education}</Education>
      <SkillsContainer>
        {skills.map((skill) => (
          <Skills key={skill}>{skill}</Skills>
        ))}
      </SkillsContainer>
    </ResumeLayout>
  )
}
const ResumeLayout = styled.div``

const Title = styled.div``
const Experience = styled.div``
const Education = styled.div``
const Skills = styled.li``
const SkillsContainer = styled.ul``
