import type { Meta, StoryObj } from '@storybook/react';
import BannerPurchases from "../ui";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BannerPurchases> = {
    component: BannerPurchases,
};

export default meta;
type Story = StoryObj<typeof BannerPurchases>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};