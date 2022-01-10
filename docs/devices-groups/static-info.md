# What Device Information is Shown on the Console?

On the device view, you will see the following options for each device.

  

![](https://lh5.googleusercontent.com/rWpan0qcmua3nXUKGI_eEJ2-77aYIxk-sHZZ_ks44LnQWBGPsxMLUpvOov6SmmhKNpLFo4I1XVwmaqlJ4A3JXsuXiy1hjSGK_KGuIDQ8RBGJI6ZpLO_HrrsJUyUvr62VSEaVWef9)

The Overview tab displays all the important device information. For your convenience, information is categorized to display useful/most-visited information at the top.

  

![](https://lh4.googleusercontent.com/oXZZrq_4puM4JgmcE6hMsXvx3hQL-UrGCMILczZMINSDemVbZ75N725HzIFpGJ0cD2182ODABnZfsBYcLiskqnBx986_V5tW1hzOtx2_qUpumf5djje63dyRxFifc1rHj1VR_MNb)

  

The top of the page displays a summary of the device status- online/offline. You can see the storage, battery, memory, alert, and drift information at the top of the screen.

Here, you can access all the critical device information. It displays the blueprint nesting. In case the device is inheriting a blueprint from the parent, this visual will give a clear understanding. Clicking the Parent Group name will redirect you to the parent view. Clicking the blueprint will open up a view of the blueprint where you will be able to view all the configurations on one page. The map shows the device’s location.

  

![](https://lh6.googleusercontent.com/J6f6_uu1WZNTULdwUJRWzPrTvytpqBf339EBp9uEULl-WeGfu51trFcQz037-Fe2A1fKkM0U5bqvjpaXgHV-wR1G0IVUc7D4b6x5FkavzTRsv5YYQpNm9Lx8SU4GgafEsPKIF4j_)

  
  

All the dedicated information sections are expandable. All the sections give you irrespective information with actionable Network and Bluetooth sections. These topics are discussed below:

![](https://lh3.googleusercontent.com/SSly4_xPfb-FWpPxKt4AIH5Gu4a02Cj7QFG8dJ-52SoyyGsK00bwsuOx3Bf0LAx0qLHR2welcLHK4Tc1eaiDE7L1HQIsTIXdqFELw6Ow7Ea2-LnnPWDltheDo9W9bSwl_d2BlUql)

  
  
  

-   Network
    

![](https://lh6.googleusercontent.com/mcjgptZbymO4IYu710_itbjH5i5-GPTfc_bz2Nf4W4-vCxCOKSE-kIl9dP30xF84ZfoAsAy-cCJjIXsxs8V8ScXDxodmT8YGH7k5UMBjinZUcAEmAmwOUhQHx-eMv1DpMx0iaEB3)

Click add Wi-Fi Access Point link to push an access point. It enables you to turn Wi-Fi connectivity on or off for the selected device.

![wifi](https://lh5.googleusercontent.com/nUo8EfyTl9abLxiWUnA8fJCgJz4Hvf8RDcXt5obXtGivFA_DjWfrvbqFjwPfFM-oTb1o79BzH0STaghYXjY3j_4jPNMZxCy3wGqRbFo2DxVUFiB4fzt-hhJRgoDMZz_Y-_PwaDvc)

You can preload preferred Wi-Fi networks to which the provisioned device will automatically connect as they become available. The device will automatically connect to the given Wi-Fi access points as per the availability and network strength after provisioning.

The Wi-Fi on/off and WiFi access points features are not available for devices running Android 10.0 and above.

When you are adding a new access point, you have four fields to configure: Wi-Fi SSID, Wi-Fi Password, Wi-Fi Security type, Hidden. The Wi-Fi SSID and Wi-Fi Password fields are text fields for the SSID and password. Select the security type from the dropdown menu. There are four possible choices:

-   NONE
    
-   WPA- Wireless Protected Access
    
-   WEP- Wired Equivalent Privacy
    
-   EAP- Extensible Authentication Protocol
    

None: None is a open type network. Requirement: SSID

WEP: WEP is a open type network with password. Requirements: SSID, Password (limit: 13 characters)

WPA :Android refers to WPA as WPA/WPA2 but technically WPA and WPA2 are little different from each other. WPA is an enhanced version of WEP. ß Requirements: SSID,Password (limit: 63 characters) EAP: Internally EAP is known as WPA/WPA2/WPA3-Enterprise.

![wifi access point](https://lh4.googleusercontent.com/QUgBkIs0zHA9XNjvZxgRIt4GQIL0WnSvub4-gZgA-e4wsSCM60ZqO0XHre7M0vopeR97gXKxFnCmk30cc0NFtwsz5WeubE5SruysIYQvTS9ZBjmdcqA5Fw4khrvX2iJNWtDnVZz2)

If you select EAP, you will be prompted to enter additional information.

![EAP](https://lh4.googleusercontent.com/YKo0s0OeeeFZaPmF3ykRlPcIc3xn5Q8PFVHLHYrrCrmhhkE1RQItD-ZXdCT0vINwY_1VMeU6DXUYtBf0FsAe_dCaA6kLxl7LCNnyrNU8bALa1RET8sppmessl9_rpholySW7yAm2)

Wi-Fi EAP Method is a drop-down with the following options:

-   PEAP-  
    Phase 2 Authentication  
    Identity (Optional)  
    Anonymous Identity (Optional)  
    Password
    
-   TLS-  
    Identity (Optional)
    
-   TTLS-  
    Identity (Optional)  
    Anonymous Identity (Optional)
    

Password

-   PWD-  
    Identity (Optional)  
    Password (Optional)
    

Similarly, the Phase 2 Authentication is also a dropdown with the following options:

-   NONE
    
-   PAP  
    Identity (Optional)  
    Anonymous Identity (Optional)  
    Password
    
-   MSCHAP  
    Identity (Optional)  
    Anonymous Identity (Optional)  
    Password
    
-   MSCHAPV2  
    Anonymous Identity (Optional)  
    Password
    
-   GTC Do not valid  
    Identity (Optional)  
    Anonymous Identity (Optional)  
    Password
    
-   SIM
    
-   AKA
    
-   AKA_PRIME
    

In Android 10 and above, when a WiFi access point is added directly from the device, it is recommended that GPS is ON so that the Wi-Fi access point can reflect back on the Console.

  

On devices running Android 8 or above, sometimes the Wi-Fi access point is displayed as "unknown SSID" even when the device is connected to wifi. You can perform the following steps to resolve this issue:

1.  Switch "ON" the GPS.
    
2.  Refresh the web dashboard after 2-3 minutes.
    
3.  Check if the expected access point is shown.
    

If the access point is still not displayed, try the following steps:

1.  Restart the device.
    
2.  Refresh the web dashboard after 2-3 minutes.
    
3.  Check if the expected access point is shown.
    

  

-   Bluetooth and Paired Devices
    

![](https://lh4.googleusercontent.com/QIAMcTRcc9GyDqBcPkcIAQ1RA0nzIOh7iWKKFMAHiS-h0vAj9x6VDNELzNTdulldbnqI_7rb8-TS63UwiwSPwtYY8rd0frNC2DT_JgcIUeZp6PH_Bljj1m4s4ygNxCYSH6olz_Nn)

This feature lists the devices that are currently paired and their connection status. If you choose to remove the device, click “Forget Device” from the list of paired Bluetooth devices.

![Bluetooth](https://lh6.googleusercontent.com/0x8HnJTIEobdWJA5zWAhl0wQ352pDL2X2RgqgNF-uXuebEGvj872okxLzb7rjsZZtSD-Y4c9EpEBynldBc3rYfQT1nAJNRf9M0qIOpLRn0FSURTjeFCYOimyd5Sa3TTUe0oYOfC3)

Once a change is made, a toast message will appear in the bottom left corner of the screen indicating success or error for turning Bluetooth on or off.