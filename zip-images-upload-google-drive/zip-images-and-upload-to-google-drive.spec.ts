import { aui } from './helper/jest.setup';

describe('zip and upload suite', () => {

    it('Should upload screenshots folder on google drive', async () => {
        await aui.click().text('askui').exec();
        await aui.mouseDoubleLeftClick().exec();

        // The text to insert here should be something in the opened explorer window.
        // Usually there is 'This PC' or 'Quick Access' there.
        // Watch the video if you are not sure how the selector works.
        await aui.click().image().nearestTo().text('This PC').exec();
        await aui.pressTwoKeys('control', 'A').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text('Compress to Zip file').exec();
        await aui.type('askui screenshots').exec();
        await aui.pressKey('enter').exec();

        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
        await aui.click().text('Google').exec();
        await aui.mouseDoubleLeftClick().exec();

        // Omit this step if you do not use profiles in chrome
        await aui.click().text('<Your profile>').nearestTo().text('work').exec();
        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text('Search Google or type a URL').exec();
        await aui.pressKey('enter').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text('File upload').exec();
        await aui.click().text('Desktop').exec();
        await aui.click().text('askui').exec();
        await aui.pressKey('enter').exec();
        await aui.click().text('askui screenshots').exec();
        await aui.click().text('Open').exec();
    });
});
