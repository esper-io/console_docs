# 6-Tap QR

Android devices with Google Mobile Services (GMS) support and a camera can be enrolled and provisioned onto Esper using the 6-tap QR code onboarding method. The particular onboarding screens and device onboarding flow vary across Android versions.

Notes:

1.  6 Tap QR Code support was first delivered in Android 7. On some Android versions, primarily Android 9 and above, some of these screens may not appear at all. If you have any questions or issues with 6 Tap QR Code-based onboarding, please email us.
    
2.  Xiaomi/Redmi devices do not support a 6-tap onboarding method.
    

Device makers and carriers customize the setup process. Thus it is likely you’ll encounter unique setup screens specific to your device. Generally, you can either skip or decline most of the options.

There is a handful of system-specific notifications called out in the instructions for which you’ll need to make the proper selections.

The steps to onboard using this method are outlined below:

Step 1: Begin by [factory resetting](https://console-docs.esper.io/provisioning-methods/factory-reset.html) your device.

Step 2: Once the factory reset is completed, on the first setup screen, tap anywhere on the screen six times.

![Factory Reset](https://lh6.googleusercontent.com/wwJ-CZB43gDtUNniSeeGLjQIw5MCpHGG-XdII8wtW3HPtoEf3zG6I3pswXssm9tKmLqe6JAx7hR3azj1_OUaGQE_lOiZ3xTs0L-I7ChIDBsIwmRfZMVbmFf3KHJAeTls4VpfBaRW)

Step 3: If your device first needs to download the QR code reader, you’ll see the QR code setup screen. Suppose you see this screen go to the QR Code Reader Setup section.

![Factory Reset](https://lh5.googleusercontent.com/2e5tR5shDFMoE_l0S5wss8gnbkXW34ROoVeuRBcu_PlbBK32cf16WDXQy9quqjuSeqEdsi7jeRFygSxbAfYSwLNTwyoJ-ag_s3Q9BcwIEh0ZRCXYvmCzReq88U8H823Hsf2vxzfN)

Step 4: If your device has the QR code reader in ROM, after tapping six times in the open space of the first set up screen, the QR code reader screen will be opened.

![QRCode](https://lh4.googleusercontent.com/EXC-gz5C3AHemacwQ880Pn6F6TyZSFMgAj-dZImKEC_PGv1BedvY65TZYlDKI1TIShlaN8WILQwta6tWxc42_wcmCi4cJwpinjFb3Q6PwDqCffPP_Qu1pzwIe-QSkL1yjCj_kwTO)

Step 5: Go to the Esper Console and navigate to the ’Device and Groups’ section. Devices may be easily onboarded directly to the Directory-level or Group using the shortcut button for 6-tap QR code onboarding. Simply click on the QR code icon next to the Directory or a Group where you wish to onboard a device.

![](https://lh5.googleusercontent.com/JLrDpoocxpc-EYCV7yX_-TS5IDewBQnLC2eEIEXsvhe8luwaK4Sy98699i8he8QiXjoENBX6TRtDQRWZ-Hmoa6QTWs0hBEi9HgnhrorqeWlcwseNLIMczIdLBLykD2LL6JsVzfbS)

Note: This modal will pop up when you click the QR code for the Group. A similar modal will pop up when you click the QR code at the directory level. Devices will be onboarded to the endpoint and the Esper Agent will be installed. Devices that are onboarded directly to a Group will automatically begin onboarding with the Group’s Blueprint if one exists. If a device is onboarded to the Directory level, it will not be provisioned until it is moved to a Group with a Blueprint.

On the dropdown for Wi-Fi, you can choose from an existing network or add a new one. ![](https://lh6.googleusercontent.com/fgW-kJCG4AXIUOYskzubi3XpfB-Qe8LjHWhos7o1dFAy5G3yjfg4mu3Nrv2Wm10JOMoQDBdrckWrzPR_ycY9nXUERgXnxkZnRQ5q5b0-_4dUXJqgVt7x6ouLnzoTJPg5fTNu-ngi)

Once you click ‘Add’ the Wi-Fi the details will be reflected in the QR Code.

  

You can view the 6-tap QR Code tutorial for help or click Alternative Onboarding Methods to select different methods. You can also download the config file from the modal.

Step 6: Hold up the device’s camera to your computer screen, centering it on the QR code.

The QR code is densely populated. If your device’s camera has trouble scanning it, follow these tips:

-   Increasing brightness of your PC’s screen
    
-   Changing the distance between the camera and the screen - move your device closer or further from the QR code
    
-   Hold the device still for a few seconds once you have adjusted the distance.
    

Step 9: If your device does not have an active cellular data network connection or isn’t set up to connect to a Wi-Fi access point specified in the QR code to use for provisioning, you will need to connect the device to the internet either using the cellular data or via Wi-Fi. To do so, you will need to either enable your SIM or enter your Wi-Fi access point credentials.

Step 10: You may then see a screen to accept specific terms from Google regarding Esper managing your device. Click ACCEPT & CONTINUE.

Step 11: Once the Esper agent has successfully downloaded, onboarding will start.

![alt text](https://lh4.googleusercontent.com/J9JcPr8lYkmVEhlK1JQlOI7H5znTAn511n2wT1VZibN0IktghIKzcByeaTbLPRDGHJvEJ6ogsWK_4xg00Mu8uWy6JGxHGvKucQo0K678ad5rCUmKNIJjfA1R1XopTeioDg5WjtMg)![alt text](https://lh3.googleusercontent.com/N53d_HQnCpRDCtYQXtuo_PrjNBm36_HHblyGyDNKbmaFzTmgtKJASXU04K4VycPT_POP5LLB3gq6UFpC_-YD5xqp2CKJBjTyzgJFGZJxOK2vo7A5-Zrks8AmTrpXOags4AKoSlUQ)

If you wish to exit the onboarding process for any reason, click on the Esper logo six times to bring up the option to factory reset the device.

Step 12: If your Blueprint enables Google Play, Google Play Services will be updated. Be patient during this process, as it is conducted by Google and depends on their current service quality.

![alt text](https://lh5.googleusercontent.com/IW5UVyE4a5D27DwbjHH3iu1GzXS0Sm2-SKXhc1XvnGKLlAO9XPhuv53txTlJRJn1w5aE0VB3Ll37C1MLTrR6Mmsx__rLR2z0ssSRGjyF-gmayeqksrd4FMlZ7ozs_lO-0q978uQw)

Often, the device will complete onboarding without any permissions needing to be granted on the device. Occasionally, you will need to resolve permissions for Esper to modify System settings and/or Esper to draw over other applications. Please grant these permissions if prompted.

Step 13: You will now return to the Esper agent to install any Esper Enterprise applications and complete the onboarding process.

![alt text](https://lh5.googleusercontent.com/hRAkBKEJs971kHHHocyuP8Eum_x4BJAyUH39TY8miOh5fbRgBWrB678EpuILIXcZenDX6t0o_4rjhBI6nekjwGfcbu7ti7oq-_aT2w0TMFE36yZlxnq4aZzSJh4I0lIoON1l7ayZ)

Onboarding will complete and you’ll see your device set up according to your blueprint settings. In this example, we’ve onboarded the device in multi-application mode with three Enterprise applications installed from the Esper Cloud and managed Google Play enabled.

![alt text](https://lh3.googleusercontent.com/37eXrL1Z9FpOUceYZ0MUt3qL6_QZiafNeWs_pv_INteOij01xLH7PeCM9DqrR8v5ITJcnUhaWTuIN2gQCW-jmg1VO_awLMAdUScNQBQPN2kncBNT0Xjclg6E0hjWb1pjQdymsdox)