import { useDeleteReview } from "@employee/entities/employerReview/model/useDeleteReview"
import { Button } from "@shared/shared/button"

interface Props {
  reviewId: number
}

export const DeleteReview = ({ reviewId }: Props) => {
  const { deleteReview, isLoading, isError, error, isSuccess } =
    useDeleteReview()

  const handleDelete = () => {
    deleteReview(reviewId)
  }

  return (
    <Button pending={isLoading} onClick={handleDelete} type="danger">
      Удалить
    </Button>
  )
}
