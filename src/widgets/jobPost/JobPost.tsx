import { useGetJobPost } from "@entities/jobPost/model/useGetJobPost"
import { IJobPost } from "@entities/jobPost/types"
import { Button } from "@shared/button"
import { useNavigation, useParams } from "react-router-dom"
import styled from "styled-components"

export const JobPost = () => {
  const { id } = useParams()

  const { jobPost } = useGetJobPost(Number(id))

  const { description, employerId, requirements, salary, title } =
    jobPost as IJobPost

  return (
    <JobPostLayout>
      <TitleContainer>
        <Title>{title}</Title>
        <Salary>Размер зарплаты: {salary}</Salary>
        <Button color="rgb(13, 194, 103)" type="filled">
          Откликнуться
        </Button>
      </TitleContainer>

      <SectionTitle>Описание</SectionTitle>
      <Description>{description}</Description>

      <SectionTitle>Требования</SectionTitle>
      <RequirementsContainer>
        {requirements.map((requirement, index) => (
          <Requirement key={index}>{requirement}</Requirement>
        ))}
      </RequirementsContainer>
    </JobPostLayout>
  )
}
const JobPostLayout = styled.div`
  max-width: 600px;
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
