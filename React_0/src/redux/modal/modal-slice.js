import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal(store, action) {
            store.isOpen = action.payload;
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;