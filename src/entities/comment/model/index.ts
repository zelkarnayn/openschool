import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export type Comment = {
    id: number
    body: string
    postId: number
    user: {
        id: number
        username: string
    }
}

type InitialState = {
    comments: Comment[]
}

const initialState: InitialState = {
    comments: []
}

export const getAllComments = createAsyncThunk('comments/get',
    async ({postId = 0}: {postId: number}, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/comments/post/${postId}`)
        return thunkAPI.fulfillWithValue(res.data.comments)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})


const commentsSlice = createSlice(
    {
        name: 'comments',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getAllComments.fulfilled, (state, action) => {
                    state.comments = action.payload
            })

        }
    })

export default commentsSlice.reducer