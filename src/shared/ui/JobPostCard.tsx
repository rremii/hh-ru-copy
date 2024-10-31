import styled from "styled-components"

interface Props {
  title: string
  description: string
  onClick: () => void
}

export const JobPostCard = ({ description, onClick, title }: Props) => {
  return (
    <CardLayout onClick={onClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardLayout>
  )
}

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #dce3eb;
  max-width: 600px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  }
`
const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`
const Description = styled.p`
  font-size: 15px;
  color: rgb(102, 102, 102);
  line-height: 1.5;
`
