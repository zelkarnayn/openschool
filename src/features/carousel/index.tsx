import {useAppDispatch, useAppSelector} from "../../app/store/hooks/hooks.ts";
import {useEffect} from "react";
import {getMainComments} from "../../entities/comment/model";
import CarouselComments from "./comments";

function IndexComments() {
    const comments = useAppSelector((state) => state.comments.mainComments)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMainComments())
    }, [dispatch]);

    return (
        <>
            <CarouselComments comments={comments}/>
        </>
    );
}

export default IndexComments;