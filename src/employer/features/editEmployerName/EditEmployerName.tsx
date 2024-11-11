import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { useUpdateMe } from "@employer/entities/employer/model/useUpdateMe"
import { useToast } from "@shared/shared/modules/toast"
import { LabelWithEdit } from "@shared/shared/ui/LabelWithEdit"
import { hasMaxLength } from "@shared/utils/validation/hasMaxLength"
import { isNotEmpty } from "@shared/utils/validation/isNotEmpty"
import { validate } from "@shared/utils/validation/validate"
import styled from "styled-components"

export const EditEmployerName = () => {
  const { openToast } = useToast()

  const { me } = useGetMe()
  const { updateMe } = useUpdateMe()

  const handleValidation = (name: string) => {
    const isValid = validate([
      isNotEmpty({
        value: name,
        msg: "Имя не может быть пустым",
        cb: (msg) => openToast({ content: msg, type: "error" }),
      }),
      hasMaxLength({
        value: name,
        maxLength: 20,
        msg: "Имя должно быть не более 20 символов",
        cb: (msg) => openToast({ content: msg, type: "error" }),
      }),
    ])

    return isValid
  }

  const onChange = (name: string) => {
    if (!me) return

    updateMe({ id: me.id, name })
  }

  return (
    <Container>
      <Title>Имя:</Title>
      <LabelWithEdit
        label={me?.name || ""}
        validate={handleValidation}
        onChange={onChange}
      />
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
