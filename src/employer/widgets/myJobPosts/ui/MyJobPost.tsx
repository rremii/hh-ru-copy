import { OpenJobPostModal } from "@employer/features/openJobPostModal/OpenJobPostModal"
import { JobPost } from "@shared/entities/jobPost/types"
import { Button } from "@shared/shared/button"
import styled from "styled-components"

interface Props extends JobPost {}

export const MyJobPost = ({
  description,
  employerId,
  id,
  requirements,
  salary,
  title,
}: Props) => {
  return (
    <JobPostLayout>
      <TitleContainer>
        <Title>{title}</Title>
        <Salary>Размер зарплаты: {salary}</Salary>
      </TitleContainer>

      <SectionTitle>Описание</SectionTitle>
      <Description>{description}</Description>

      <SectionTitle>Требования</SectionTitle>
      <RequirementsContainer>
        {requirements.map((requirement, index) => (
          <Requirement key={requirement}>{requirement}</Requirement>
        ))}
      </RequirementsContainer>
      <BtnSection>
        <OpenJobPostModal jobPostId={id}>Изменить</OpenJobPostModal>
      </BtnSection>
    </JobPostLayout>
  )
}
const JobPostLayout = styled.div`
  width: 100%;
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

const Description = styled.p`
  font-size: 16px;
  color: rgb(0, 0, 0);
  line-height: 1.5;
  margin-bottom: 30px;
`
const RequirementsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
`
const Requirement = styled.li`
  list-style-type: disc;
  font-size: 15px;
  color: black;
  line-height: 1.5;
`

const Salary = styled.p`
  font-size: 18px;
  color: black;
  line-height: 1.5;
`
const BtnSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
