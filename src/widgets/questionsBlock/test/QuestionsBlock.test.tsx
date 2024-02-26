import {cleanup, render, screen} from "@testing-library/react";
import {describe} from "vitest";
import Questions from "../ui";

afterEach(cleanup)

describe('Questions Banner tests', () => {
    test('Snapshot Questions Block', () => {
        render(<Questions/>)
        expect(render(<Questions/>)).toMatchSnapshot()
    })
    test('Questions count', () => {
        render(<Questions/>)
        expect(screen.getAllByTestId(/question/i).length).toEqual(5)
    })
})
