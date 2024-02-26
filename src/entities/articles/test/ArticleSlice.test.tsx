import {cleanup} from "@testing-library/react";
import {describe, test, vitest} from "vitest";
import {getArticleCards} from "../model";

afterEach(cleanup)

describe('Article slice testing', () => {
    test('getArticleCards test', async () => {
        const dispatch = vitest.fn()
        const thunk = getArticleCards({skip: 1})
        await thunk(dispatch, () => {}, null)
        const { calls } = dispatch.mock
        expect(calls).toHaveLength(2)
        const [pending, fulfilled] = calls
        expect(pending[0].type).toBe('articles-card/get/pending')
        expect(fulfilled[0].type).toBe('articles-card/get/fulfilled')
    })
})