import { useGetJobPost } from "@employee/entities/jobPost/model/useGetJobPost"
import { Button } from "@shared/shared/button"
import { useNavigation, useParams } from "react-router-dom"
import styled from "styled-components"

export const JobPost = () => {
  const { id } = useParams()

  const { jobPost } = useGetJobPost(Number(id))

  return (
    <JobPostLayout>
      <TitleContainer>
        <Title>{jobPost?.title}</Title>
        <Salary>Размер зарплаты: {jobPost?.salary}</Salary>
        <Button color="rgb(13, 194, 103)" type="filled">
          Откликнуться
        </Button>
      </TitleContainer>

      <SectionTitle>Описание</SectionTitle>
      <Description>{jobPost?.description}</Description>

      <SectionTitle>Требования</SectionTitle>
      <RequirementsContainer>
        {jobPost?.requirements.map((requirement, index) => (
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
