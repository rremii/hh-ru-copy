import { Resume } from "@shared/entities/resume/types"

const resumes: Resume[] = [
  {
    id: 1,
    title: "Фронтенд разработчик",
    experience: "6 лет опыта в такой то такойто компании",
    education: "Оконченое высшее образование",
    skills: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    employeeId: 1,
  },
]

export const useGetResumes = () => {
  return { resumes }
}
