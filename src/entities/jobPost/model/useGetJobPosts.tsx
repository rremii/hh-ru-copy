import { JobPost } from "../types"

const jobPosts: JobPost[] = [
  {
    id: 1,
    title: "Frontend developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
    salary: 100,
    requirements: ["Lorem", "Ipsum"],
    employerId: 1,
  },
  {
    id: 2,
    title: "Backend developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga tempore tenetur, optio porro dicta ipsa at consequuntur libero doloremque ipsam blanditiis labore perspiciatis corporis harum cupiditate minima eius, quia dolor.",
    salary: 200,
    requirements: ["Lorem", "Ipsum"],
    employerId: 1,
  },
]
export const useGetJobPosts = () => {
  return { jobPosts }
}
