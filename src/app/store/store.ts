import {configureStore} from "@reduxjs/toolkit";
import articlesSlice from '../../entities/article/model/index.ts'
import commentsSlice from '../../entities/comment/model/index.ts'

const store = configureStore({
    reducer: {
        articles: articlesSlice,
        comments: commentsSlice
    }
})

export default store