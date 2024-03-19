import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  xit('Show interactively', async () => {
    await aui.scroll(0, -70).exec();
    await aui.annotateInteractively();
  });

  xit('Test block', async () => {
    // await aui.click().image().above().text().withText('MAJOR').exec();
    // await aui.clickButton('Book tickets');
    // await aui.click().button().contains().text().withText('2D').below().text().withText('TELUGU').exec();
    // await aui.scroll(0,-70).exec();
    // await aui.annotateInteractively();
    await aui.clickButton('');
    await aui.clickButton('Accept');
  });

  xit('Should log into account', async () => {
    // await aui.annotateInteractively();
    await aui.clickButton("01:35 PM");
  });

  it('Should log into account', async () => {
    await aui.typeIn('https://in.bookmyshow.com/explore/home/hyderabad').textfield().exec();
    await aui.pressKey('enter').exec();
    await aui.clickText('Gargi');
    await aui.click().button().contains().text('Book tickets').exec();
    try {
        await aui.click().button().contains().text('2D').below().text('TELUGU').exec();
    } 
    catch (error) {
      // Do nothing
    }
    await aui.scroll(0,-10).exec();
    await aui.clickButton('01:35 PM');
    // await aui.click().button().contains().text('PM').colored('gray').exec();
    await aui.clickButton('Accept');
  });

});
