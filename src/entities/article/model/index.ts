import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export  interface ArticleCardType {
    id?: number
    title: string
    body: string
    tags: string[]
    reactions: number
}

export interface ArticleOne extends ArticleCardType{
    userId: number
}

type InitialStateType = {
    posts: ArticleCardType[],
    onePost: ArticleOne
}

const initialState: InitialStateType = {
    posts: [],
    onePost: {
        id: 0,
        tags: [''],
        title: '',
        body: '',
        userId: 0,
        reactions: 0
    }
}

export const getArticleCards = createAsyncThunk('articles-card/get',
    async ({skip = 0}: {limit: number, skip: number}, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/posts?limit=12&skip=${skip}&select=title,reactions,tags,body`)
        return thunkAPI.fulfillWithValue(res.data)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

export const getOneArticle = createAsyncThunk('article-one/get',
    async ({postId}:{postId: number}, thunkAPI) => {
        try {
            const res = await axios.get(`https://dummyjson.com/posts/${postId}`)
            return thunkAPI.fulfillWithValue(res.data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    })

const articlesSlice = createSlice(
    {
        name: 'articles',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getArticleCards.fulfilled, (state, action) => {
                    state.posts = action.payload
            })
                .addCase(getOneArticle.fulfilled, (state, action) => {
                    state.onePost = action.payload
                })
        }
    })

export default articlesSlice.reducer