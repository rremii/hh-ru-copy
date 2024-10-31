import { IJobPost } from "../types"

const jobPosts: IJobPost[] = [
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
    requirements: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    employerId: 1,
  },
]
export const useGetJobPost = (id?: number) => {
  const jobPost = jobPosts.find((jobPost) => jobPost.id === id)

  return { jobPost }
}
