import {cleanup, render, screen, waitFor} from "@testing-library/react";
import AddComment from "../ui";
import {userEvent} from '@testing-library/user-event'

afterEach(cleanup)

describe('Comment input', () => {
    test('Clear text on Enter', async () => {
        render(<AddComment text={''} setText={() => {}} addComment={() => {}}/>)
        let textBox = screen.getByTestId('comment-input')
        textBox.focus();
        expect(textBox).toHaveFocus();
        await userEvent.keyboard('hello');
        await userEvent.keyboard('{Enter}');
        await waitFor(() => {
            expect(textBox).toHaveValue('');
        });
    });
})