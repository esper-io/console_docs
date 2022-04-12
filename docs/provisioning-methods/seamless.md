## What is Esper’s Seamless Provisioning Method?

This method of provisioning can only be used if the customer has chosen to get devices from Esper. Esper provides the option to recommend hardware devices baked with Esper optimized Android OS, known as Esper Foundation for Android. These devices are the easiest to provision as all information for provisioning is already baked into the OS of the device. All you need to do is boot the device.

### On the Cloud Portal

Here are IMEI provisioning steps if your device is running Esper Foundation for Android-

1.  In the Esper Console, create a provisioning template then edit the same template.
    
2.  Go to 'Manage Devices’ to upload the required IMEI CSV file or by individual IMEI or Serial Numbers. Update the template.
    

If you need help, please refer to [Creating a Template with IMEI](./imei-provisioning.md).

### On the Device

Ideally, you should see true zero-touch provisioning on your devices for which the IMEI or serial numbers was uploaded on the template. You should be able to boot the device and watch it get provisioned automatically by Esper according to your provisioning template. If the customer has known Wi-Fi in the deployment field, it can be baked in the Esper Foundation for Android OS. If the Wi-Fi SSID cannot be found an option to manually connect to Wi-Fi will appear. Connecting to a network/WiFi will then continue the provisioning process requiring no further input from the user.

If you ned help, please refer to [Return to IMEI (or Serial number) based Provisioning](../provisioning-template/upload-imei.md).