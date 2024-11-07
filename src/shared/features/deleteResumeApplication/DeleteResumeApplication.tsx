import { useDeleteResumeApplication } from "@shared/entities/resumeApplication/model/useDeleteResumeApplication"
import { Button } from "@shared/shared/button"

interface Props {
  resumeId: number
}

export const DeleteResumeApplication = ({ resumeId }: Props) => {
  const { deleteResumeApplication, isLoading, isError, error, isSuccess } =
    useDeleteResumeApplication()

  const handleDelete = () => {
    deleteResumeApplication(resumeId)
  }

  return (
    <Button pending={isLoading} onClick={handleDelete} type="danger">
      Удалить
    </Button>
  )
}
