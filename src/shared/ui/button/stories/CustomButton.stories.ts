import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from "../ui";

const meta: Meta<typeof CustomButton> = {
    component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const FirstStory: Story = {
    args: {
        callback: () =>{},
        primary: true,
        light: true,
        direct: true,
        children: 'Download'
    },
};