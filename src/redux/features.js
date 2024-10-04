import { createSlice } from "@reduxjs/toolkit";

const bgChanger = createSlice({
    name: 'feature',
    initialState: {
        isChanged: sessionStorage.getItem('bg') !== null ? JSON.parse(sessionStorage.getItem('bg')) : false,
    },
    reducers: {
        changeBg: (state, action) => {
            state.isChanged = !state.isChanged
            sessionStorage.setItem('bg', JSON.stringify(state.isChanged));
        }
    },
})
export default bgChanger.reducer;
export const {changeBg} = bgChanger.actions
