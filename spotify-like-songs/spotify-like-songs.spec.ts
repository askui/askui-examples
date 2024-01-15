import { aui } from './helper/jest.setup';

describe('Like Spotify song', () => {
    it('should like spotify song', async () => {
        await aui.click().icon().withText('search').exec();
        await aui.typeIn('Bohemian Rhapsody').textfield().exec();
        await aui.pressKey('enter').exec();
        await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Songs').exec();
        await aui.mouseRightClick().exec();
        await aui.click().text('Save to your Liked Songs').exec();
        await aui.click().text('Liked Songs').exec();
        await aui.expect().text('Bohemian Rhapsody').exists().exec();
        await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Title').exec();
        await aui.mouseRightClick().exec();
        await aui.click().text('Remove from your Liked Songs').exec();
    });
});
