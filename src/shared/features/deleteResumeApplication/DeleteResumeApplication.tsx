import { Button } from "@shared/shared/button"

interface Props {
  resumeId: number
}

export const DeleteResumeApplication = ({}: Props) => {
  return <Button type="danger">Удалить</Button>
}
