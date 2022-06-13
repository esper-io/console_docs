# What is a Supervisor Plugin?

Android OS has different permissions to restrict certain actions and data access for applications. For security reasons, these permissions limit control/access to system-level details. While the applications can access all the [System](https://developer.android.com/reference/android/provider/Settings.System) settings, Android restricts access to [Secure](https://developer.android.com/reference/android/provider/Settings.Secure) and [Global](https://developer.android.com/reference/android/provider/Settings.Global) settings along with special permissions like even injection (used for remote control), APN configuration, etc. Thus requiring a platform signature for the apps.

  

Working with the device manufacturers, Esper has a solution for you to make these functionalities work —Supervisor Plugin. It allows the Esper Agent to access deep into the Android OS and access system-level permissions.

## Some global setting exceptions

While most global settings require the plugin, below is a list of some global settings that do not require the plugin:

-   "adb_enabled": enable/disable ADB over USB
    
-   "auto_time": automatically sets the device's UTC system clock
    
-   "auto_time_zone": automatically sets the device's timezone
    
-   "data_roaming": enable/disable data roaming
    
-   "usb_mass_storage_enabled": enable/disable USB mass storage to transfer files
    
-   "wifi_sleep_policy": set the policy for when Wi-Fi should go to sleep
    
-   "stay_on_while_plugged_in": set the device ON/OFF when it is plugged in
    
-   "wifi_device_owner_configs_lockdown": control lock for the Wi-Fi configurations created by a Device Owner app
    
-   "bluetooth_on": enable/disable Bluetooth
    
-   "development_settings_enabled": check whether the user has enabled development settings
    
-   "network_preference": user preference for the network(s) use
    
-   "wifi_on": enable/disable Wi-Fi
    

  

## Getting a Supervisor Plugin

If your application uses secure or global Android settings, depending on your devices — Lenovo TBX-606L, Nokia2.2, SM-T295, etc., you might need a Supervisor Plugin. The Esper team can help you build a customized Supervisor Plugin. To learn more, please reach out to the [Esper team](https://support.esper.io/s/) with your device model information.

  

Note: If you want to use remote control functionality on devices, please contact the [Esper team](https://support.esper.io/s/) for a plugin.

