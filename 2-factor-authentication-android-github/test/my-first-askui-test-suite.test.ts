import { aui, auiAndroid } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should click on text', async () => {

    await aui.mouseLeftClick().exec();
    await aui.clickText('Sign in');
    await aui
      .typeIn('<Username>')
      .textfield()
      .below()
      .text()
      .withText('Username or email address')
      .exec();

    await aui
      .typeIn('<Password>')
      .textfield()
      .below()
      .text()
      .withText('Password')
      .exec();

    await aui.pressKeys(['tab', 'enter']).exec();

    const codeElements = 
      await auiAndroid
       .get()
       .text()
       .below()
       .text()
       .withText('GitHub')
       .exec();

    // Using code[0] here is ok
    // It is the first element based on euclidean distance
    // We have to replace the newline -> Format requirement!
    const code = codeElements[0].text.replace(' ', '');
    await aui
      .typeIn(code)
      .textfield()
      .above()
      .button()
      .withText('Verify')
      .exec();
  });
});
