import { Button } from "@shared/shared/button"
import { useNavigate } from "react-router-dom"

interface Props {
  jobPostId: number
}

export const GoToJobPost = ({ jobPostId }: Props) => {
  const navigate = useNavigate()

  const goToJobPost = (id: number) => {
    navigate(`/employee/job-list/${id}`)
  }
  return (
    <Button
      onClick={() => goToJobPost(jobPostId)}
      color="rgb(13, 194, 103)"
      type="simple"
    >
      Просмотреть
    </Button>
  )
}
