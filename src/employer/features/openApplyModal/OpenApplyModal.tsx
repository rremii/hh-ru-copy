import { openMenu } from "@shared/entities/ui/model/UiSlice"
import { Button } from "@shared/shared/button"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"

export const OpenApplyModal = () => {
  const dispatch = useAppDispatch()

  const openApplyModal = () => {
    dispatch(openMenu("applyToResumeModal"))
  }
  return (
    <Button onClick={openApplyModal} color="rgb(13, 194, 103)" type="filled">
      Откликнуться
    </Button>
  )
}
