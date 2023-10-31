import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
        const response = await fetch("https://api.quotable.io/quotes/random");
        const json = await response.json();
        return json; 
    }
)

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {},
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuote.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchQuote.fulfilled, (state, action) => {
                state.status = 'successful';
                state.quote = action.payload[0];
            })
            .addCase(fetchQuote.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }

})

export const selectQuote = (state) => state.quote;
export default quoteSlice.reducer;