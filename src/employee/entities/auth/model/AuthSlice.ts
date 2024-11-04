import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type AuthState = "success" | "rejected" | null

interface initialState {
  authState: AuthState
  email: string
}

const initialState = {
  email: "",
  authState: null,
} as initialState

export const AuthSlice = createSlice({
  name: "EmployeeAuthSlice",
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<AuthState>) {
      state.authState = action.payload
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
  },
})

export const { setEmail, setAuthState, setPending } = AuthSlice.actions

export const EmployeeAuthReducer = AuthSlice.reducer
