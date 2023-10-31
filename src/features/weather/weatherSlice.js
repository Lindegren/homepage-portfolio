import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "a75e03ef0f2e7fa233667475e63248f1";
const lat = 57.7089;
const long = 11.9746;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async () => {
        const response = await fetch(API_URL);
        const json = await response.json();
        return json;
    }
)


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        status: 'idle',
        errror: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const selectWeather = (state) => state.weather.weather;
export const selectStatus = (state) => state.weather.status;
export default weatherSlice.reducer;