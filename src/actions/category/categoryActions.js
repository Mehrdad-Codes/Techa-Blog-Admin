import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk("category/getAllCategories", async () => {
    const query = "Category/GetAll?PageIndex=1&PageSize=10"
    const { data } = await axios.get(query);
    console.log(data?.categories?.items)
    return data?.categories?.items;
});

export const getCategoriesForSelect = createAsyncThunk("category/getCategoriesForSelect", async () => {
    const query = "Category/GetForSelect"
    const { data } = await axios.get(query);
    console.log(data?.categories?.items)
    return data?.categories?.items;
});

export const createCategory = createAsyncThunk("category/createCategory", async formData => {
    const query = "Category/AddCategory"
    await axios.post(query, formData);

});

export const updateCategory = createAsyncThunk("category/updateCategory", async formData => {
    const query = "Category/EditCategory"
    await axios.put(query, formData);

});