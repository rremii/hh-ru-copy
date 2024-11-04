import { useGetMe } from "@entities/employee/model/useGetMe"
import { LabelWithEdit } from "@shared/ui/LabelWithEdit"

export const EditEmployeeName = () => {
  const { me } = useGetMe()

  return <LabelWithEdit label={me?.name} onChange={() => {}} />
}
