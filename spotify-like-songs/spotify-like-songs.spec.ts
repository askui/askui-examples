import { aui } from './helper/jest.setup';

describe('Like Spotify song', () => {
    it('should like spotify song', async () => {
        await aui.click().icon().withText('search').exec();
        await aui.typeIn('Bohemian Rhapsody').textfield().exec();
        await aui.pressKey('enter').exec();
        await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Songs').exec();
        await aui.mouseRightClick().exec();
        await aui.clickText('Save to your Liked Songs');
        await aui.clickText('Liked Songs');
        await aui.expect().text('Bohemian Rhapsody').exists().exec();
        await aui.moveMouseTo().text('Bohemian Rhapsody').below().text('Title').exec();
        await aui.mouseRightClick().exec();
        await aui.clickText('Remove from your Liked Songs');
    });
});
