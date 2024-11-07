import { Button } from "@shared/shared/button"
import { useNavigate } from "react-router-dom"

interface Props {
  id: number
}

export const GoToEmployer = ({ id }: Props) => {
  const navigate = useNavigate()

  const goToEmployer = () => {
    navigate(`/employee/profile/employer/${id}`)
  }

  return (
    <Button onClick={goToEmployer} type="filled">
      К работодалетю
    </Button>
  )
}
