import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "../slices/theme/themeSlice"
import blogReducer from "../slices/blog/blogSlice"
import uploadReducer from "../slices/upload/uploadSlice"
import categoryReducer from "../slices/category/categorySlice";
import seoReducer from "../slices/blog/seoSlice"
import sliderReducer from "../slices/slider/sliderSlice"

export const store = configureStore({
    reducer: {
        darkMode: themeSlice.reducer,
        blogs: blogReducer,
        upload: uploadReducer,
        seo: seoReducer,
        categories: categoryReducer,
        sliders: sliderReducer,
    }
})