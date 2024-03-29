# How to Onboard a Device Using KME?

Samsung Knox Mobile Enrollment (KME) is an enrollment method offered by Samsung for its devices. Upon first boot or factory reset, KME forces Samsung devices to enroll into Esper. Follow the steps below to onboard a device using KME.

:::tip
This is an alternative method for enrolling devices to the Console.
:::

Step 1: Navigate and log in to the [Knox Mobile Enrollment (KME)](https://central.samsungknox.com/login-navigator) portal.

![KME portal](./images//KME/1-portal.png)

Step 2: Select the Knox Mobile Enrollment Portal to launch the Console.

![KME](./images/KME/2-KME.png)

You will be taken to the device page, where you can see all the devices added to your KME portal by the reseller.

![all devices](./images/KME/3-allDevices.png)

**Note:** If you don’t see a device here, please contact your reseller and get the devices added to the KME portal.

Step 3: Select Profile from the left menu. Click Create Profile.

![create profile](./images/KME/4-createProfile.png)

Step 4: Select Android Enterprise.

![profile type](./images/KME/5-ProfileType.png)

Step 5: Fill in the Profile details. Enter the Profile name and optional description.

![profile info](./images/KME/6-profileInfo.png)

Under the MDM Information, select ‘Force Device Owner enrollment.’ In the Pick our MDM drop-down, select the 'Other' option. To enter the MDM Agent APK link, you can enter the default Esper Agent link [https://shoonya-dpc.s3.ap-south-1.amazonaws.com/downloads/shoonyadpc-latest-master.apk](https://shoonya-dpc.s3.ap-south-1.amazonaws.com/downloads/shoonyadpc-latest-master.apk). If you are using a custom Esper Agent, please contact [Esper](https://support.esper.io/s/) for the URL for the APK. Click Continue when done.

Step 6: You will be taken to the Android enterprise profile settings screen.

![profile setting](./images/KME/7-profileSettings.png)

To enter the Custom JSON data, login to the Esper Console and navigate to the "Devices and Groups" section. Click on the QR code icon assosiated with any group and download the config. 

![profile created](./images/KME/8-Config.png)

Copy the contents of the Admin Extra Bundle from the downloaded Config file and paste it into the Custom JSON data. 

```json
{
   "V":"0",
   "EID":"your Enterprise Id",
   "E":"Endpoint name",
   "P":"Q",
   "OE":true,
   "G":"Group-Id",
   "T":"Template Id",
   "AT":"Authorization Token"
}
```

Under device settings > System applications, select ‘Leave all system app enabled.’ Enter the company name and click Create.

You will see the created profile on the screen.

![profile created](./images/KME/9-profileCreated.png)

If you click the profile name, you will be able to edit and save the created profile.

Step 7: Click on the ellipsis and choose Configure devices from the drop-down.

![configure](./images/KME/10-Configure.png)

Step 8: Select the profile you just created from the drop-down and click Save.

![assign profile](./images/KME/11-assignProfile.png)

The profile will be added to the device and displayed on the device screen.

![device profile](./images/KME/12-deviceProfile.png)

When you factory reset the device, you will go through the Android standard setup process on the device. If you connect to the internet during this setup process, the Knox Portal will find your device and automatically start the onboarding process after a few license/onboarding prompts.

