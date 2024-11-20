import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProfileData {
  name: string;
  email: string;
  number: number;
  date: number;
  gender: string;
  address: string;
  passport: any;
  location: string;
  language: string;
  skills: string;
  summery: string;
  married: string;
  siblings: string;
  father: string;
  mother: string;
}
// Define the type for the slice state
interface PostState {
  post: ProfileData[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  post: [],
  loading: false,
  error: null,
};

const API = "https://jsonplaceholder.typicode.com/users";

export const addProfile = createAsyncThunk<ProfileData, ProfileData>(
  "/addProfile",
  async (profileData) => {
    const response = await axios.post(API, profileData);
    console.log(response.data);
    return response.data;
  }
);

export const fetchProfile = createAsyncThunk("/profileinfo", async () => {
  const response = await axios.get(API);
  console.log(response.data);
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.post.push(action.payload);
        console.log("data from payload", action.payload);
      })
      .addCase(addProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add profile";
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
        console.log("fetch data", action.payload);
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add profile";
      });
  },
});

export default postSlice.reducer;
