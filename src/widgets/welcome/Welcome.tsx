import { Button } from "@shared/button"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const Welcome = () => {
  const navigate = useNavigate()

  const goToEmployeeLogin = () => navigate("/employee")
  const goToEmployerLogin = () => navigate("/employer")

  return (
    <Container>
      <OptionLayout>
        <Title>Поиск работы</Title>
        <Subtitle>Просмотр вакансий и поиск работы</Subtitle>
        <Button
          style={{ width: "100%", height: "45px" }}
          type="filled"
          rounded
          onClick={goToEmployeeLogin}
        >
          Ищу работу
        </Button>
      </OptionLayout>
      <OptionLayout>
        <Title>Поиск сотрудников</Title>
        <Subtitle>Размещение вакансий и доступ к базе резюме</Subtitle>
        <Button
          style={{ width: "100%", height: "45px" }}
          type="simple"
          onClick={goToEmployerLogin}
        >
          Ищу сотрудников
        </Button>
      </OptionLayout>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const OptionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  max-width: 90%;
  gap: 20px;
  padding: 20px;
  border-radius: 25px;
  background-color: white;
  border: 1px solid #e0e0e0;
`
const Title = styled.h1`
  font-size: 22px;
  color: black;
  font-weight: bold;
`
const Subtitle = styled.p`
  font-size: 16px;
  color: rgb(118, 134, 148);
`
