import { EmployerReview } from "@shared/entities/employerReview/types"
import styled from "styled-components"

interface Props extends EmployerReview {
  bottom?: React.ReactNode
}

export const ReviewCard = ({ comment, bottom }: Props) => {
  return (
    <CardLayout>
      <CoverLetter>{comment}</CoverLetter>
      {bottom}
    </CardLayout>
  )
}

const CardLayout = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #dce3eb;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`
const CoverLetter = styled.p`
  font-size: 15px;
  color: rgb(102, 102, 102);
  line-height: 1.5;
`
