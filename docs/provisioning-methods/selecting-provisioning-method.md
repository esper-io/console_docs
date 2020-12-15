
# Selecting a provisioning method

Each of the four provisioning methods is best suited to different situations. Click the name of a method to get specific instructions. All provisioning methods require Internet connectivity.

## Android for Work (AFW) provisioning

The AfW method is best used for:
* Devices that have GMS (Google Mobile Services) support enabled
* Devices with a camera for QR code scanning
* Android 6.0 and above
* Factory reset of device required
 
 You can also use IMEI / Serial Numbers with the AfW provisioning method on some devices. This is useful when shipping a device directly to a customer so they can provision it themselves, or for devices without a camera. It also prevents users from repurposing the device by exploiting the ability to conduct a factory reset. To learn about how to provision devices using the IMEI or serial number method, please review IMEI/Serial Number Based Provisioning. View the Upload IMEI CSV for more information on how to load IMEIs and Serial Numbers into a Provisioning Template.
Go here for detailed instructions to provision a device using AfW.

## Six Tap QR Code Provisioning

6 Tap QR code provisioning is best used for:
 * Devices that have Google Mobile Services (GMS) support enabled
  * Devices with a camera for QR code scanning
  * Android 7.0 and above
  * Factory reset of device required
 
Beginning with Android 9 you can include credentials for the Wi-Fi network to be used for provisioning in your template. They’ll be included in the QR code, eliminating the need to enter them on the device to establish the required Internet connectivity.
Go here for detailed instructions to provision a device using 6 Tap QR Code.

## Device Provisioner

The Device Provisioner is a user-friendly provisioning tool by Esper that runs on Mac and Windows. You can conveniently use this to provision:

All Android Devices—GMS and most Non-GMS—running Android 4.4 or newer Devices with or without camera Multiple devices at once Android Studio AVDs for development and test purposes
You’ll need a USB cable to connect the device to the computer you’re using for provisioning. There are both Ethernet-based and Wi-Fi-based methods you can use if the device is on the same subnet as the computer running the Device Provisioner. Requires you on the device to turn on Developer Options and enable USB Debugging on the device.

The Device Provisioner does not support Google Single Sign-On (SSO). If you set up your Esper Console login using Google SSO, if you go to your account on the Esper Console, enter a password, and save it you will no longer be using Google SSO and can now sign in on the Device Provisioner and continue to use the login method on the Esper Console.

## Seamless Provisioning

Seamless provisioning is only for devices running Esper Enhanced Android:
IMEI/Serial Number method is use for bulk provisioning of devices Enables true no-touch provisioning using a predetermined Wi-Fi access point.
Contact Esper to find out more about Esper Enhanced Android and Seamless Provisioning.

## Need Help Choosing?

If you find choosing between these methods confusing, we have provided an easy way to find the best provisioning method: Fill the form on the right side. You’ll need to provide the following information:
* **Android version** — Check the Android version on your device by navigating to Settings > About > Android Version. Choose the correct version of Android for your device from the dropdown menu.
Esper Enhanced — Esper Enhanced Android is purpose-built Android OS, optimized for deployment under the Esper system. Esper provides Esper Enhanced devices on request from customers. Click YES, if your devices are Esper Enhanced.
* **GMS support** — Click YES, if your Android device supports Google Mobile Services. If the Play Store app is included on your device, your device is likely a GMS device.
* **Camera** — Choose YES, if your device has a working camera.
Then click Suggest Provisioning Method.

Based on your selections, the tool will suggest one of the four provisioning methods by highlighting it. Click on it to see the steps to provision your device. If you still have trouble figuring the provisioning process, Esper support will be happy to assist you. Send an email to support@esper.io.

:::tip
If a device stalls during provisioning, there’s a way to exit out and factory reset the device. On any provisioning screen showing the Esper logo, tap the logo seven times; this will bring up the Factory Reset button. Simply touch the button to start the reset process.
:::