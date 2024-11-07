import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { useGetEmployerReviews } from "@shared/entities/employerReview/model/useGetEmployerReviews"
import { ReviewCard } from "@shared/shared/ui/ReviewCard"
import styled from "styled-components"

export const MyReviews = () => {
  const { me } = useGetMe()
  const { reviews } = useGetEmployerReviews(me?.id)

  return (
    <ReviewsContainer>
      <ReviewsLayout>
        <Label>Мои отзывы:</Label>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </ReviewsLayout>
    </ReviewsContainer>
  )
}

const ReviewsLayout = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`
const Label = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  font-weight: bold;
  color: black;
`
const ReviewsContainer = styled.div`
  padding-left: 20px;
`
