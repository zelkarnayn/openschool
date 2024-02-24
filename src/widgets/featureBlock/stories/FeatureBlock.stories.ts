import type { Meta, StoryObj } from '@storybook/react';
import BannerFeature from "../ui";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BannerFeature> = {
    component: BannerFeature,
};

export default meta;
type Story = StoryObj<typeof BannerFeature>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};