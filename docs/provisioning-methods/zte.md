# How to Onboard a Device Using ZTE?

Zero-touch Enrollment (ZTE) is an onboarding method offered by Google for the [selected devices](https://androidenterprisepartners.withgoogle.com/devices). Upon first boot or factory reset, ZTE forces Android devices to enroll into Esper. Follow the steps below to onboard a device using ZTE.

  

Step 1: Navigate and log in to the [Zero-touch Enrollment (ZTE) portal](https://partner.android.com/zerotouch).

Step 2: You will be taken to the Configuration tab.

  

![portal](./images/ZTE/1-ZTE.png)

Here you will be able to create a configuration to associate with a device.

Step 3: Click the ‘+’ symbol to add a new configuration.

Step 4: On the pop-up, enter the details— configuration name and EMM DPC (Esper Device Management). Enter your organization’s information for the company name, support email address, support phone number.

![create config](./images/ZTE/2-createConfig.png)

To enter the DPC extras, navigate to the Esper Console.

![download](./images/ZTE/3-downloadCOnfig.png)

Copy the following contents from the downloaded Config file and paste it into the DPC extras. Click ADD.

`
"android.app.extra.PROVISIONING_LEAVE_ALL_SYSTEM_APPS_ENABLED": true,

"android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE": {

"templateUrl": "https://{your-endpoint-name}-api.esper.cloud/api/v0/enterprise/{your-enterprise-id}/devicetemplate/17/",

"authToken": "{your-auth-token}",

"groupUrl": "https://{your-endpoint-name}-api.esper.cloud/api/enterprise/{your-enterprise-id}/devicegroup/bb170524-14ad-463a-9120-8060a7c0c9dc/?format=json",

"enterpriseId": "{your-enterprise-id}",

"environment": "https://{your-endpoint-name}-api.esper.cloud",

"provisionType": "QR_CODE"

}
`
  

Step 5: The added configuration will be displayed on the Configuration tab.

![Add config](./images/ZTE/4-addedConfig.png)

Step 6: Now, you need to add the configuration to the device. Navigate to the device tab. Here all the devices added by the reseller are displayed with no configuration.

![devices](./images/ZTE/5-Devices.png)

Step 7: Select the device you want to associate a configuration. Click on the dropdown and choose the configuration.

![Config](./images//ZTE/6-dropdownConfig.png)

Step 8: Confirm your choice, and the device will be associated with the configuration.

![confirm](./images/ZTE/7-confirm.png)

When you factory reset the device, you will go through the Android standard setup process. Suppose you connect to the internet during this setup process, the Zero-touch profile will be found. It will automatically start the provisioning process after a few license/onboarding prompts.

Note: You can assign a configuration to multiple devices at a time. Navigate to the Device section for bulk upload and choose ‘Upload batch configurations’ from the menu.

![bulk upload](./images/ZTE/8-bulkUpload.png)

Download an example from the pop-up, associate a configuration, and upload a CSV file.

![csv](./images/ZTE/9-csv.png)

