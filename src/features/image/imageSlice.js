import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UNSPLASH_ACCESS_KEY } from "../../config";

export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async () => {
        const api_url = `https://api.unsplash.com/photos/random/?count=1&client_id=${UNSPLASH_ACCESS_KEY}`;
        const response = await fetch(api_url);
        const json = await response.json();
        console.log(json[0].slug);
        return json[0];
    }
)

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        image: {},
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchImage.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchImage.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.image = action.payload;
        }) 
        .addCase(fetchImage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const selectImageUrls = (state) => state.image.image.urls;
export const selectImageDescription = (state) => state.image.image.alt_description;
export const selectImageUser = (state) => state.image.image.user;

export default imageSlice.reducer;