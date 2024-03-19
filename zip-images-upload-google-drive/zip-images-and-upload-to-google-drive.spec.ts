import { aui } from './helper/jest.setup';

describe('zip and upload suite', () => {

    it('Should upload screenshots folder on google drive', async () => {
        await aui.clickText('askui').exec();
        await aui.mouseDoubleLeftClick().exec();

        // The text to insert here should be something in the opened explorer window.
        // Usually there is 'This PC' or 'Quick Access' there.
        // Watch the video if you are not sure how the selector works.
        await aui.click().image().nearestTo().text('This PC').exec();
        await aui.pressTwoKeys('control', 'A').exec();

        await aui.mouseRightClick().exec();
        await aui.clickText('Compress to Zip file');
        await aui.type('askui screenshots').exec();
        await aui.pressKey('enter').exec();

        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
        await aui.clickText('Google');
        await aui.mouseDoubleLeftClick().exec();

        // Omit this step if you do not use profiles in chrome
        await aui.click().text('<Your profile>').nearestTo().text('work').exec();
        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text('Search Google or type a URL').exec();
        await aui.pressKey('enter').exec();

        await aui.mouseRightClick().exec();
        await aui.clickTexts(['File upload', 'Desktop', 'askui']);
        await aui.pressKey('enter').exec();
        await aui.clickTexts(['askui screenshots', 'Open']);
    });
});
