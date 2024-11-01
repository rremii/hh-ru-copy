import { Resume } from "../types"

const resume: Resume = {
  title: "Frontend developer",
  experience: "3 years",
  education: "High school",
  skills: ["HTML", "CSS", "JavaScript"],
  employeeId: 1,
}

export const useGetMyResume = () => {
  return { resume }
}
