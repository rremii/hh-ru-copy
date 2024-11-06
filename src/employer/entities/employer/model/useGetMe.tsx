import { Employer } from "@shared/entities/employer/types"
import { UserRole } from "@shared/entities/user/types"

const me: Employer = {
  id: 1,
  name: "Рога и Копанин",
  email: "lev.evgen@gmail.com",
  about: "Крутая ит компания дял разрабов",
  role: UserRole.EMPLOYER,
}
export const useGetMe = () => {
  return { me }
}
