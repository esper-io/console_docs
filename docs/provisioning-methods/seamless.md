# Using Esper Seamless Provisioning

Esper’s Seamless Provisioning provides the code and guidance to integrate Esper software on first boot. It’s available to customers who reached out to our Sales and Technical teams for implementation. 

The Seamless Provisioning process involves integrating Esper code into your Android image or the custom Esper Foundation build for your device. Seamless Provisioning also allows you to place the device’s serial or IMEI number into a Provisioning Template. Once the device connects to the internet, there’s no need to follow the standard Android enrollment steps. It will automatically enroll onto Esper based on the template you set. 

**Requirements:** 
Reach out to our Sales or Technical Team for details on implementation

**In this article:**
- Installing on a Device 
- Installing from the Cloud Portal 

## Installing on a Device 

Once the serial or IMEI numbers are uploaded to the Template and you’ve booted the device, it will be automatically provisioned based on the Template. 

If you’d like to pre-configure a particular WiFi SSID, you can do so through the “Provisioning Wi-Fi” section of your Template.

If the Wi-Fi SSID cannot be found or it’s not available before the devices are ready, then an option to manually connect to Wi-Fi will appear. Connecting to Ethernet or Wi-Fi will continue the provisioning process, requiring no further input.

::: tip Note

The device’s serial or IMEI number will need to be added to a Template before the device can be provisioned.  The device will show an image indicating that you can provision the device. Please note: devices do not necessarily need a camera to be provisioned.  On the bottom-left, you will see the serial number of the device. Ensure this serial number is added to your Template and that the device is connected to the internet. Then, refresh the provisioning screen by pressing the Home button in the navigation bar. The device will refresh and check the Esper Cloud for the Template associated with its serial or IMEI number. The provisioning process will then continue. 

:::

Refer to [Return to IMEI (or Serial number) based Provisioning](../provisioning-template/upload-imei.md) for more information.

## Installing from the Cloud Portal 

See the IMEI provisioning steps if your device is running Esper Foundation for Android.

1. In the Esper Console, create and edit a Provisioning Template.

2. Go to “Manage Devices” to upload your serial/IMEI numbers. You can do so either individually or in bulk using the provided blank CSV file. 

3. Update and save the Template.

Refer to [Creating a Template with IMEI](./imei-provisioning.md) for more information.
