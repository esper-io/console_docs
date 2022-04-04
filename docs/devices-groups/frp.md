# How To Get Google ID and Use FRP (Factory Reset Protection) Feature?

To get the google account id, please visit [this](https://developers.google.com/people/api/rest/v1/people/get?apix=true&apix_params=%7B%22resourceName%22%3A%22people%2Fme%22%2C%22personFields%22%3A%22metadata%22%7D) page.

![Esper Get Google Account Id](./images/frp/1-googleaccountid.png)

Click **Execute** button as shown in the image above.

Sign in to your email account or choose the account you wish to sign in with as shown below-

![Esper Get Google Account Id](./images/frp/2-googleaccountid.png)
Click **Allow** on this screen-

![Esper Get Google Account Id](./images/frp/3-googleaccountid.png)

A pop-up will appear in the lower right corner. Copy the id from this response.

:::tip
This "id" is the Google Account Id that you need to enter on the Esper Dashboard under the Factory Reset Protection button on the Policy page.
:::

![Esper Get Google Account Id](./images/frp/4-googleaccountid.png)

Entering this ID under the Factory Reset Toggle button on Policy (or Template) will authorize the user to unlock the device post factory reset.

As a result, an unauthorized user cannot simply factory reset your device and use it against your permission.

## On the Device

Once your device is factory reset, you will see the following screen on boot. Enter the email account corresponding to the Google Account ID entered in policy, and the device will get unlocked!

![Esper Get Google Account Id](./images/frp/5-factoryresetdevice.jpeg)

An unauthorized user cannot get through this security feature which protects the device against unauthorized factory reset.

If you forget your google account id or cannot use this feature and have more questions, send us an email at ([support@esper.io](mailto:support@esper.io)). 