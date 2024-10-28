import { Routes } from "@nestjs/core"

export const routes: Routes = [
  {
    path: "auth",
  },
  {
    path: "employee",
    children: [
      {
        path: "me",
        children: [
          {
            path: "resume",
            children: [
              {
                path: "resume-application",
              },
            ],
          },
          {
            path: "employer-review",
          },
          {
            path: "job-application",
          },
        ],
      },
    ],
  },
  {
    path: "employer",
    children: [
      {
        path: "me",
        children: [
          {
            path: "job-post",
            children: [
              {
                path: "job-application",
              },
            ],
          },
          {
            path: "employer-review",
          },
          {
            path: "resume-application",
          },
        ],
      },
    ],
  },
  {
    path: "job-post",
  },
  {
    path: "resume",
  },
]
