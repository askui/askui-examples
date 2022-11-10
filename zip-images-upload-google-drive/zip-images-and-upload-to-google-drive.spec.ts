import { aui } from './helper/jest.setup';

describe(/* a string identifying the test suite */, () => {

    it('Should upload screenshots folder on google drive', async () => {
        await aui.click().text().withText('askui').exec();
        await aui.mouseDoubleLeftClick().exec();

        // The text to insert here should be something in the opened explorer window.
        // Usually there is 'This PC' or 'Quick Access' there.
        // Watch the video if you are not sure how the selector works.
        await aui.click().image().nearestTo().text().withText('This PC').exec();
        await aui.pressTwoKeys('control', 'A').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text().withText('Compress to Zip file').exec();
        await aui.type('askui screenshots').exec();
        await aui.pressKey('enter').exec();

        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();
        await aui.click().text().withText('Google').exec();
        await aui.mouseDoubleLeftClick().exec();

        // Omit this step if you do not use profiles in chrome
        await aui.click().text().withText('<Your profile>').nearestTo().text().withText('work').exec();
        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text().withText('Search Google or type a URL').exec();
        await aui.pressKey('enter').exec();

        await aui.mouseRightClick().exec();
        await aui.click().text().withText('File upload').exec();
        await aui.click().text().withText('Desktop').exec();
        await aui.click().text().withText('askui').exec();
        await aui.pressKey('enter').exec();
        await aui.click().text().withText('askui screenshots').exec();
        await aui.click().text().withText('Open').exec();
    });
});
