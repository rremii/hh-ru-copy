import { useDeleteJobApplication } from "@shared/entities/jobApplication/model/useDeleteJobApplication"
import { Button } from "@shared/shared/button"

interface Props {
  jobApplicationId: number
}

export const DeleteJobApplication = ({ jobApplicationId }: Props) => {
  const { deleteJobApplication, isLoading, isError, error, isSuccess } =
    useDeleteJobApplication()

  const handleDelete = () => {
    deleteJobApplication(jobApplicationId)
  }

  return (
    <Button pending={isLoading} onClick={handleDelete} type="danger">
      Удалить
    </Button>
  )
}
