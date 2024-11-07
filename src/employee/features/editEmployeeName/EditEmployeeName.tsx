import { useGetMe } from "@employee/entities/employee/model/useGetMe"
import { useUpdateMe } from "@employee/entities/employee/model/useUpdateMe"
import { LabelWithEdit } from "@shared/shared/ui/LabelWithEdit"
import styled from "styled-components"

export const EditEmployeeName = () => {
  const { me } = useGetMe()
  const { update } = useUpdateMe()

  const onSubmit = (name: string) => {
    if (!me) return

    update({ id: me.id, name })
  }

  return (
    <Container>
      {me ? (
        <>
          <Title>Имя:</Title>
          <LabelWithEdit label={me?.name} onChange={onSubmit} />
        </>
      ) : (
        <div>LOADING</div>
      )}
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
