import { aui } from './helper/jest.setup';

describe('request a feature in Github with askui', () => {
  it('annotate for screencast', async () => {

    // Drag and drop
    // https://www.globalsqa.com/demo-site/draganddrop/
    await aui.moveMouseTo().image().below().text().withText('High Tatras 2').exec();

    await aui.mouseLeftClick().exec();
    await aui.mouseToggleDown().exec();
    await aui.moveMouseRelativelyTo(50, 200).text().withText('Trash').exec();
    await aui.mouseToggleUp().exec();
  });
});