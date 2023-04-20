import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUS = 'hello/greetingsReducer/GREETING';
const initialState = null;
export const getGreeting = createAsyncThunk(STATUS,async () => {
    const result = await fetch('/api/greetings')
    .then(result =>  result.json())
    console.log(result)
    return result.greeting;
  });
const greetingSlice= createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export default greetingSlice.reducer;