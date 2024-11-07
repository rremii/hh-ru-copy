import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { useUpdateMe } from "@employer/entities/employer/model/useUpdateMe"
import { LabelWithTextarea } from "@shared/shared/ui/LabelWithTextarea"
import styled from "styled-components"

export const EditEmployerAbout = () => {
  const { me } = useGetMe()

  const { updateMe } = useUpdateMe()

  const onChange = (about: string) => {
    if (!me) return

    updateMe({ id: me.id, about })
  }

  return (
    <Container>
      <Title>О себе:</Title>
      <LabelWithTextarea label={me?.about || ""} onSubmit={onChange} />
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
