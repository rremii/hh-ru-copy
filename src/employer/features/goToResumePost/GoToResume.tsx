import { Button } from "@shared/shared/button"
import { useNavigate } from "react-router-dom"

interface Props {
  resumeId: number
}

export const GoToResume = ({ resumeId }: Props) => {
  const navigate = useNavigate()

  const goToResume = (id: number) => {
    // navigate(`/job-list/${id}`)
  }
  return (
    <Button
      onClick={() => goToResume(resumeId)}
      color="rgb(13, 194, 103)"
      type="simple"
    >
      Просмотреть
    </Button>
  )
}
