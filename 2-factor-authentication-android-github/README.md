# 2 Factor Authentication with GitHub Example

This tutorial will guide you through the 2 Factor authentication workflow on Github.
It shows you how you can automate a Cross-Application + Cross-Device workflow. 

## Prerequisites

> * External computer with a browser
> * External Android device connected with your Android Development Bridge (ADB)
> * External Android device with LastPass Authenticator App
> * Enable the permission to take screenshots in the Authenticator App
> * Github Account with 2 Factor Authentication enabled with the Authenticator App
> * The English language configured and set on your computer devices
> * Start the ui controller for the desktop with the port `7007` and the android device with the port `6769`.

## Disclaimer and Warning

:warning: For demo purposes only!!! This is inherently unsafe as the credentials for your GitHub Account are stored as plain text in the test case!

## Setup

### File _my-first-askui-test-suite.ts_

. Replace `<Username>` with your GitHub username
. Replace `<Password>` with your GitHub password

### File _helper/jest.stup.ts_

Enter your `workspace id` and your `access token` in **both** `UiControlClient`.

### Connect One UiController Manually to the Android Device

TODO Configuration on how to do that will come soon.