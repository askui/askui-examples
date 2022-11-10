import { aui } from './helper/jest.setup';

describe('Like Spotify song', () => {
    it('should like spotify song', async () => {
        await aui.click().icon().withText('search').exec();
        await aui.typeIn('Bohemian Rhapsody').textfield().exec();
        await aui.pressKey('enter').exec();
        await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();
        await aui.mouseRightClick().exec();
        await aui.click().text().withText('Save to your Liked Songs').exec();
        await aui.click().text().withText('Liked Songs').exec();
        await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();
        await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();
        await aui.mouseRightClick().exec();
        await aui.click().text().withText('Remove from your Liked Songs').exec();
    });
});
