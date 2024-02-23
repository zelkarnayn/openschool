import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Comment} from "../@types/comment";


interface InitialState {
    comments: Comment[],
    mainComments: Comment[]
}

const initialState: InitialState = {
    comments: [],
    mainComments: []
}

export const getAllComments = createAsyncThunk<Comment[], {postId: string}, {rejectValue: string}>('comments/get',
    async ({postId = '0'}: {postId: string}, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/comments/post/${postId}`)
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data.comments)
        }
        return thunkAPI.rejectWithValue("Error")
    } catch (e) {
        return thunkAPI.rejectWithValue("Error")
    }
})

export const getMainComments = createAsyncThunk<Comment[], undefined, {rejectValue: string}>('comments-main/get',
    async (_, thunkAPI) => {
    try {
        const res = await axios.get('https://dummyjson.com/comments?limit=6&skip=0&select=body,postId')
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data.comments)
        }
        return thunkAPI.rejectWithValue("Error")
    } catch (e) {
        return thunkAPI.rejectWithValue("Error")
    }
})

export const postComment = createAsyncThunk('comments/post', async ({text, postId, userId}: {text: string, postId: string, userId: number}, thunkAPI) => {
    try {
        const res = await axios.post('https://dummyjson.com/comments/add',
            {
                body: text,
                postId,
                userId
        })
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data)
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
                .addCase(getAllComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                    state.comments = action.payload
                })
                .addCase(getMainComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                    state.mainComments = action.payload
                })
                .addCase(postComment.fulfilled, (state, action: PayloadAction<Comment>) => {
                    state.comments.push(action.payload)
                })

        }
    })

export default commentsSlice.reducer