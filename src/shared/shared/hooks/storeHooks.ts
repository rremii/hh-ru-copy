import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState, store } from "../store/store.ts"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useTypedSelector = useSelector.withTypes<RootState>()
