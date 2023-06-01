import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  it('search for airbnb rooms', async () => {
    // Starting point is askui homepage: https://www.askui.com
    await aui.click().text().containsText("askui.com").exec();
    await aui.pressTwoKeys('control', 'A').exec();
    await aui.pressKey('delete').exec();
    await aui.type('https://www.airbnb.com/').exec();
    await aui.pressKey('enter').exec();

    await aui.click().text().withText("Anywhere").exec();
    await aui.type('Paris').exec();
    await aui.click().text().withText("Check in").exec()
    await aui.click().icon().withText("chevron right").exec();

    await aui.click().text().withText("11").nearestTo().text().withText("Exact dates").exec();
    await aui.click().text().withText("20").nearestTo().text().withText("Search").exec();

    await aui.click().text().withText("Add guests").exec();
    await aui.click().icon().withText("plus").nearestTo().text().withText("Search").exec();
    await aui.click().text().withText("Search").exec();
  });
});
