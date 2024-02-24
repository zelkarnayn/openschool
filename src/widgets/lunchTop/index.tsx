import {useAppDispatch, useAppSelector} from "../../app/store/hooks/hooks.ts";
import {useEffect} from "react";
import {getRecipesByMealType} from "../../entities/recipe/model";
import LunchTop from "./ui";


function IndexTopLunch() {
    const recipes = useAppSelector((state) => state.recipes.recipes)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getRecipesByMealType())
    }, [dispatch]);
    console.log(recipes)
    return (
        <>
            <LunchTop recipes={recipes}/>
        </>
    );
}

export default IndexTopLunch;