## How to Manage and Control the Settings for a Single Device?

  

A sub-set of the settings available in blueprint can be separately managed and controlled for each device at any time. 

Navigate to the devcie view and click in the device Id for the device you want to change settings. Click Settings tab on the device details screen.

![setting menu](./images/deviceSettings/Settingmenu.png)

The Settings section lets you determine levels for some of the device settings. These include screen brightness, screen orientation, alarm volume, and screen timeout. 

:::tip
If the Android Settings App is enabled for a device in Multi-application mode, the device user can access these settings and change them on the device.
:::

  
 Following are some of the quick settings available:

  

### Quick Actions

 Quick actions allow the user to perform some troubleshooting commands and some quick modes.

#### Device Lockdown

 Click the **Lock Device** button triggers a complete lockdown of the device. This is useful to prevent unauthorized use or relocation.

A custom message text box appears where you can enter the text you want the device user to see.

 After a device is locked, the button will change to Unlock to enable you to unlock the device from the Console.

 
#### Reboot

 When you click **Reboot Device**, the Esper Console will send the command to reboot a device. You can reboot your device if you are having trouble communicating with the device.


#### Device Mode

 The Device mode function enables you to switch a device between Multi-Application mode and kiosk mode. When a device is in Multi-Application mode, the user can see and use all the approved apps. When a device is in Kiosk mode, the device acts as a kiosk, and users can only use the kiosk app. 
 
 Oftentimes, onboarding kiosk-mode devices with additional applications proves to be useful for setup and diagnostics at customer sites. Device mode makes it easy to switch out of Kiosk mode to make those applications available for use by a field technician or customer, and then switch back into Kiosk mode when done.

 
To change a device to Kiosk mode, click **Switch to Kiosk Mode**. On the pop-up, click the radio button for the mode you prefer. If you click the Kiosk Mode radio button, you will also need to choose the application that will be pinned to the device’s start screen as its primary application. Select it from the searchable 'Select Kiosk App' dropdown, and then click **Save**.

:::tip
In some situations, a device provisioned in Kiosk mode will be unable to connect to the Internet, for example, a Wi-Fi access point has changed credentials. In these cases, the Esper Dock can be used to open the Esper Settings application giving access to Wi-Fi settings locally on the device.
:::

#### Remove / Factory Reset Device

You will have an option to remove devices from the Esper Dashboard. This is applicable to one or more devices or groups. There is a checkbox for ‘Factory Reset the Devices’ and for ‘Wipe External Storage.’ Once the WIPE command is fired, the device will be wiped and removed immediately from the dashboard if its online. 

:::tip
For online devices, the factory reset option will be enabled by default.
:::

For offline devices, our system will wait for it to come online for next 24 hours and if it does, it will wipe and remove the device. If it doesn't come online in 24 hours, then device will be removed from the console only between 24 to 36 hours.

:::tip
If the device user executes a factory reset directly on the device, the device will still appear in your Esper Endpoint as an offline device. If you re-provision the same device on your Esper Endpoint, it will keep the same Device ID, but you will need to re-enter the custom alias and any tags you previously added for the device.
:::

#### Ping Device

When you click the **Ping Device**, the Esper Console will attempt to ping the device. It is used when you want to check if your device is reachable or not.


#### Send Message

Send message allows you to send a message to the selected device. You can access this feature from the ‘Device & Group’ screen. Select the device you want to send a message to and navigate to the ‘Settings’ tab. Under the Quick Actions, you will find the Send Message option.

 Step 1: Click the **Send Message** button.

Step 2: Enter the subject and the body of the message. You can also include an optional link. You need to enter the end date and time for the message. For devices at a different location, you can reference the date and time from the device or the Console. The Console will not send the message after the specified end date and time.


:::tip
The message is sent only to the online devices immediately. System will attempt to send the message to offline devices till the specified end time.
:::
 
When you select the ‘Schedule Delivery’ checkbox, you will be prompted to enter the start date and the time. You can choose the date and time to correspond with the Console time zone or the device time zone.

Step 3: Click Send Message when you are ready to send the message. Clicking Cancel will take you back to the settings screen.

  

#### Reapply Blueprint 

When you click **Reapply Blueprint** button a command is fired to reapply a blueprint. This will remove any drift and ensure the device matches the current blueprint applied to the group.



#### Screen Lock

 When you click **Screen Lock**, the Esper Console will send the command to lock the screen of the device. You can lock your device screen whenever you notice any suspicious activity.
