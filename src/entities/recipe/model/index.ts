import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export  interface RecipeCardType {
    id?: number
    name: string
    image: string
    rating: number
    mealType: string[]
    prepTimeMinutes: number
}


type InitialStateType = {
    recipes: RecipeCardType[],
}

const initialState: InitialStateType = {
    recipes: [],
}

export const getRecipesByMealType = createAsyncThunk('recipes-snack/get',
    async (_, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/recipes/meal-type/snack?select=name,image,mealType,rating,prepTimeMinutes`)
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data.recipes)
        }
        return thunkAPI.rejectWithValue(res)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

const recipesSlice = createSlice(
    {
        name: 'recipes',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getRecipesByMealType.fulfilled, (state, action) => {
                    state.recipes = action.payload
            })
        }
    })

export default recipesSlice.reducer