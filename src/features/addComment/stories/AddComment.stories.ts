import type { Meta, StoryObj } from '@storybook/react';
import AddComment from "../ui";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AddComment> = {
    component: AddComment,
};

export default meta;
type Story = StoryObj<typeof AddComment>;

export const FirstStory: Story = {
    args: {
        text: '',
        setText: () => {},
        addComment: () => {}
        //👇 The args you need here will depend on your component
    },
};