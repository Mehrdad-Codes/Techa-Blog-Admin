import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getCategoriesForSelect } from "../../actions/category/categoryActions";


const initialState = {
    loading: false,
    categories: [],
    select: [],
    error: null
}

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllCategories.pending, state => {
                state.loading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.categories = payload;
            })
            .addCase(getAllCategories.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(getCategoriesForSelect.pending, state => {
                state.loading = true;
            })
            .addCase(getCategoriesForSelect.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.select = payload;
            })
            .addCase(getCategoriesForSelect.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
})

export default categorySlice.reducer;