## How to Create a New Policy?

  

To create a new Compliance Policy, click New Policy. This will bring up a screen in which you can set all the configurations of the new Compliance Policy. The layout is the same as when you [define a Compliance Policy in a Provisioning Template](../provisioning-template/createtemplate.md),  but uniquely includes the name and description.

  

![](./images/createpolicy/1-newPolicybutton.png)

  

### Enter a Policy Name and Description

Enter a unique name for your new compliance policy in the Policy Name field; enter an optional description in the Description field.

![](./images/createpolicy/2-namePolicy.png)

  

### Set Lock Screen Password Rules via Policy

  

The Lock screen password rule specifies the conditions for the device unlock password, with the default being None.

![](./images/createpolicy/3-password.png)

If you choose alphabetic or alphanumeric, you must set a minimum password length of at least 4 characters and up to 25—use the small up/down arrows to set your required password length.

![](./images/createpolicy/4-lengthPassowrd.png)

-   Alphabetic: Restricts acceptable password to only upper and lowercase alphabetic characters (A to Z, and a to z).
    
-   Alphanumeric: Expands acceptable passwords to include numbers, and special characters in addition to alphabetic characters.
    

**Note**: There is no password required to unlock the device.

The password for a device will be set up during the initial setup of the device by the user.

The lock screen must be on in order to set Lock screen password rules. If you select either Alphabetic or Alphanumeric password rules, then the lock screen will be set to On by Esper if it is currently Off.

  

### Set Default App Permission Rules via Policy

  

Default application permissions determine enforcement of the runtime-permission rule across all the apps on a device including Enterprise applications installed by Esper, in-ROM applications that are enabled, as well as any installed via Managed Google Play. This ensures you can control the user experience on the device regarding how run-time permissions are granted.

![](./images/createpolicy/5-AppPermission.png)

There are three possible settings:

-   Allow Automatically: This rule will grant all the permissions any application requests without showing a prompt to the user. This is the typical setting used for single-purpose solutions using a fully trusted, customer-supplied application.
    
-   Ask User: This keeps the default behavior intact with regards to permission management. All applications on the device will show a prompt to the user to request permission. For example, by choosing this option then every application will ask the user each time before accessing a device module with a message such as “Allow application X to access Gallery? Allow/Deny”. This may be unsuitable for some solutions, especially Kiosk-based applications. It can be useful for certain unusual situations dealing with App permissions— contact us directly to find out more.
    
-   Deny Automatically: This rule will deny any permission request from any application on the device. No notification will be shown to the user. You can [grant permissions to applications individually](../apps/control.md) from the Esper Console.
    

### Set System update Rules via Policy

  

The System updates option allows you to enforce a system update policy on the device when a system update is available via the device’s over-the-air (OTA) update service.

![](./images/createpolicy/6-updaterules.png)

There are four possible settings:

-   Update automatically: This option will install any over-the-air (OTA) updates automatically as soon as they become available without user interaction, and reboot the devices when necessary.
    
-   Postpone installation: This option postpones installation of an OTA update for 30 days. After 30 days, the system will prompt the device user to install the update. Subsequent updates will also follow the same 30-day postponement. This is ideal when you need time to validate your solution against new system updates before they are installed.
    
-   Windowed Installation: This option allows you to define a window of time during which the OTA update will be installed without user interaction. This option is ideal for devices with a known down period. A drop-down will appear to enable you to set the start and end times for the maintenance window.
    
-   Disable Update: This option allows you to disable updates on the device. It is available for a limited set of OTA services that support this feature. If the device does not support disabling updates, it will default to Postpone installation. Before setting this option please contact Esper directly to make sure the devices you plan to provision support this configuration.
    

### Configure Esper Settings Application via Policy

Esper offers a custom settings application that gives device users access to a subset of the available Android settings when servicing a device. The Esper settings application is intended for use by technicians servicing a device locally.

![](./images/createpolicy/7-espersettings.png)

Esper setting application has two modes:

1.  User mode
    
2.  Admin mode
    

![](./images/createpolicy/8-typeofuser.png)

This application offers a reduced number of settings:

-   Wi-Fi: Change the Wi-Fi access point used by the device.
    
-   Torch: Turn on the Torch (AKA “flashlight”) if the device has a camera flash LED.
    
-   Auto-Rotation: Turn auto-rotation on or off.
    
-   Factory Reset: Perform a factory reset of the device, regardless of the Compliance Policy applied.
    
-   Kiosk App: Change the app that runs in kiosk mode. The device user can choose any installed app on the device to act as the kiosk app, with the Esper Console kept in sync on the configuration stats.
    
-   Esper Branding: Turn off the Esper logo on the Home screen.
    
-   About: Supplies information regarding the endpoint name the device is enrolled in, in case the customer has access to multiple Esper endpoints.
    

Users have the ability to add or remove settings in both modes.

![](./images/createpolicy/9-userability.png)

Admin mode is protected by a password to prevent unauthorized access. This password controls access to the hidden dock available in kiosk mode, the Esper Settings app, and serves as the PIN used for IMEI-based provisioning via AfW. The password is alphanumeric and can be from 1 to 10 characters.

The default password is 1234. It is possible to set up a template without a password for these features, or just leave the default password; Esper strongly recommends setting up a more complex password for stronger security. The same password will be set for all devices provisioned using the template

*TIP*: If your device is set up in Kiosk mode, the dock will be accessible even if you choose either no settings application or the Android settings application as part of your applied Compliance Policy. That means you should set an appropriate password for the Dock & Esper Settings application if you plan to deploy your devices in Kiosk mode.

### Manage Android Settings Application via Policy

  

This setting will display the icon for the default Android settings application on the Home screen of the device. Clicking this icon will take the user to the default Android settings. Depending on the other configurations set by the Compliance Policy, some options may be disabled to the user. Just by switching On/Off via console users can control it on the device.

![](./images/createpolicy/10-androidappsetting.png)

  

### Google Account Restriction Configuration via Policy

  

This setting enables you to restrict the number of Google accounts that can be added on the device and used with Google apps like Gmail, Google Play Store, and YouTube. By default, any number of accounts can be added to a specific device; this setting restricts this number. For example, if you set this setting to two, only two accounts will be permitted on the device, further addition (or deletion) of accounts will not be possible unless a different Compliance policy is reapplied.

![](./images/createpolicy/11-googlerestrictions.png)

**Note**: If you don’t check the Google account restrictions box and plan to provision your device in Multi-application mode, we recommend disabling Google Play Store to prevent the installation of unapproved applications.

*TIP*: The Google Account Restriction feature is applicable only to Google Mobile Services (GMS) Android devices. If you include the Android Settings App and wish to prevent any Google accounts from being added, set the Number of accounts to 0.

### Protect Device from Hard/Soft Factory Reset via Policy

Factory Reset Protection (FRP) places an auto-lock on a GMS-certified device if a user factory resets it with soft or hard keys. FRP will auto-lock the device and keep it locked until a pre-authorized Google account ID is entered. Additional information about getting your Google Account ID can be found in the [here](../apps/googlepalysignup.md).

When you turn on the FRP button in the provisioning template, you’ll need to pick a Google account to authorize future device unlocks. Your chosen Google account ID will reverse any future auto-lock events triggered by user factory resets for all devices provisioned with this template.

![](./images/createpolicy/12-factoryreset.png)

Note: Factory reset protection is only available on GMS devices running Android 5.1 and above.

### Lock Screen Configuration via Policy

The lock screen template setting enables the default lock screen to be displayed whenever a device screen times out, according to the default timeout specified in the Settings section. If this is on, the device user will have the option to set the password. The users must enter a password that conforms with the rules.


### Safe Mode Login Configuration via Policy

When Safe-Mode login is on, users will be able to boot to Safe Mode on the device; when Safe-Mode login is off, users will be unable to boot to Safe Mode.


### Factory Reset Configuration Control for Android Settings via Policy

Factory Reset controls if users can perform a factory reset using the Android Settings App. When Factory Reset is off, the user will not be able to perform a factory reset on the device. This does not prevent a hard-key factory reset, see [Factory Reset Protection](../provisioning-methods/factory-reset.md) to prevent hard-key factory reset.


### Notification Bar Configuration via Policy

If you want device users to be able to swipe down to see the notification bar, set Notification Bar to on. If you don’t, set it off. You will typically want the notification bar turned off for Android kiosk mode. But, you may choose to leave this setting on if you will request bug report submissions from device users. User bug report requests from Esper generally must be sent via the notification bar.

### Screenshot Configuration via Policy

If you want device users to be able to take screenshots, set Screenshot to on. If you don’t, set it off. Turning this setting off blocks users from taking a screenshot using a hard key sequence or available softkeys.

### Block External Hardware via USB Connectivity Configuration via Policy

USB connectivity allows users to connect USB devices, such as flash drives, digital cameras, mice, or keyboards, to the device. If you want device users to be able to connect other hardware to the device, set USB Connectivity to on. If you don’t, set it off.

  

### SMS Configuration via Policy

SMS controls sending and receiving of SMS, or text, messages. If SMS is turned off, the device will not send or receive text messages from any SMS application. Set SMS to on if you wish to enable sending and receiving of text messages.

### Outgoing Calls Configuration via Policy

If you want device users to be able to make outgoing calls, set Outgoing Calls to on. If you don’t, set it off.

### Camera Access Configuration via Policy

If you want device users to be able to use the camera, set Camera Access to on. If you don’t, set it off.

**Note:** Your application can still access the camera if this setting is off.

### NFC Configuration in Policy

If you want device users to use near-field communication (NFC) on their devices when supported, set NFC to on; if you don’t, set it to off. If any of your applications require NFC, make sure this setting is on.

### Google Play Store Configuration via Policy

If you want device users to have access to your Managed Google Play Store, set the Google Play Store setting to On; if you don’t, set it to Off.

You’ll still be able to install any approved Google Play Store applications from Esper on if Play Store is turned off. This only applies to GMS devices, as AOSP devices do not include Google Play Store support.

### USB Tethering Configuration via Policy

USB tethering specifies if the user can share a mobile connection to another device such as a laptop. If you’d like device users to share a mobile connection with other devices, set the USB tethering to On; if you don’t, set it to Off.

### Date and Time Configuration via Policy

Edit Date and Time If you’d like device users to be able to set device date and time, set the Edit Date and Time setting to On; if you don’t set it to Off.

### Block Application Uninstall Locally on the Device via Policy

Setting Application Uninstall to On will block application uninstalls locally on the device and via Esper's cloud Console. Set it to off if you need to uninstall applications remotely.

**Note:** You can update your application installed on the device using Esper if Application Uninstall is set to ON.

### USB File Transfer Configuration via Policy

If you’d like device users to be able to transfer files from the device using a USB cable or flash drive, set USB file transfer to On; if you don’t, set it to Off.

### Google Assistant Configuration via Policy

If you’d like device users to be able to use voice command via Google Assistant on supported devices, set Google Assistant to On; if you don’t, set it to Off.

**Note:** On some devices, this setting may need to be on if you wish to have Google Play Store show up on the device.

### Local Application Install Configuration via Policy

This feature allows the installation of applications from unknown sources on the device. To enable this on the device, the user needs to follow these instructions. **Settings** >**Apps** and **Notifications** > **Special App Permissions**> Install Unknown Applications and choose the route they wish to install the applications from.

For example, if the device user chooses Chrome, they will be able to download and install applications from the Chrome browser on the device. If turned off, the device user will not be allowed to install applications from any unknown sources.

![](./images/createpolicy/13-radiosettings.png)

### Allow List Configuration for Incoming and Outgoing Calls via Policy

Selecting allow all incoming and outgoing calls button will not block any caller. 

![](./images/createpolicy/14-CallPolicy.png)

Selecting the checkbox next to Restrict outgoing/incoming calls using a customized dialer opens up two checkboxes:

-   Restrict incoming calls to uploaded contacts only
    
-   Restrict outgoing calls to uploaded contacts only
    

![](./images/createpolicy/15-restrictcall.png)

You can add phone numbers or upload a CSV file of contacts to add to the allowed list only.

![](./images/createpolicy/16-csv.png)

  
  

**Note:** All numbers must be preceded by +country code (for example, +1 for the US). All numbers must be separated by a comma.

### ADB Configuration in the Policy

Android Debug Bridge (ADB) is a command-line tool that provides a Unix shell to communicate with an Android device. If the ADB option is checked in the device’s Compliance Policy, you may turn on ADB via Devices Device > Settings for a configurable time period. If the ADB option is unchecked in the Compliance Policy, ADB cannot be turned on from Settings.

![](./images/createpolicy/17-ABD.png)

Opening the device ADB port is required on most stock Android devices before the Esper agent can securely connect to the Esper Cloud for ADB debugging. Learn more about using ADB with Esper [here](../devices-groups/device-settings.md).

Note: Turning on ADB from the device is never allowed on any Esper-provisioned device.

### Resetting to Default Settings

You may reset these values to default at any time by clicking the Reset to Default button at the bottom of this panel. 

![](./images/createpolicy/18-Default.png)