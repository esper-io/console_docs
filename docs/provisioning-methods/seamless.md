# What is Esper’s Seamless Provisioning Method?

With Seamless Provisioning, Esper provides the code and guidance to integrate Esper software on first boot. It’s available to customers who reached out to our Sales and Technical teams for implementation. The Seamless Provisioning process involves integrating code from our GitHub repository into your Android image or the custom Esper Foundation build for your device. Seamless Provisioning also allows you to place the device’s serial or IMEI number into a Provisioning Template. Once the device connects to the internet, there’s no need to follow the standard Android enrollment steps. It will automatically enroll onto Esper based on the template you set. 

## On the Device

Once the IMEI or serial numbers are uploaded to the template, and you’ve booted the device, it will automatically be provisioned based on the template. 

If you have a Wi-Fi address, it can also be pre-loaded into your template under “Provisioning Wi-Fi”. 

If the Wi-Fi SSID cannot be found, or it’s not available before the devices are ready, an option to manually connect to Wi-Fi will appear. Connecting to Ethernet or Wi-Fi will continue the provisioning process, requiring no further input.

::: tip Note

If the device's serial/IMEI number has not been placed into a template, the device will need to be added to the template before it can be provisioned.  The device will show a graphic instructing you to provision the device. Please note, devices do not necessarily need a camera to be provisioned.  On the bottom-left you will see the serial number of the device. Ensure this is placed into your template and the device is connected to the internet. Then refresh the provisioning screen by pressing the home button in the navigation bar. The device will refresh and check the Esper Cloud for the template associated with its serial or IMEI number. The provisioning process will then continue. 

:::

Refer to [Return to IMEI (or Serial number) based Provisioning](../provisioning-template/upload-imei.md) for more information.

## On the Cloud Portal

See the IMEI provisioning steps if your device is running Esper Foundation for Android: 

In the Esper Console, create a provisioning template then edit the same template.

Go to 'Manage Devices’ to upload your IMEI/Serial numbers either individually or use the provided blank CSV file to load multiple numbers and bulk upload. 

Update and save the template.

Refer to [Creating a Template with IMEI](./imei-provisioning.md) for more information.

