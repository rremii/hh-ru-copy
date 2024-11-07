import { useGetResume } from "@employer/entities/resume/model/useGetResume"
import { OpenApplyModal } from "@employer/features/openApplyModal/OpenApplyModal"
import { openMenu } from "@shared/entities/ui/model/UiSlice"
import { Button } from "@shared/shared/button"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const Resume = () => {
  const { id } = useParams()
  const { resume } = useGetResume(Number(id))

  return (
    <ResumeLayout>
      {resume ? (
        <>
          <TitleContainer>
            <Title>{resume.title}</Title>
            <Experience>{resume.experience}</Experience>
            <BtnContainer>
              <OpenApplyModal />
            </BtnContainer>
          </TitleContainer>

          <SectionTitle>Образование</SectionTitle>
          <Education>{resume.education}</Education>

          <SectionTitle>Навыки</SectionTitle>
          <SkillsContainer>
            {resume.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillsContainer>
        </>
      ) : (
        <div>LOADING</div>
      )}
    </ResumeLayout>
  )
}
const ResumeLayout = styled.div`
  max-width: 600px;
  width: 100%;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-weight: bold;
  color: black;
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  margin-bottom: 20px;
`
const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

const Education = styled.p`
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.5;
  margin-bottom: 30px;
`
const Experience = styled.p`
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.5;
`
const SkillsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
`
const Skill = styled.li`
  list-style-type: disc;
  font-size: 15px;
  color: black;
  line-height: 1.5;
`
