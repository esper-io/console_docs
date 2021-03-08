##  How to Manage Applications for a Group?

  

The Applications tab lets you manage the applications on all the devices in the group. This includes installing new applications, uninstalling applications, scheduling an application installation, and approving apps for the group.

  

![](./images/groupapps/44_DeviceGroup_Manage_Apps.png)

**Note**: If you wish to update a currently installed application to a new version, you install that new version using any of the available means. You cannot uninstall in-ROM applications (called Preloaded applications). Instead, you can Disable these applications using Approvals.

###  Install/Uninstall a New App on Device Group From the Console

  

The Applications section lets you install or uninstall both privately uploaded applications—also known as Enterprise Applications—and Google Play Apps to the groups immediately. The action will only be performed on online devices.

  

Group Uninstall works much the same. Simply select Uninstall rather than Install from the Select Application Action dropdown.

  

Step 1: To install an application on all the devices in the group first select Install/Uninstall, then select Install from the Select Application Action dropdown.

  
  

![](./images/groupapps/45_DeviceGroup_Manage_Apps_select_Action.png)

  

Step 2: Device info preview shows how many devices are offline or online.

  

![](./images/groupapps/46_DeviceGroup_Manage_Apps_Device_Info.png)

  

Step 3: Then select the application you’d like to install from the Select Application dropdown. You can also type the first few letters of the application’s name into the search box to quickly find the application.

![](./images/groupapps/47_DeviceGroup_Manage_Apps_select_App.png)

  

Step 4: Select application version.If you select the check box for manage configurations, you will be prompted to enter JSON code. Managed configurations will allow the administrator to configure work applications remotely.

  

![](./images/groupapps/48_DeviceGroup_Manage_Apps_select_App_Version.png)

![](./images/groupapps/48-1_manageconfig.png)

**Notes:**

  

1.  Manage configurations can be applied to android devices 5.0 or above.
    
2.  All the applications will accept these JSON values. You will be able to see the changes only on the apps where the JSON values are applicable.
    
3.  Manage configurations cannot be applied to a Google Play store application while installing it. However, an installed aplicationp can have managed configurations.

You can anytime check the history of application installation/schedules etc. Here, if you click on the ‘view’ link under the manage configurations column, you will be able to see the JSON code.

  

![](./images/groupapps/48-2-ManageConfigViewLink.png)

  
Note: You can also view the managed configurations by clicking the information icon. On the slide-out, click on the view configuration link.

Step 5: Once you’ve selected an application, its details will appear in the Application Details Preview section, including the application’s version, package name, and app type—that is, whether it’s an enterprise application or a Google App.

  


![](./images/groupapps/49_DeviceGroup_Manage_Apps_App_Details.png)

  

Step 6: Queue requests to offline devices if required and click Install.

  

![](./images/groupapps/50_DeviceGroup_Manage_Apps_Queue_Offline_Devices.png)

  

Step 7: After clicking on install, the right sidebar will slide and you can check the status of the installation.

  

![](./images/groupapps/51_DeviceGroup_Manage_Apps_Status.png)

  

You can anytime check the history of application installation/schedules. Here, if you click on the ‘view’ link under manage configurations column, you will be able to see the JSON code.


![](./images/groupapps/52_DeviceGroup_Manage_Apps_History_View.png)

 **Note:** You can also view the managed configurations by clicking the information icon. On the slide-out, click on the view configuration link.  

###  How to Schedule Application Install/Uninstall on device group from the Console?

This section lets you schedule an application installation or uninstallation for a specific point in the future. To schedule an install, select Schedule Install. Schedule Group Uninstall works much the same. Simply select Uninstall rather than Install from the Select Application Action dropdown.

  
  

Step 1: To schedule an application installation or uninstallation, click on the Create scheduled install button.

![](./images/groupapps/53_DeviceGroup_Manage_Apps_SSchedule_Install.png)

  

Step 2: You will be taken to a new screen where you enter the schedule details. Enter a unique name for the scheduled installation or uninstallation in the Name field.

**Note**: Names cannot be reused.

  

![](./images/groupapps/54_DeviceGroup_Manage_Apps_SSchedule_Install_Create.png)

  

Step 3: Select Install or Uninstall from the Select Application Action dropdown.

  

![](./images/groupapps/55_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_App_action.png)

  

Step 4: Select the application you want to install or uninstall from the Select Application dropdown.

![](./images/groupapps/56_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_App.png)

  

Step 5: Use the radio buttons to choose between using the device’s time or your Console’s time when scheduling an application installation or uninstallation for a group. If you select Device time when you schedule an application installation, the installation (or uninstallation) will be performed on the devices in that group whenever it’s the specified time on each device.

  

![](./images/groupapps/57_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_Install_relative.png)

  

Step 6: You also have the option to define a recurring schedule by selecting Recurring schedule — for instance, to schedule an application installation every Monday between 2:00 AM and 5:00 AM from May 1st to May 10th.

  

![](./images/groupapps/58_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_Install_window.png)

  

Step 7: Select start and end dates from the Start Date and End Date dropdowns and start and stop times from the Start Time and End Time dropdowns. Then click Create Schedule.

![](./images/groupapps/59_DeviceGroup_Manage_Apps_SSchedule_Install_Create_Select_date_create_schedule.png)

  
  

Step 8: After the scheduled installation has been completed, you can see the status of the action by clicking View Results next to the entry for the installation.

  

![](./images/groupapps/60_DeviceGroup_Manage_Apps_SSchedule_View_results.png)

  
  
  

###  Set Application State on the Device Group From the Console

  

The Application State section enables you to show, hide or disable in-ROM applications (also referred to as Preloaded applications) on all the devices in the group.

  

![](./images/groupapps/61_DeviceGroup_Manage_App_state.png)

  

To change the application state status of an application, enter its package name in the box and click Show, Hide, or Disable.

  

![](./images/groupapps/62_DeviceGroup_Manage_App_state_package_Name.png)

  

Click Apply. The Console will display the group command status.

  

![](./images/groupapps/63_DeviceGroup_Manage_App_state_package_Name_View_Details.png)

  

Clicking See Details will cause a sidebar to slide in from the right showing the status of the installation.

![](./images/groupapps/64_DeviceGroup_Manage_App_state_package_Name_View_Details_Status.png)

Note: You will need to enter the exact package name of any in-ROM applications you wish to show, hide, or delete. For example, Chrome’s package name is “com.android.chrome;” just entering “Chrome” or “Google Chrome” will not work.

  

###  Finding Package Names

The best way to get the exact package name of an in-ROM application is to use an Android Debug Bridge (ADB) command to retrieve the names of all the packages.

Physically connect to the device using a USB cable and authorize ADB usage on the device by going to Device > Settings. Once ADB usage is authorized, the following command will retrieve the names of all the package names:

adb shell pm list packages

ADB will return a list of all the applications running on the device:

![](./images/groupapps/65_DeviceGroup_Manage_App_state_find_package_Name_.png)

You can also view the package names for any applications installed on a device by viewing the device’s details and selecting Applications. The package name for each application is displayed in the resulting list view.

### Manage Configurations

This section enables you to view the configurations applied to the group. When you enter a valid package name, you will be able to see the JSON code. All the applications will accept these JSON values. You will be able to see the changes only on the applications where the JSON values are applicable.

![](./images/groupapps/66-DeviceGroups-ManageConfig.png)

  
**Note**: Manage configurations are supported only on android devices 5.0 or above.