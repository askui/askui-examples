import { aui } from './helper/jest.setup';

describe('request a feature in Github with askui', () => {
  it('should open askui Github repo', async () => {
    // Starting point is google.com
    // Focus is the in the search field
    await aui.type('https://github.com/askui/askui').exec();
    await aui.pressKey('enter').exec();
  });
  it('should open an issue', async () => {
    await aui.click()
      .text('Issues')
      .above()
      .text('Code')
      .exec();

    await aui.click()
      .button()
      .withText('New issue')
      .exec();

    await aui.click()
      .button()
      .withText('Get started')
      .below()
      .text('Create a report to help us improve')
      .exec();

    await aui.expect()
      .text('Issue: Feature request')
      .exists()
      .exec();

    await aui.typeIn('scrollUntil')
      .text('Title')
      .above()
      .button()
      .withText('write')
      .exec();

    await aui.click()
      .textfield()
      .below()
      .button()
      .withText('write')
      .exec();

    await aui.pressTwoKeys('control', 'A')
      .exec();

    await aui.pressKey('delete')
      .exec();
  });
  it('should fill the feature request', async () => {
    const requestTextLines: string[] = [
      '# ScrollUntil',
      ' ',
      '## Problem',
      ' ',
      'Whenever the current user wants to scroll to find an elements,'
      + 'they are forced to guess the scroll offset',
      ' ',
      '## Solution:',
      ' ',
      'A scrollUntil function, so that the user will only write ,'
      + 'until which element they want to scroll and not care about the scroll offset',
      ' ',
      '## Notes:',
      ' ',
      'please Make sure to do it as fast as possible, '
      + 'I want the user to enjoy using ME as testing solution',
      '** Feature Request, that was requested by the askui Nodejs package :crown: **',
    ];
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < requestTextLines.length; i += 1) {
      await aui.type(requestTextLines[i]).exec();
      await aui.pressKey('enter').exec();
    }
  });

  it('should submit new issue', async () => {
    await aui.expect()
      .text('scrollUntil')
      .exists()
      .exec();

    await aui.click()
      .button().withText('Submit new issue')
      .exec();
  });
});
