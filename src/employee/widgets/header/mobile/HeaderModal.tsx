import { Logout } from "@employee/features/logout/Logout"
import { Modal } from "@shared/shared/ui/Modal"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ProfileIcon from "@icons/profile.svg?react"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const HeaderModal = ({ isOpen, onClose }: Props) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      onClose()
    }
  }

  return (
    <HeaderModalLayout onClick={closeModal} $isOpen={isOpen}>
      <Link to="/employee/profile">
        <ProfileIcon width={35} height={35} />
      </Link>
      <Link to="/employee/job-list">Поиск</Link>
      <Link to="/employee/resume">Резюме</Link>
      <Link to="/employee/applications/me">Отклики</Link>
      <Logout>Выйти</Logout>
    </HeaderModalLayout>
  )
}
const HeaderModalLayout = styled(Modal)`
  position: absolute;
  background-color: black;
  top: 100%;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: white;
  padding: 30px 5%;
`
