import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: 'detail',
  initialState: {
    cnt: 0
  },
  reducers: {
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt (state, action) {
      const regex = /^[0-9]+$/;
      if(regex.test(action.payload)) {
        state.cnt = parseInt(action.payload);
      } else {
        console.log('넘버 아님', action.payload);
      }
      },
    },
});

export const {
  addCnt,
  minusCnt,
  changeCnt
} = detail.actions;

export default detail.reducer;