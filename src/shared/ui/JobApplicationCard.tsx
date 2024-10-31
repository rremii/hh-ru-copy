import { IJobApplication } from "@entities/jobApplication/types"
import { Button } from "@shared/button"
import { Fragment } from "react/jsx-runtime"
import styled from "styled-components"

interface Props extends IJobApplication {
  btns?: React.ReactNode[]
}

export const JobApplicationCard = ({ coverLetter, btns }: Props) => {
  return (
    <CardLayout>
      <CoverLetter>{coverLetter}</CoverLetter>
      <ButtonsContainer>
        {btns?.map((btn, index) => (
          <Fragment key={index}>{btn}</Fragment>
        ))}
      </ButtonsContainer>
    </CardLayout>
  )
}

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s;
  border: 1px solid #dce3eb;
  max-width: 600px;
`
const CoverLetter = styled.p`
  font-size: 15px;
  color: rgb(102, 102, 102);
  line-height: 1.5;
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
