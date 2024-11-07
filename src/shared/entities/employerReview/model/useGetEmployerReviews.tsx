import { EmployerReview } from "../types"

const reviews: EmployerReview[] = [
  {
    id: 1,
    comment: "Хороший проект",
    employerId: 1,
    employeeId: 1,
  },
  {
    id: 2,
    comment: "Хороший проект",
    employerId: 1,
    employeeId: 1,
  },

  {
    id: 3,
    comment: " Отлчный Прокет",
    employeeId: 1,
    employerId: 1,
  },
]

export const useGetEmployerReviews = (employerId?: number) => {
  return {
    reviews: reviews.filter((review) => review.employerId === employerId),
  }
}
