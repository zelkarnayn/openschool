import styles from './styles.module.css'
import CustomButton from "../../../shared/ui/button/ui";
import {postComment} from "../../../entities/comment/model";
import React, {useState} from "react";
import {useAppDispatch} from "../../../app/store/hooks/hooks.ts";
function AddComment({postId, userId}: {postId: string, userId: number}) {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    function addComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch(postComment({text, postId, userId}))
        setText('')
    }
    return (
        <form className={styles.addcomment__wrapper} onSubmit={(e: React.FormEvent<HTMLFormElement>)=> addComment(e)}>
            <h3>Add <span>comment</span></h3>
            <textarea
                placeholder={'ENTER YOUR COMMENT'}
                className={styles.addcomment__input}
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
            <div className={styles.addcomment__button}><CustomButton primary={true}>Send</CustomButton></div>
        </form>
    );
}

export default AddComment;