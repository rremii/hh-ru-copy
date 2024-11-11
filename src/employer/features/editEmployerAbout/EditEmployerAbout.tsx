import { useGetMe } from "@employer/entities/employer/model/useGetMe"
import { useUpdateMe } from "@employer/entities/employer/model/useUpdateMe"
import { useToast } from "@shared/shared/modules/toast"
import { LabelWithTextarea } from "@shared/shared/ui/LabelWithTextarea"
import { hasMaxLength } from "@shared/utils/validation/hasMaxLength"
import { isNotEmpty } from "@shared/utils/validation/isNotEmpty"
import { validate } from "@shared/utils/validation/validate"
import styled from "styled-components"

export const EditEmployerAbout = () => {
  const { me } = useGetMe()

  const { openToast } = useToast()
  const { updateMe } = useUpdateMe()

  const handleValidation = (name: string) => {
    const isValid = validate([
      isNotEmpty({
        value: name,
        msg: "О себе не может быть пустым",
        cb: (msg) => openToast({ content: msg, type: "error" }),
      }),
      hasMaxLength({
        value: name,
        maxLength: 200,
        msg: "Имя должно быть не более 200 символов",
        cb: (msg) => openToast({ content: msg, type: "error" }),
      }),
    ])

    return isValid
  }

  const onChange = (about: string) => {
    if (!me) return

    updateMe({ id: me.id, about })
  }

  return (
    <Container>
      <Title>О себе:</Title>
      <LabelWithTextarea
        label={me?.about || ""}
        validate={handleValidation}
        onSubmit={onChange}
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
