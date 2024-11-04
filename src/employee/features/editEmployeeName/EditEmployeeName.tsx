import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { LabelWithEdit } from "@shared/shared/ui/LabelWithEdit"

export const EditEmployeeName = () => {
  const { me } = useGetMe()

  return <LabelWithEdit label={me?.name} onChange={() => {}} />
}
