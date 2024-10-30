import compose from "compose-function"
import { withRouter } from "./with-router.tsx"
import { withStore } from "./with-store.tsx"
import { withSuspense } from "./with-suspense.tsx"
import { withToasts } from "@shared/modules/toast/index.ts"

export const withProviders = compose(
  withRouter,
  withStore,
  withSuspense,
  withToasts
)
