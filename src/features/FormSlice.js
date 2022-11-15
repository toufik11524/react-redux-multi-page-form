import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  studentInfo: { courseList: []},
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveInfo: (state, action) => {
    //   console.log(action.payload);
      state.studentInfo.name = action.payload?.name || state.studentInfo.name;
      state.studentInfo.email = action.payload?.email || state.studentInfo.email;
      state.studentInfo.phone = action.payload?.phone || state.studentInfo.phone;
      state.studentInfo.subject = action.payload?.subject || state.studentInfo.subject;
      state.studentInfo.mark =  action.payload?.mark || state.studentInfo.mark;
      state.studentInfo.courseList.push([...state.studentInfo.courseList, action.payload.course]);
      state.studentInfo.hour = action.payload?.hour || state.studentInfo.hour;
      state.studentInfo.address = action.payload?.address || state.studentInfo.address;
      state.studentInfo.city = action.payload?.city || state.studentInfo.city;
      state.studentInfo.number = action.payload?.number || state.studentInfo.number;
      state.studentInfo.course = action.payload?.number || state.studentInfo.number;
    },
  },
})

export const { saveInfo } = formSlice.actions;

export default formSlice.reducer;