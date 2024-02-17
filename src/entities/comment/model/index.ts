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
    comments: Comment[],
    mainComments: Comment[]
}

const initialState: InitialState = {
    comments: [],
    mainComments: []
}

export const getAllComments = createAsyncThunk('comments/get',
    async ({postId = 0}: {postId: number}, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/comments/post/${postId}`)
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data.comments)
        }
        return thunkAPI.rejectWithValue(res)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

export const getMainComments = createAsyncThunk('comments-main/get',
    async (_, thunkAPI) => {
    try {
        const res = await axios.get('https://dummyjson.com/comments?limit=6&skip=0&select=body,postId')
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data.comments)
        }
        return thunkAPI.rejectWithValue(res)
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
                .addCase(getMainComments.fulfilled, (state, action) => {
                    state.mainComments = action.payload
                })

        }
    })

export default commentsSlice.reducer