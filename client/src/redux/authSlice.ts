import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api/client'
export interface authState {
  token: any,
  isLogged: boolean,
  user: Object,
  status: "pending" | "ready"
}

const initialState : authState = {
  token: "",
  isLogged: false,
  user: {},
  status: "ready"
};

export const loginToken = createAsyncThunk("login/token",
  async (token: any) => {
    let response = await api.loginUsingToken(token);
    return response;
  }
)
export const login = createAsyncThunk("login",
  async (credential:any) => {
    let response = await api.Login(credential);
    console.log(response);
    return response;
  }
)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogged = true;
      state.token = localStorage.getItem("token");
      state.user = action.payload;
      console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginToken.pending, (state, action) => {
        
      })
      .addCase(loginToken.fulfilled, (state, action) => {

      })
      .addCase(login.pending, (state) => {
        
      })
      .addCase(login.fulfilled, (state, action) => {
        
      })
  }
})

export const { loginSuccess  } = authSlice.actions;

export default authSlice.reducer;