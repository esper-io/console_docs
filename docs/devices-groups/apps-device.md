## How to Manage Applications on a Single Device?

Clicking on the name of the device, on the ‘Device and Group’ screen, you will be able to access the Applications. This section lists the Applications that are installed on the device. For each Application, the information about the Application Name, the Application Type, the Version Code, the Package Name, the Application State, and the Actions are displayed.

  

![](./images/deviceapps/93_Groups_devices_details_screen_apps_list.png)

  

You can search for a particular application by entering part or all of the application name.

  

![](./images/deviceapps/94_Groups_devices_details_screen_app_search_box.png)

  

The applications that are already installed on the device are specified in this list with the following filters:

-   All Applications installed on the device
    
-   Enterprise Applications are private applications that have installed using the [Esper Cloud](../apps/upload-apps.md).
    
-   Google Apps installed using your managed Google Play account.
    
-   Preloaded Applications that were pre-installed by the device maker in ROM.
    

![](./images/deviceapps/95_Groups_devices_details_screen_app_types.png)

  

### Install a New Application on Device From the Console

  

Esper allows users to install both private and google applications via a unified experience.

  

Step 1: The **New App** Install button lets you install new applications on the device.

  

![](./images/deviceapps/96_Groups_devices_details_screen_app_install.png)

  

Step 2: You will see a slide out from the right when you click on the **New App Install** button. Here, you will be able to select the application from the list of all approved Google applications and all uploaded Enterprise applications.

  

![](./images/deviceapps/97_Groups_devices_details_screen_app_install_select_app.png)

  

Step 3: If you have multiple application versions or builds you can select which version you wish to install from the list.

  

![](./images/deviceapps/98_Groups_devices_details_screen_app_install_select_version.png)

If you choose the manage config check box, you will be prompted to enter a valid JSON code. This feature gives administrators flexibility to remotely configure work applications. 

![](./images/deviceapps/102_Groups_devices_manageConfig.png)


**Notes**:

  

1.  Manage configurations can be applied to Android devices 5.0 or above.
    
2.  All the applications will accept these JSON values. You will be able to see the changes only on the apps where the JSON values are applicable.

3.  Manage configurations cannot be applied to a google play store application while installing it. However, an installed application can have managed configurations.
  

Step 4: On selection of version, the system will show you application preview, check if all the details are correct, and then click on Install.

  

![](./images/deviceapps/99-install_app_details.png)

  

Step 5: Application installation will start and you can see the status “ In progress” in the status section.

  

![](./images/deviceapps/100_Groups_devices_details_screen_app_install_status.png)

 The app installation screen also includes an estimated total time required for the installation. If an error occurs, the Console will display an error message. 

Step 6: Upon successful installation, you will see the application installation success message in the status section.

  

![](./images/deviceapps/101_Groups_devices_details_screen_app_install_status_success.png)

  

Once you close the slideout, you can see the application you installed in your application list.

  






### Set Application Permissions on Device From the Console

  

Application  permissions allow users to configure multiple permissions state on a device like Camera access to an application, read and write to external storage permissions, contacts access ad accounts Permissions.

Step 1: To access application permissions of any application, click on the ellipsis and select ‘Set App Permissions’ from the options.

  
  

![](./images/deviceapps/103_Groups_devices_details_screen_app_list_set_permissions.png)

  

You can change the following permissions:

  

-   Read Contacts
    
-   Get Accounts
    
-   Read external storage
    
-   Write external storage
    

  

![](./images/deviceapps/104_Groups_devices_details_screen_set_permissions_list.png)

  

You are provided with three options for each attribute to choose from for app permissions viz Default, Denied, and Granted.

  

![](./images/deviceapps/105_Groups_devices_details_screen_set_permissions_list.png)

  

### Set an Application State on the Device from the Console

  

An Application can have 3 states: Show, Hide, and Disable.

*Show state*: Show state keeps the application accessible directly and indirectly on your device which means the user can access the application directly on your device or via some other application.

  

![](./images/deviceapps/106_Groups_devices_details_screen_app_app_state_show.png)

  

**Note**: By default, the ‘Show’ state will be auto-selected.

  

*Hide state*: If an application is set to 'Hide', it can still run in the background.

  

![](./images/deviceapps/107_Groups_devices_details_screen_app_app_state_hide.png)

  

*Disable state*: If you want to prevent an application from running, use ‘Disable’.

  

This is useful for applications such as in-ROM applications that cannot be uninstalled but need to be prevented from running to avoid impacting your user experience or to ensure they do not needlessly consume data.

![](./images/deviceapps/108_Groups_devices_details_screen_app_app_state_disable.png)

**Note**: In-ROM (preloaded) applications cannot be uninstalled. They can be hidden but can not be uninstalled.

Following are the steps to access the application state:

Step 1: Click on the ellipsis and choose the ‘Set App State’ option.

![](./images/deviceapps/109_Groups_devices_details_screen_app_app_state.png)

  
  

Step 2: Choose one of the three available states and click the button **Save** changes.

![](./images/deviceapps/110_Groups_devices_details_screen_app_app_state_save.png)

  
  

Once you set the state click on save changes and your changes will be applied to the application on your device.

### How to Clear the Application Data on the Device from the Console

  

Esper provides users a way to clear application data from the Console on their device.

  

To access the “Clear data” of any application, click on the ellipsis and select the “Clear Data” option.

  

![](./images/deviceapps/111_Groups_devices_details_screen_app_clear_app_data.png)

  
  
  

Slide-out from the right will have the option to clear data. Click on the “ **Clear**” button.

  
  

![](./images/deviceapps/112_Groups_devices_details_screen_app_clear_app_data.png)

  

This will send a request to the device to clear app data. Upon success, you will get a successful response message.

  

![](./images/deviceapps/113_Groups_devices_details_screen_app_clear_app_data_success_status.png)


  

### Uninstall an App on the Device from the Console?

  

You can uninstall the application on your device from the application section. Following are the steps to uninstall an application:

  

Step 1: In the applications section, click on the ellipsis and choose the ‘Uninstall’ option.

  

![](./images/deviceapps/114_Groups_devices_details_screen_app_uninstall.png)

  

Step 2: On the slide-out from the right side, click the button **Uninstall**.

![](./images/deviceapps/115_Groups_devices_details_screen_app_uninstall_message.png)

  

Step 3: A command will be sent to the device to uninstall the application and you will get a success message on completion.

![](./images/deviceapps/116_Groups_devices_details_screen_app_uninstall_success.png)

  
  

**Note**: You cannot uninstall an application if a device is offline.

  

### Manage Configurations for Existing Applications on a Device from the Console

  

Manage configuration gives the admins the flexibility to manage work applications from the Console. From the ‘Device and Group’ screen, click on the name of the device for which you want to manage apps. Navigate to the ‘Apps’ tab.

  

Step 1: For the selected application, click on the ellipsis for more actions.

  

![](./images/deviceapps/117_Groups_devices_details_screen_app_manage_configuration.png)

  

Step 2: Choose ‘Manage Configurations’ from the drop-down. On the pop-up, type the JSON code for the key-value pair.

![](./images/deviceapps/118_Groups_devices_details_screen_app_manage_configuration_modal.png)

Step 3: Click **Apply** to save the changes. Clicking **Cancel** will take you back to the 'app setting' screen.

 **Note:** If you have managed configurations applied for an application, you will be able to edit the configurations. Only valid key-value pairs will be applied to the application and shown in the box below. 

 
![](./images/deviceapps/118-a-Manage_configEdit.png)


A toast message will indicate success or failure for the action.

### Activity feed

Click on the info icon to the far right of the screen to view the history of application installation and uninstall events performed on the device.

![](./images/deviceapps/119_Groups_devices_details_screen_app_activity_feed_button.png)

This Activity field includes information about Timestamp, Application name, Application version, Package name, Application type, and status of the event (Success, In Progress, Failure, or Cancelled).

![](./images/deviceapps/120_Groups_devices_details_screen_app_activity_feed_list.png)