import type { Meta, StoryObj } from '@storybook/react';
import LunchTop from "../ui";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LunchTop> = {
    component: LunchTop,
};

export default meta;
type Story = StoryObj<typeof LunchTop>;

export const FirstStory: Story = {
    args: {
        recipes: [
            {
                "id": 3,
                "name": "Chocolate Chip Cookies",
                "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
                "mealType": [
                    "Snack",
                    "Dessert"
                ],
                "rating": 4.9,
                "prepTimeMinutes": 15
            },
            {
                "id": 26,
                "name": "Mexican Street Corn (Elote)",
                "image": "https://cdn.dummyjson.com/recipe-images/26.webp",
                "mealType": [
                    "Snack",
                    "Side Dish"
                ],
                "rating": 4.6,
                "prepTimeMinutes": 15
            },
            {
                "id": 43,
                "name": "Mango Avocado Salsa",
                "image": "https://cdn.dummyjson.com/recipe-images/43.webp",
                "mealType": [
                    "Snack",
                    "Appetizer"
                ],
                "rating": 4.1,
                "prepTimeMinutes": 10
            }
        ]
        //👇 The args you need here will depend on your component
    },
};