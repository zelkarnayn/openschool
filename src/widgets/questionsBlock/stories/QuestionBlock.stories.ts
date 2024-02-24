import type { Meta, StoryObj } from '@storybook/react';
import Questions from "../ui";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Questions> = {
    component: Questions,
};

export default meta;
type Story = StoryObj<typeof Questions>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};