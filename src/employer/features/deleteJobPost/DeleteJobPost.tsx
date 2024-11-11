import { useDeleteJobPost } from "@employer/entities/jobPost/model/useDeleteJobPost"
import { Button } from "@shared/shared/button"

interface Props {
  jobPostId: number
}

export const DeleteJobPost = ({ jobPostId }: Props) => {
  const { deleteJobPost } = useDeleteJobPost()

  const handleDelete = () => {
    deleteJobPost(jobPostId)
  }

  return (
    <Button onClick={handleDelete} type="danger">
      Удалить
    </Button>
  )
}
