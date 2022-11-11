import { UiControlClient, UiController } from 'askui';

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;
let auiAndroid: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  uiController = new UiController({
    /**
     * Select the display you want to run your tests on, display 0 is your main display;
     * ignore if you have only one display
     */
    display: 2,
    port: 7007
  });

  await uiController.start();

  aui = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    },
    uiControllerUrl:'http://127.0.0.1:7007'
  });

  auiAndroid = await UiControlClient.build({
    credentials: {
      workspaceId: '<your workspace id>',
      token: '<your access token>',
    },
    uiControllerUrl:'http://127.0.0.1:6769'
  });

  await aui.connect();
  await auiAndroid.connect();
});

afterAll(async () => {
  await uiController.stop();

  aui.close();
  auiAndroid.close();
});

export { aui, auiAndroid };
