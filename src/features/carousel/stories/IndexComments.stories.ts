import type { Meta, StoryObj } from '@storybook/react';
import CarouselComments from "../comments";



const meta: Meta<typeof CarouselComments> = {
    component: CarouselComments,
};

export default meta;
type Story = StoryObj<typeof CarouselComments>;

export const FirstStory: Story = {
    args: {
        comments: [
            {
                "id": 1,
                "body": "This is some awesome thinking!",
                "postId": 100,
                "user": {
                    "id": 63,
                    "username": "eburras1q"
                }
            },
            {
                "id": 2,
                "body": "What terrific math skills you’re showing!",
                "postId": 27,
                "user": {
                    "id": 71,
                    "username": "omarsland1y"
                }
            },
            {
                "id": 3,
                "body": "You are an amazing writer!",
                "postId": 61,
                "user": {
                    "id": 29,
                    "username": "jissetts"
                }
            },
            {
                "id": 4,
                "body": "Wow! You have improved so much!",
                "postId": 8,
                "user": {
                    "id": 19,
                    "username": "bleveragei"
                }
            },
            {
                "id": 5,
                "body": "Nice idea!",
                "postId": 62,
                "user": {
                    "id": 70,
                    "username": "cmasurel1x"
                }
            },
            {
                "id": 6,
                "body": "You are showing excellent understanding!",
                "postId": 19,
                "user": {
                    "id": 97,
                    "username": "cdavydochkin2o"
                }
            }
        ]
        //👇 The args you need here will depend on your component
    },
};