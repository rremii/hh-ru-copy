import { Resume } from "../../../../shared/entities/resume/types"

const resume: Resume = {
  id: 1,
  title: "Frontend developer",
  experience: "3 years",
  education: "High school",
  skills: ["HTML", "CSS", "JavaScript"],
  employeeId: 1,
}

export const useGetMyResume = () => {
  return { resume }
}
