import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  it('search for airbnb rooms', async () => {
    // Starting point is askui homepage: https://www.askui.com
    await aui.click().text('askui.com').exec();
    await aui.pressTwoKeys('control', 'A').exec();
    await aui.pressKey('delete').exec();
    await aui.type('https://www.airbnb.com/').exec();
    await aui.pressKey('enter').exec();

    await aui.click().text('Anywhere').exec();
    await aui.type('Paris').exec();
    await aui.click().text('Check in').exec();
    await aui.click().icon().withText('chevron right').exec();

    await aui.click().text('11').nearestTo().text('Exact dates').exec();
    await aui.click().text('20').nearestTo().text('Search').exec();

    await aui.click().text('Add guests').exec();
    await aui.click().icon('plus').nearestTo().text('Search').exec();
    await aui.click().text('Search').exec();
  });
});
