import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        text: "This is a quote",
        src: "",
    },
    reducers: {
        generateQuote: state => {
            //update quote
        }
    }
});

export const selectQuote = (state) => state.quote.text;
export const {generateQuote} = quoteSlice.actions;
export default quoteSlice.reducer;