import { $ } from '@wdio/globals'
import Page from './page.ts';

class Blog extends Page {
    public get getSceleton () {
        return $('#sceleton')
    }

    public get getCards () {
        return $('#card')
    }

    public get forward () {
        return $('#forward');
    }

    async clickForward() {
        await this.forward.click()
    }

    async loadSceleton() {
        try {
            await this.open()
            const sceleton =  await this.getSceleton.waitForDisplayed({timeout: 1000})
            if (!sceleton) {
                throw new Error('Скелетон не загрузился')
            }
        } catch (e) {
            // @ts-ignore
            throw new Error(`Ошибка: ${e.message}`)
        }
    }
    async loadCards() {
        try {
            await this.open()
            const cards =  await this.getCards.waitForDisplayed({timeout: 2000})
            if (!cards) {
                throw new Error('Карточки не загрузились')
            }
        } catch (e) {
            // @ts-ignore
            throw new Error(`Ошибка: ${e.message}`)
        }
    }


    public open () {
        return super.open('/blog');
    }
}

export default new Blog();
