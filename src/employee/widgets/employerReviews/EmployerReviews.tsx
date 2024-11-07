import { CreateReviewForm } from "@employee/entities/employerReview/ui/CreateReviewForm"
import { useGetEmployerReviews } from "@shared/entities/employerReview/model/useGetEmployerReviews"
import { ReviewCard } from "@shared/shared/ui/ReviewCard"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const EmployerReviews = () => {
  const { id } = useParams()

  const { reviews, isFetching } = useGetEmployerReviews(Number(id))

  return (
    <ReviewsContainer>
      <ReviewsLayout>
        <Label>Напиши свой отзыв:</Label>
        <CreateReviewForm employerId={Number(id)} />
        <Label>Отзывы:</Label>
        {isFetching && <div>LOADING</div>}
        {reviews?.map((review, index) => (
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
  @media screen and (max-width: 600px) {
    padding-left: 0;
  }
`
