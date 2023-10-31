import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        goals: {} // id: {id: 123, text: "text", isCompleted: false}
    }, 
    reducers: {
        addGoal: (state, action) => {
            state.goals[action.payload.id] = {...action.payload, isCompleted: false};
        },
        toggleCompleted: (state, action) => {
            state.goals[action.payload.id].isCompleted = !state.goals[action.payload.id].isCompleted;
        },
        removeGoal: (state, action) => {
            delete state.goals[action.payload.id];
        }

    }
});

export const selectGoals = (state) => state.goals.goals;
export const checkCompleted = (id) => (state) => state.goals.goals[id].isCompleted;
export const {addGoal, toggleCompleted, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;