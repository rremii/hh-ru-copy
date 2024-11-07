import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { useUpdateMe } from "@employer/entities/employer/model/useUpdateMe"
import { LabelWithEdit } from "@shared/shared/ui/LabelWithEdit"
import styled from "styled-components"

export const EditEmployerName = () => {
  const { me } = useGetMe()

  const { updateMe } = useUpdateMe()
  const onChange = (name: string) => {
    if (!me) return

    updateMe({ id: me.id, name })
  }

  return (
    <Container>
      <Title>Имя:</Title>
      <LabelWithEdit label={me?.name || ""} onChange={onChange} />
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
