import { createSlice } from "@reduxjs/toolkit";

const bgChanger = createSlice({
    name: 'feature',
    initialState: {
        targetSection: null,
        isChanged: sessionStorage.getItem('bg') !== null ? JSON.parse(sessionStorage.getItem('bg')) : false,
    },
    reducers: {
        changeBg: (state, action) => {
            state.isChanged = !state.isChanged
            sessionStorage.setItem('bg', JSON.stringify(state.isChanged));
        },
        setTargetSection: (state, action) => {
            state.targetSection = action.payload;
        }
    },
})
export default bgChanger.reducer;
export const { changeBg, setTargetSection } = bgChanger.actions
