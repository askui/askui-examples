import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should find a cat image and save it', async () => {

    // Make sure the browser window has focus
    await aui.mouseLeftClick().exec();

    // Open a new tab with keyboard shortcut
    // MacOS: command + t
    // Windows: control + T
    // Linux: control + t
    await aui
      .pressTwoKeys('command', 't')
      .exec();

    // type google.com into browser bar
    await aui
      .typeIn('google.com')
      .text()
      .withText('Search Google or type a URL')
      .exec();

    // Hit enter key
    await aui
      .pressKey('enter')
      .exec();

    // Click the Images-text to the right of Gmail
    await aui
      .click()
      .text().withTextRegex("Image*")
      .rightOf()
      .text().withText("Gmail")
      .exec();

    // Type in cat into search field
    // Notice: withText does not have to be 100% equal
    await aui
      .typeIn("cat")
      .textfield()
      .below()
      .logo().withText("G00g.e")
      .exec();

    await aui
      .pressKey('enter')
      .exec();

    // HINT
    //     withText might need to be changed depending
    //     on your search results!
    await aui
      .moveMouseTo()
      .image()
      .above()
      .text()
      .withText("pet guru Yuki Hattori explaiinICats")
      .exec();

    // Save the image with right click
    await aui
      .mouseRightClick()
      .exec()

    // Find the right dialog entry
    await aui
      .click()
      .text()
      .withText('save image as')
      .exec();

    // Save it
    // If it does not work because the button is not found
    // Remove the '.button()'
    await aui
      .click()
      .button()
      .withText("Save")
      .exec();
  });
});
