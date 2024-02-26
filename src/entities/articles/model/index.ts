import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {IArticle, IPosts} from "../@types/article";

type InitialState = {
    posts: IPosts,
    onePost: IArticle
    loading: boolean
    error: string | undefined
}

const initialState: InitialState = {
    posts: {
        total: 0,
        skip: 0,
        limit: 0,
        posts: []
    },
    onePost: {
        id: 0,
        tags: [''],
        title: '',
        body: '',
        userId: 0,
        reactions: 0
    },
    loading: false,
    error: ''
}

export const getArticleCards = createAsyncThunk<IPosts, {skip: number}, {rejectValue: string}>('articles-card/get',
    async ({skip = 0}: {skip: number}, thunkAPI) => {
    try {
        const res = await axios.get(`https://dummyjson.com/posts?limit=12&skip=${skip}&select=title,reactions,tags,body,userId`)
        if (res.status === 200) {
            return thunkAPI.fulfillWithValue(res.data)
        }
        return thunkAPI.rejectWithValue("Error")
    } catch (e) {
        return thunkAPI.rejectWithValue('Error')
    }
})

export const getOneArticle = createAsyncThunk<IArticle, {postId: string}, {rejectValue: string}>('article-one/get',
    async ({postId}, {rejectWithValue, fulfillWithValue}) => {
        try {
            const res = await axios.get(`https://dummyjson.com/posts/${postId}`)
            if (res.status === 200) {
                return fulfillWithValue(res.data)
            }
            return rejectWithValue('Error')
        } catch (e) {
            return rejectWithValue('Error')
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
                    state.error = ''
                    state.loading = false
            })
                .addCase(getArticleCards.pending, (state) => {
                    state.error = ''
                    state.loading = true
                })
                .addCase(getArticleCards.rejected, (state, action) => {
                    state.error = action.payload
                    state.loading = false
                })
                .addCase(getOneArticle.fulfilled, (state, action) => {
                    state.onePost = action.payload
                })
                .addCase(getOneArticle.pending, (state) => {
                    state.error = ''
                    state.loading = true
                })
                .addCase(getOneArticle.rejected, (state, action) => {
                    state.error = action.payload
                    state.loading = false
                })
        }
    })

export default articlesSlice.reducer