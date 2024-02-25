import { render, screen } from '@testing-library/react'
import {it} from "vitest";
import BannerFeature from "../widgets/featureBlock/ui";

it('test', () => {
    render(<BannerFeature/>)
    const we = screen.queryByText(/we/i)
    expect(we).toMatchSnapshot()
})








// import '@testing-library/jest-dom'
// import {cleanup, render, screen} from '@testing-library/react'
// import BannerQuality from "../widgets/qualityBlock/ui";
// import {expect} from "@storybook/test";
//
// afterEach(cleanup)
//
//
// test('Render QualityBanner', () => {
//     render(<BannerQuality/>)
//     expect(true).toBeTruthy()
// })
//
// test('Renders download button', () => {
//     const {getByText}=render(<BannerQuality/>)
//     expect(getByText(/download/i)).toBeInTheDocument()
// })
//
// test('Snapshot of button', () => {
//     render(<BannerQuality/>)
//     const button = screen.getByText(/download/i)
//     expect(button).toMatchSnapshot()
// })




