import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { EditEmployeeName } from "@employee/features/editEmployeeName/EditEmployeeName"
import { ProfileIcon } from "@shared/shared/ui/ProfileIcon"
import styled from "styled-components"

export const Profile = () => {
  const { me } = useGetMe()

  return (
    <ProfileLayout>
      <ProfileIcon $width="70px" $height="70px" $fontSize={35}>
        {me?.name?.slice(0, 1)}
      </ProfileIcon>
      <Email>{me?.email}</Email>
      <EditEmployeeName />
    </ProfileLayout>
  )
}
const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 100px;
`
const Email = styled.p`
  font-size: 18px;
  color: black;
  line-height: 30px;
  margin-top: 20px;
`
