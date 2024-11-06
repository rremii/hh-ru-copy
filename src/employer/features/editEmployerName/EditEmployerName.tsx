import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { LabelWithEdit } from "@shared/shared/ui/LabelWithEdit"
import styled from "styled-components"

export const EditEmployerName = () => {
  const { me } = useGetMe()

  return (
    <Container>
      <Title>Имя:</Title>
      <LabelWithEdit label={me?.name} onChange={() => {}} />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  font-weight: bold;
  color: black;
`
