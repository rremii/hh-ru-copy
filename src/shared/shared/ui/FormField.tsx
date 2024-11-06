import { ChangeEvent, FC, ReactNode, useId } from "react"
import styled from "styled-components"

interface Props {
  isError?: boolean
  textarea?: boolean
  label?: string
  input?: {
    type?: string
    beforeInput?: ReactNode
    placeholder?: string
    register?: object //TODO check how to fix
    onChange?: (e: ChangeEvent) => void
  }
}

export const FormField: FC<Props> = ({
  input = {},
  isError,
  label,
  textarea,
}) => {
  const { placeholder, type = "text", register, onChange, beforeInput } = input

  const labelId = useId()

  return (
    <FieldLayout className="FormField" aria-autocomplete={"none"}>
      <label className={isError ? "error" : ""} htmlFor={label + "_" + labelId}>
        {label}
        <div className="input-cont">
          {beforeInput}
          {textarea ? (
            <textarea
              onChange={onChange}
              id={label + "_" + labelId}
              className={isError ? "error" : ""}
              {...register}
              placeholder={placeholder || ""}
            />
          ) : (
            <input
              onChange={onChange}
              id={label + "_" + labelId}
              className={isError ? "error" : ""}
              type={type}
              {...register}
              placeholder={placeholder || ""}
            />
          )}
        </div>
      </label>
    </FieldLayout>
  )
}
const FieldLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    width: 100%;
    color: black;
    font-family: Inter, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: semibold;
    line-height: normal;

    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .input-cont {
    width: 100%;
    position: relative;

    textarea,
    input {
      width: 100%;
      border-radius: 5px;
      padding: 10px 20px;
      color: black;
      font-weight: 400;
      border: 1px solid rgb(177, 176, 181);
      background-color: transparent;
      /* height: 30px; */
      transition: border 0.3s;

      animation: scaleUp 0.8s forwards;
      @keyframes scaleUp {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      &:hover {
        border: 1px solid rgb(114, 113, 119);
      }

      &:focus {
        border: 1px solid rgb(0, 102, 255);
      }

      &::placeholder {
        color: rgb(177, 176, 181);
      }
    }

    .error {
      color: #ed1245;
      border: 1px solid #ed1245 !important;
    }
  }
`
