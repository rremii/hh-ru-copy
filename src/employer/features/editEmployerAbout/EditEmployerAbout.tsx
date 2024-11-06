import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { LabelWithTextarea } from "@shared/shared/ui/labelWithTextarea"
import styled from "styled-components"

export const EditEmployerAbout = () => {
  const { me } = useGetMe()

  const onSubmit = (about: string) => {
    console.log(about)
  }

  return (
    <Container>
      <Title>О себе:</Title>
      <LabelWithTextarea label={me?.about} onSubmit={onSubmit} />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`
const Title = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  font-weight: bold;
  color: black;
`
