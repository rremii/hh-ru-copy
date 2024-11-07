import { useGetJobPost } from "@employee/entities/jobPost/model/useGetJobPost"
import { GoToEmployer } from "@employee/features/goToEmployer/GoToEmployer"
import { OpenApplyModal } from "@employee/features/openApplyModal/OpenApplyModal"
import { useNavigation, useParams } from "react-router-dom"
import styled from "styled-components"

export const JobPost = () => {
  const { id } = useParams()
  const { jobPost } = useGetJobPost(Number(id))

  return (
    <JobPostLayout>
      {jobPost ? (
        <>
          <TitleContainer>
            <Title>{jobPost.title}</Title>
            <Salary>Размер зарплаты: {jobPost.salary}</Salary>
            <BtnSection>
              {!jobPost.isApplied && <OpenApplyModal />}
              <GoToEmployer id={jobPost.employerId} />
            </BtnSection>
          </TitleContainer>

          <SectionTitle>Описание</SectionTitle>
          <Description>{jobPost.description}</Description>

          <SectionTitle>Требования</SectionTitle>
          <RequirementsContainer>
            {jobPost.requirements.map((requirement, index) => (
              <Requirement key={requirement}>{requirement}</Requirement>
            ))}
          </RequirementsContainer>
        </>
      ) : (
        <div>LOADING</div>
      )}
    </JobPostLayout>
  )
}
const JobPostLayout = styled.div`
  max-width: 600px;
  width: 100%;
`
const BtnSection = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
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
