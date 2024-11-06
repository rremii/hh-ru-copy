import { Button } from "@shared/shared/button"

interface Props {
  jobApplicationId: number
}

export const DeleteJobApplication = ({}: Props) => {
  return <Button type="danger">Удалить</Button>
}
