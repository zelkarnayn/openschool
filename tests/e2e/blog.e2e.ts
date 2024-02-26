import Blog from '../pages/blog.page.ts'

describe('My blog application', () => {
    it('Sceleton load', async () => {
        await Blog.open()
        await Blog.loadSceleton()
    })
    it('Cards load', async () => {
        await Blog.open()
        await Blog.loadCards()
    })
    it('Next page', async () => {
        await Blog.open()
        await Blog.loadSceleton()
        await Blog.loadCards()
        await Blog.clickForward()
        await Blog.loadSceleton()
        await Blog.loadCards()
    })
})
