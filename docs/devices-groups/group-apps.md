##  How to Manage Apps for a Group?

  

The Apps tab lets you manage the apps on all the devices in the group. This includes installing new apps, uninstalling apps, scheduling an app installation, and approving apps for the group.

  

![](./images/groupapps/44_DeviceGroup_Manage_Apps.png)

**Note**: If you wish to update a currently installed app to a new version, you install that new version using any of the available means. You cannot uninstall in-ROM apps (called Preloaded apps). Instead, you can Disable these apps using Approvals.

###  Install/Uninstall a New App on Device Group From the Console

  

The Apps section lets you install or uninstall both privately uploaded apps—also known as Enterprise Apps—and Google Play apps to the groups immediately. The action will only be performed on online devices.

  

Group Uninstall works much the same. Simply select Uninstall rather than Install from the Select App Action dropdown.

  

Step 1: To install an app on all the devices in the group first select Install/Uninstall, then select Install from the Select App Action dropdown.

  
  

![](./images/groupapps/45_DeviceGroup_Manage_Apps_select_Action.png)

  

Step 2: Device info preview shows how many devices are offline or online.

  

![](./images/groupapps/46_DeviceGroup_Manage_Apps_Device_Info.png)

  

Step 3: Then select the app you’d like to install from the Select App dropdown. You can also type the first few letters of the app’s name into the search box to quickly find the app.

![](./images/groupapps/47_DeviceGroup_Manage_Apps_select_App.png)

  

Step 4: Select app version.If you select the check box for manage configurations, you will be prompted to enter JSON code. Managed configurations will allow the administrator to configure work apps remotely.

  

![](./images/groupapps/48_DeviceGroup_Manage_Apps_select_App_Version.png)

![](./images/groupapps/48-1_manageconfig.png)

  

Step 5: Once you’ve selected an app, its details will appear in the App Details Preview section, including the app’s version, package name, and app type—that is, whether it’s an enterprise app or a Google app.

  


![](./images/groupapps/49_DeviceGroup_Manage_Apps_App_Details.png)

  

Step 6: Queue requests to offline devices if required and click Install.

  

![](./images/groupapps/50_DeviceGroup_Manage_Apps_Queue_Offline_Devices.png)

  

Step 7: After clicking on install, the right sidebar will slide and you can check the status of the installation.

  

![](./images/groupapps/51_DeviceGroup_Manage_Apps_Status.png)

  

You can anytime check the history of app installation/schedules. Here, if you click on the ‘view’ link under manage configurations column, you will be able to see the JSON code.


![](./images/groupapps/52_DeviceGroup_Manage_Apps_History_View.png)

 **Note:** You can also view the managed configurations by clicking the information icon. On the slide-out, click on the view configuration link.  

###  How to Schedule App Install/Uninstall on device group from the Console?

This section lets you schedule an app installation or uninstallation for a specific point in the future. To schedule an install, select Schedule Install. Schedule Group Uninstall works much the same. Simply select Uninstall rather than Install from the Select App Action dropdown.

  
  

Step 1: To schedule an app installation or uninstallation, click on the Create scheduled install button.

![](./images/groupapps/53_DeviceGroup_Manage_Apps_SSchedule_Install.png)

  

Step 2: You will be taken to a new screen where you enter the schedule details. Enter a unique name for the scheduled installation or uninstallation in the Name field.

**Note**: Names cannot be reused.

  

![](./images/groupapps/54_DeviceGroup_Manage_Apps_SSchedule_Install_Create.png)

  

Step 3: Select Install or Uninstall from the Select App Action dropdown.

  

![](./images/groupapps/55_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_App_action.png)

  

Step 4: Select the app you want to install or uninstall from the Select App dropdown.

![](./images/groupapps/56_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_App.png)

  

Step 5: Use the radio buttons to choose between using the device’s time or your console’s time when scheduling an application installation or uninstallation for a group. If you select Device time when you schedule an app installation, the installation (or uninstallation) will be performed on the devices in that group whenever it’s the specified time on each device.

  

![](./images/groupapps/57_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_Install_relative.png)

  

Step 6: You also have the option to define a recurring schedule by selecting Recurring schedule — for instance, to schedule an application installation every Monday between 2:00 AM and 5:00 AM from May 1st to May 10th.

  

![](./images/groupapps/58_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_Install_window.png)

  

Step 7: Select start and end dates from the Start Date and End Date dropdowns and start and stop times from the Start Time and End Time dropdowns. Then click Create Schedule.

![](./images/groupapps/59_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_date_create_schedule.png)

  
  

Step 8: After the scheduled installation has been completed, you can see the status of the action by clicking View Results next to the entry for the installation.

  

![](./images/groupapps/60_DeviceGroup_Manage_Apps_SSchedule_View_results.png)

  
  
  

###  Set App State on the Device Group From the Console

  

The App State section enables you to show, hide or disable in-ROM apps (also referred to as Preloaded apps) on all the devices in the group.

  

![](./images/groupapps/61_DeviceGroup_Manage_App_state.png)

  

To change the app state status of an app, enter its package name in the box and click Show, Hide, or Disable.

  

![](./images/groupapps/62_DeviceGroup_Manage_App_state_package_Name.png)

  

Click Apply. The console will display the group command status.

  

![](./images/groupapps/63_DeviceGroup_Manage_App_state_package_Name_View_Details.png)

  

Clicking See Details will cause a sidebar to slide in from the right showing the status of the installation.

![](./images/groupapps/64_DeviceGroup_Manage_App_state_package_Name_View_Details_Status.png)

Note: You will need to enter the exact package name of any in-ROM apps you wish to show, hide, or delete. For example, Chrome’s package name is “com.android.chrome;” just entering “Chrome” or “Google Chrome” will not work.

  

###  Finding Package Names

The best way to get the exact package name of an in-ROM app is to use an Android Debug Bridge (ADB) command to retrieve the names of all the packages.

Physically connect to the device using a USB cable and authorize ADB usage on the device by going to Device > Settings. Once ADB usage is authorized, the following command will retrieve the names of all the package names:

adb shell pm list packages

ADB will return a list of all the apps running on the device:

![](./images/groupapps/65_DeviceGroup_Manage_App_state_find_package_Name_.png)

You can also view the package names for any apps installed on a device by viewing the device’s details and selecting Apps. The package name for each app is displayed in the resulting list view.

### Manage Configurations

This section enables you to view the configurations applied to the group. When you enter a valid package name, you will be able to see the JSON code. All the apps will accept these JSON values. You will be able to see the changes only on the apps where the JSON values are applicable.

![](./images/groupapps/66-DeviceGroups-ManageConfig.png)

  
**Note**: Manage configurations are supported only on android devices 5.0 or above.