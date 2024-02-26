import {cleanup, render } from "@testing-library/react";
import BannerFeature from "../ui";
import {it} from "vitest";

afterEach(cleanup)

test("Render feature banner", () => {
    render(<BannerFeature/>)
    expect(true).toBeTruthy()
})

it('Snapshot Feature Banner', () => {
    const banner = render(<BannerFeature/>)
    expect(banner).toMatchSnapshot()
})
