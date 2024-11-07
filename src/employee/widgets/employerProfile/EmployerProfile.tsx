import { useGetEmployer } from "@employee/entities/employer/model/useGetEmployer"
import { ProfileIcon } from "@shared/shared/ui/ProfileIcon"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const EmployerProfile = () => {
  const { id } = useParams()

  const { employer } = useGetEmployer(Number(id))

  return (
    <ProfileLayout>
      <ProfileIcon $width="70px" $height="70px" $fontSize={35}>
        {employer.name.slice(0, 1)}
      </ProfileIcon>
      <Email>{employer.email}</Email>
      <Section>
        <Label>Имя:</Label>
        <Text>{employer.name}</Text>
      </Section>
      <Section>
        <Label>О себе:</Label>
        <Text>{employer.about}</Text>
      </Section>
    </ProfileLayout>
  )
}
const Section = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  font-weight: bold;
  color: black;
`
const Text = styled.p`
  font-size: 18px;
  color: black;
  line-height: 30px;
`

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
