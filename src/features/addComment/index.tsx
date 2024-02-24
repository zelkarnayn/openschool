import React, {useState} from "react";
import {useAppDispatch} from "../../app/store/hooks/hooks.ts";
import {postComment} from "../../entities/comment/model";
import AddComment from "./ui";

function IndexAddComment({postId, userId}: {postId: string, userId: number}) {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    function addComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch(postComment({text, postId, userId}))
        setText('')
    }
    return (
        <>
            <AddComment text={text} setText={setText} addComment={addComment}/>
        </>
    );
}

export default IndexAddComment;