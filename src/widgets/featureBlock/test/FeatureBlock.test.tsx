import {cleanup, render, screen} from "@testing-library/react";
import BannerFeature from "../ui";
import {it} from "vitest";

afterEach(cleanup)

test("Render feature banner", () => {
    render(<BannerFeature/>)
    expect(true).toBeTruthy()
})

it('test', () => {
    render(<BannerFeature/>)
    const we = screen.queryByText(/we/i)
    expect(we).toMatchSnapshot()
})
