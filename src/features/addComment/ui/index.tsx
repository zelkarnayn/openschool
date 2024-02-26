import styles from './styles.module.css'
import CustomButton from "../../../shared/ui/button/ui";
import React, {Dispatch, FormEvent, SetStateAction} from "react";
function AddComment({text, setText, addComment} : {text: string, setText: Dispatch<SetStateAction<string>>, addComment: (e: FormEvent<HTMLFormElement>) => void}) {

    return (
        <form className={styles.addcomment__wrapper} onSubmit={(e: React.FormEvent<HTMLFormElement>)=> addComment(e)}>
            <h3>Add <span>comment</span></h3>
            <textarea
                data-testid={'comment-input'}
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