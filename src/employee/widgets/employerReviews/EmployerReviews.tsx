import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { useGetEmployerReviews } from "@employee/entities/employerReview/model/useGetEmployerReviews"
import { CreateReviewForm } from "@employee/entities/employerReview/ui/CreateReviewForm"
import { DeleteReview } from "@employee/features/deleteReview/DeleteReview"
import { ReviewCard } from "@shared/shared/ui/ReviewCard"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const EmployerReviews = () => {
  const { id } = useParams()

  const { me } = useGetMe()
  const { reviews, isFetching } = useGetEmployerReviews(Number(id))

  return (
    <ReviewsContainer>
      <ReviewsLayout>
        <Label>Напиши свой отзыв:</Label>
        <CreateReviewForm employerId={Number(id)} />
        <Label>Отзывы:</Label>
        {isFetching && <div>LOADING</div>}
        {reviews?.map((review, index) => {
          if (review.employeeId === me?.id)
            return (
              <ReviewCard
                key={index}
                {...review}
                bottom={
                  <ButtonSection>
                    <DeleteReview reviewId={review.id} />
                  </ButtonSection>
                }
              />
            )
          return <ReviewCard key={index} {...review} />
        })}
      </ReviewsLayout>
    </ReviewsContainer>
  )
}

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

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
