## How to Manage the Settings For a Group of Devices?

  

The Settings tab enables you to change the settings on all the devices in a group. This includes taking actions like rebooting, locking the screens, and requesting a heartbeat.

  

![settings](./images/groupsettings/1_DeviceGroup_Manage_Settings_QuickActions.png)

  

:::tip
Any actions initiated to a group are immediate, they cannot queued. Devices that are offline (inactive) will not receive the command for these actions. Esper employs a combination of pop downs and slide-outs to give you both status and summary of an action taken with a group of devices.
:::

  

### Reboot a Group of Devices From the Console

  

When you click on **Reboot**, you will see a pop-up to confirm your choice. When you click on the **Yes** button, the Esper Console will send the command to reboot all the active devices in the group. Clicking on the **No** button will take you back to the group settings page. A pop up will show the progress of the action, indicating the number of successful and unsuccessful attempts.

![reboot](./images/groupsettings/2_DeviceGroup_Manage_Settings_QuickActions_Reboot.png)

  

Click **See Details** to see the status of each of the devices in the group.

  

![details](./images/groupsettings/3_DeviceGroup_Manage_Settings_QuickActions_Reboot_Activity_feed.png)

  

Once the set of reboot commands are sent, a success toast notification will appear in the bottom left corner of the screen.

###  Screen Lock a Group of Devices From the Console

  

When you click on the **Screen Lock** button, you will see a pop up to confirm your choice. When you click on the **No** button, you will be taken back to the group settings screen. When you click on the **Yes** button, the Esper Console will send the command to lock the screen of all the active devices in the group. A pop up will show the progress of the action, indicating the number of successful and unsuccessful attempts. 

  

![lock screen](./images/groupsettings/4_DeviceGroup_Manage_Settings_QuickActions_Screenlock.png)

  
  

Click **See Details** to see the status of each of the devices in the group.

  

![details](./images/groupsettings/5_DeviceGroup_Manage_Settings_QuickActions_Screenlock_Activity_feed.png)

  

Once the set of screen lock commands are sent, a success toast will appear in the bottom left-hand corner of the screen.

###  Ping a Group of Devices from the Console

  

When you click the Heart Beat button, a pop-up will be shown to confirm your choice. When you choose **Yes**, the Esper Console will attempt to ping all the devices in the group. A pop up will show the progress of the action, indicating the number of successful and unsuccessful attempts. If you click the **No** button, you will be taken back to the group setting screen.

  

![ping](./images/groupsettings/6_DeviceGroup_Manage_Settings_QuickActions_Heartbeat.png)

  

Click **See Details** and a slide-out will appear.

![details](./images/groupsettings/7_DeviceGroup_Manage_Settings_QuickActions_Heartbeat_Activity_feed.png)


  

Once the set of ping commands are sent, a success toast will appear in the bottom left-hand corner of the screen.

  

###  Remove/Factory Reset a Group of Devices From the Console


You can remove the devices from the Esper Dashboard. When you click Remove/Factory Reset, the Esper Console will send a command to all the online devices in the group to Factory Reset. The factory reset option will always be enabled.

![factory reset](./images/groupsettings/8_DeviceGroup_Manage_Settings_QuickActions_Remove_factoryreset.png)

  

A pop up will show the progress of the action, indicating the number of successful and unsuccessful attempts.

  

![success](./images/groupsettings/9_DeviceGroup_Manage_Settings_QuickActions_Remove_factoryreset_Status.png)


  

Click **See details** and a slide-out will appear displaying the details of the action.

  


![details](./images/groupsettings/10_DeviceGroup_Manage_Settings_QuickActions_Remove_factoryreset_Activity_feed.png)

  

### Push New Access Point to a Group of Devices From the Console

  

When you push a Wi-Fi access point to a group, you’ll be asked to enter the details of the Wi-Fi access point.

![accesspoint](./images/groupsettings/11_DeviceGroup_Manage_Settings_QuickActions_Wifi_access_points.png)

  
  

When you click **Save** all the active devices will receive the command to connect to the new Wi-Fi access point. A pop-up will show the progress of the action, indicating the number of successful and unsuccessful attempts. Clicking on the **Cancel** button will take you back to the group setting page.

  

###  Broadcasting a Message to All the Device in a Group

Broadcast message allows you to send a message to all the devices in the selected group. You can access this feature from the ‘Device & Group’ screen > Click on the eye icon (more information).

Step 1: Click on the **Broadcast Message** button.

  

![broadcast messgae](./images/groupsettings/12_DeviceGroup_Manage_Settings_QuickActions_Broadcast_Message_button.png)

  

Step 2: Enter the subject and the body of the message. You can include an optional link. Enter the end date and time for the message. 

For devices at a different location, you can reference the date and time from the device or the Console. The Console will not send the message after the specified date and time.

![message details](./images/groupsettings/13_DeviceGroup_Manage_Settings_QuickActions_Broadcast_Message__new_message.png)

  

:::tip
The message is sent to the online devices only. The Console will try to send the message to offline devices till the selected end date and time.
:::
  

When you select the ‘Schedule Delivery’ checkbox, the message will be sent on the specified date and time. Here, you need to enter the start date and the time. You can choose the date and time to correspond with the Console time zone or the device time zone.

![schedule delivery](./images/groupsettings/14_DeviceGroup_Manage_Settings_QuickActions_Broadcast_Message__new_message_schedule_delivery.png)

  
 ###  Device Mode

 Device Mode allows you to change the mode of all the devices in the group. You can switch between the Kiosk Mode and Multi App Mode at the group level. 

 ![Device mode](./images/groupsettings/14.1_DeviceMode.png)

When you click 'Switch to Kiosk Mode,' you will choose an application for the Kiosk. You can queue the offline devices to switch mode once the devices are online. 

![Device mode](./images/groupsettings/14.2_KioskMode.png)

When you click 'Switch to Multi Application,' you can see the number of online and offline devices.  You can queue the offline devices to switch mode once the devices are online. 

![Device mode](./images/groupsettings/14.3_MultiMode.png)


### Changing the Display Settings for a Group of Devices from the Console

  

In this section you can adjust the display settings of the device.

  

![display](./images/groupsettings/15_DeviceGroup_Manage_Settings_Display.png)

  

Use the Brightness slider to increase or decrease the brightness of the screen.

Use the Screen Orientation buttons to select your preferred screen orientation- auto, landscape, or portrait.

Select a time from the screen timeout dropdown menu.

Click **Apply Changes** to push the chnages to the group, or **Cancel** if you wish to keep the current settings.

![display](./images/groupsettings/16_DeviceGroup_Manage_Settings_Display_Apply_changes.png)

A pop-up will show the progress of the actions, indicating the number of successful and unsuccessful attempts. 

![brightness](./images/groupsettings/17_DeviceGroup_Manage_Settings_Display_Apply_changes_Status.png)

Click the **See Details** links and a slide-out will appear specific to that setting.

  

![details](./images/groupsettings/18_DeviceGroup_Manage_Settings_Display_Apply_changes_Status_See_details.png)

  

A toast message will appear in the bottom left section of the screen indicating success/failure for executing the command to the group of devices.

  

### Changing the Wallpaper for a Group of Devices from the Console

  

Use this section to change or add wallpaper to your device. You can set the wallpaper for Portrait, Landscape, and Lock Screen.

  

![wallpaper](./images/groupsettings/19_DeviceGroup_Manage_Settings_Branding.png)

  

###  Changing the Sound Settings For a Group of Devices From the Console

This section lets you adjust the sound settings of the devices in the group. Use the sliders to adjust the:

-   Alarm volume
-   Notification volume
-   Music volume
-   Ring volume
    

![sound](./images/groupsettings/20_DeviceGroup_Manage_Settings_Sound.png)

  

Click **Apply Changes** to push the chnages to the device, or **Cancel** if you wish to keep the current settings.

  

![apply changes](./images/groupsettings/21-sound-settings.png)

  

A pop-down will show the progress indicating the number of successful and unsuccessful attempts. 

Click **See Details** and slide-out with details will be displayed.

![details](./images/groupsettings/22-Settings_Sound_See_details.png)

  
  

After applying changes, toast messages will appear in the bottom left corner of the screen indicating success/ failure. 

  
  

###  Control WiFi Access Points for a Group of Devices From the Console

  

Wi-Fi enables you to turn Wi-Fi connectivity On or Off for all devices in the group.

  

![wifi access point](./images/groupsettings/23_DeviceGroup_Manage_Settings_Wi_fi.png)

  
  

This can be done if the device has an alternative connection available such as a cellular network via SIM card or Ethernet. You will need to confirm turning it Off before this action is pushed to the group.

  

![confirm](./images/groupsettings/24_DeviceGroup_Manage_Settings_Wi_fi_Confirmation.png)

  

A pop-down will show the progress of the action or actions, indicating the number of successful and unsuccessful attempts.

  

![details](./images/groupsettings/25_DeviceGroup_Manage_Settings_Wi_fi_See_Details.png)

  

Click **See details** and a slide-out will appear.

  

![details](./images/groupsettings/26_DeviceGroup_Manage_Settings_Wi_fi_See_Details_Status.png)

  

Once the set of Wi-Fi commands are sent, a success toast message will appear at the bottom left corner of the screen.

  

:::tip
Esper will turn Wi-Fi On after 10 seconds if no other internet connection is available so Esper can maintain communication with the devices.
:::

###  Turning GPS ON/OFF for a Group of Devices from the Console

  

The enables you to adjust the location settings for all the devices in the group. Choose a location mode from the drop-down, and a command will immediately be sent to the devices in the group.

  

![GPS](./images/groupsettings/27_DeviceGroup_Manage_Settings_Location.png)

  

A pop-down will show the progress of the action, indicating the number of successful and unsuccessful attempts.

  

![device status](./images/groupsettings/28_DeviceGroup_Manage_Settings_Location_See_details.png)

  

Click **See Details** and a slide-out will appear.

![details](./images/groupsettings/29_DeviceGroup_Manage_Settings_Location_See_details_status.png)

  
  

Once the set of location commands are sent, a success toast message will appear at the bottom left corner of the screen.

  

###  Controlling Bluetooth for a Group of Devices from the Console

  

Bluetooth enables you to turn Bluetooth connectivity On or Off for all the devices in the group. Once the option is selected, the command will be fired to all the devices.

  

![bluetooth](./images/groupsettings/30_DeviceGroup_Manage_Settings_Bluetooth.png)

  

A pop-down will show the progress of the action, indicating the number of successful and unsuccessful attempts.

  

![device details](./images/groupsettings/31_DeviceGroup_Manage_Settings_Bluetooth_see_details.png)

  

Click **See details** and a slide out will appear.

  

![details](./images/groupsettings/32_DeviceGroup_Manage_Settings_Bluetooth_see_details_status.png)

  

Once the set of Bluetooth commands are sent, a success toast message will appear at the bottom left corner of the screen.

  

###  Allow ADB for a Group of Devices From the Console

  

ADB Access enables you to turn Android Debug Bridge on or Off for all the devices in the group.

  

![ADB](./images/groupsettings/33_DeviceGroup_Manage_Settings_ADB_access.png)

  

Clicking **ON** will then open a drop-down menu to select the desired session duration. Click **Apply Changes** to push the command to the devices, or **Cancel** if you wish to keep the current settings. 

A pop-down will show the progress of the action, indicating the number of successful and unsuccessful attempts.

  

![deuration of ADB](./images/groupsettings/34_DeviceGroup_Manage_Settings_ADB_access_Set_time.png)

  

Click **See details** and a slide-out will appear.

  

![details](./images/groupsettings/35_DeviceGroup_Manage_Settings_ADB_access_Status.png)

  

Once the set of commands are sent, a success toast message will appear at the bottom left corner of the screen.