import { aui } from './helper/jest.setup';

describe('jest with askui', () => {

  xit('Show interactively', async () => {
    await aui.scroll(0,-70).exec();
    await aui.annotateInteractively();
  });

  xit('Test block', async () => {
    // await aui.click().image().above().text().withText('MAJOR').exec();
    // await aui.click().button().contains().text().withText('Book tickets').exec();
    // await aui.click().button().contains().text().withText('2D').below().text().withText('TELUGU').exec();
    // await aui.scroll(0,-70).exec();
    // await aui.annotateInteractively();
    await aui.click().button().contains().text().colored('yellow green').exec();
    await aui.click().button().withText('Accept').exec();
  });

  xit('Should log into account', async () => {
    // await aui.annotateInteractively();
    await aui.click().button().contains().text().withText("01:35 PM").colored('gray').exec();
  });

  it('Should log into account', async () => {
    await aui.typeIn('https://in.bookmyshow.com/explore/home/hyderabad').url().exec();
    await aui.pressKey('enter').exec();
    await aui.click().text().withText('Gargi').exec();
    await aui.click().button().contains().text().withText('Book tickets').exec();
    try {
        await aui.click().button().contains().text().withText('2D').below().text().withText('TELUGU').exec();
    } 
    catch (error) {
      //
    }
    await aui.scroll(0,-10).exec();
    await aui.click().button().contains().text().withText("01:35 PM").colored('gray').exec();
    // await aui.click().button().contains().text().withText("PM").colored('gray').exec();
    await aui.click().button().withText('Accept').exec();
  });

});