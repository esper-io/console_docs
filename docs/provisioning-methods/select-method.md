
## How to Select a Provisioning Method?

Each of the provisioning methods is best suited to different situations. Click on the name of a method to get specific instructions.

**Note**: All provisioning methods require Internet connectivity.

### Android for Work (AFW) Provisioning

The AFW method is best used for:

* Devices that have GMS(Google Mobile Services)support enabled

* Devices with a camera for QR code scanning

* Android 6.0 and above

* Factory reset of device required

You can also use IMEI / Serial Numbers with the AFW provisioning method on some devices. This is useful when shipping a device directly to a customer, so they can provision it themselves or for the devices without a camera. Provisioning devices using IMEI/Serial number also prevents users from repurposing the device by exploiting the ability to conduct a factory reset. To learn more about provisioning devices using the IMEI or serial number method, please review [IMEI/Serial Number Based Provisioning](./imei-provisioning.md). Please view the [Upload IMEI CSV](./docs/provisioning-template/upload-imei.md) for more information on loading IMEIs and Serial Numbers into a Provisioning Template.

### Six Tap QR Code Provisioning

6 Tap QR code provisioning is best used for:

* Devices that have Google Mobile Services (GMS) support enabled

* Devices with a camera for QR code scanning

* Android 7.0 and above

* Factory reset of device required

Beginning with Android 9, you can include credentials for the Wi-Fi network to be used for provisioning in your template. They’ll be included in the QR code, thus eliminating the need to enter them on the device to establish the required Internet connectivity.

### Device Provisioner

The Device Provisioner is a user-friendly provisioning tool by Esper that runs on Mac and Windows. You can conveniently use this to provision:

All Android Devices—GMS and most Non-GMS—running on Android 4.4 or newer, devices with or without a camera, multiple devices at once Android Studio AVDs for development and test purposes.

You’ll need a USB cable to connect the device to the computer you’re using for provisioning. Ethernet-based and Wi-Fi-based methods can be used if the device is on the same subnet as the computer running the Device Provisioner. You are required to turn on the Developer Options and enable USB Debugging on the device.

**Note**: The Device Provisioner does not support Google Single Sign-On (SSO).

If you set up your Esper Console login using Google SSO, then you need to go to your account on the Esper Console, enter and save your password. You will no longer be using Google SSO and can now sign-in on the Device Provisioner and continue to use the Esper Console login method.

### Seamless Provisioning

Seamless provisioning is only for devices running Esper Enhanced Android.

IMEI/Serial Number method is used for bulk provisioning of devices. It enables true no-touch provisioning using a predetermined Wi-Fi access point.

Contact Esper (mailto: support@esper.io) to find out more about Esper Enhanced Android and Seamless Provisioning.