import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Menus =
  | "resumeModal"
  | "jobPostModal"
  | "applyToResumeModal"
  | "applyToJobPostModal"

interface initialState {
  resumeModal: boolean
  jobPostModal: boolean
  applyToResumeModal: boolean
  applyToJobPostModal: boolean
}

const initialState = {
  resumeModal: false,
  jobPostModal: false,
  applyToResumeModal: false,
  applyToJobPostModal: false,
} as initialState

export const UiSlice = createSlice({
  name: "UiSlice",
  initialState,
  reducers: {
    openMenu(state, action: PayloadAction<Menus>) {
      state[action.payload] = true
    },
    closeMenu(state, action: PayloadAction<Menus>) {
      state[action.payload] = false
    },
  },
})

export const { openMenu, closeMenu } = UiSlice.actions

export const UiReducer = UiSlice.reducer
