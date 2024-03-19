import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  it('search for airbnb rooms', async () => {
    // Starting point is askui homepage: https://www.askui.com
    await aui.clickText('askui.com');
    await aui.pressTwoKeys('control', 'A').exec();
    await aui.pressKey('delete').exec();
    await aui.type('https://www.airbnb.com/').exec();
    await aui.pressKey('enter').exec();

    await aui.clickText('Anywhere');
    await aui.type('Paris').exec();
    await aui.clickText('Check in');
    await aui.click().icon().withText('chevron right').exec();

    await aui.click().text('11').nearestTo().text('Exact dates').exec();
    await aui.click().text('20').nearestTo().text('Search').exec();

    await aui.clickText('Add guests').exec();
    await aui.click().icon('plus').nearestTo().text('Search').exec();
    await aui.clickText('Search').exec();
  });
});
