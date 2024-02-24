import type { Meta, StoryObj } from '@storybook/react';
import BannerEnjoy from "../ui";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BannerEnjoy> = {
    component: BannerEnjoy,
};

export default meta;
type Story = StoryObj<typeof BannerEnjoy>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};