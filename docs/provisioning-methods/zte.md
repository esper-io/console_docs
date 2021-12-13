# How to Onboard a Device Using ZTE?

Zero-touch Enrollment (ZTE) is an onboarding method offered by Google for the [selected devices](https://androidenterprisepartners.withgoogle.com/devices). Upon first boot or factory reset, ZTE forces Android devices to enroll into Esper. Follow the steps below to onboard a device using ZTE.

  

Step 1: Navigate and log in to the [Zero-touch Enrollment (ZTE) portal](https://partner.android.com/zerotouch).

Step 2: You will be taken to the Configuration tab.

  

![](https://lh3.googleusercontent.com/Uc5p99Di_KxcaSm3MeIOjn1988zduPozO7yS3iEr_OtAEiqnY7HNHiOguLW1XGfEiiEk1PAbdI7psPSAGUObTZH8x1BA_CsKFbHD3dtbe-dCqkJsE4UMZxB3I28ch-BQubaI3bhE)

Here you will be able to create a configuration to associate with a device.

Step 3: Click the ‘+’ symbol to add a new configuration.

Step 4: On the pop-up, enter the details— configuration name and EMM DPC (Esper Device Management). Enter your organization’s information for the company name, support email address, support phone number.

![](https://lh3.googleusercontent.com/xjU5a7woymxttXNg9ub6zRIs-2FZnwsqdDSCJptVmNMxWwVi3uHjyer3rEaKK_N-w3MTTFJsp1m_r6LV-hOzIpvKKJTCWXbEgrDnFa8UtLQRrodHZShy4c9DDuQHa1WV11IWN-Il)

To enter the DPC extras, navigate to the Esper Console.

![](https://lh3.googleusercontent.com/rTSGZf4ODy9BqHyYfvpB4fci41e4jtHm1x1dfBzjVgu1uNnQiOXraOZdtiX4o-R3l10HGHocYFHui7eSiNFjPIuEUb4mdSpHbrudmkSM6F7GFfAIkWgcd8JEFhVDrC858GUf19lG)

Copy the following contents from the downloaded Config file and paste it into the DPC extras. Click ADD.

"android.app.extra.PROVISIONING_LEAVE_ALL_SYSTEM_APPS_ENABLED": true,

"android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE": {

"templateUrl": "https://{your-endpoint-name}-api.esper.cloud/api/v0/enterprise/{your-enterprise-id}/devicetemplate/17/",

"authToken": "{your-auth-token}",

"groupUrl": "https://{your-endpoint-name}-api.esper.cloud/api/enterprise/{your-enterprise-id}/devicegroup/bb170524-14ad-463a-9120-8060a7c0c9dc/?format=json",

"enterpriseId": "{your-enterprise-id}",

"environment": "https://{your-endpoint-name}-api.esper.cloud",

"provisionType": "QR_CODE"

}

  

Step 5: The added configuration will be displayed on the Configuration tab.

![](https://lh3.googleusercontent.com/JJFsZnVE54pZGmCKjoR2_uwUAUyDKoTfxH2BRgHAU0hAyna3MxZgh8YmNJz-yL8OwZRP809qTTGn5VVf77hg9DNDuTc1e99FuWltxdboX-V1194nndAfAoN6K4wC98msGmvtE4sg)

Step 6: Now, you need to add the configuration to the device. Navigate to the device tab. Here all the devices added by the reseller are displayed with no configuration.

![](https://lh6.googleusercontent.com/J9OMEXRDOTrYd1HxWYz_iAl5nl6y6t9FNGQj4SHoA14MOXIOv9aY4H9K8n84_ow6QPW7LKeRBUgbSHSJ-cLsXjsGnbAMzg9Fx7-yayz8DpXEnKGeB_69Ah8LdsRFREvSD7WCY9J9)

Step 7: Select the device you want to associate a configuration. Click on the dropdown and choose the configuration.

![](https://lh6.googleusercontent.com/MRtwKWNB-U2wCuwzTLiHFQ05GJ8bMB7i_4XZTWkrowS8PbRQYCECn45pJjNbC3KP1qdK9mToWvcIobq6kYTRmIY_1kob2eoKC6dBXzhDs0KHlDcuxDji1UXzVn9gs4XIVjBXD4Sk)

Step 8: Confirm your choice, and the device will be associated with the configuration.

![](https://lh4.googleusercontent.com/HopKdvnYn3A29Tm7-8lf8ITZOwBgoyloegpeWPpz2rjll2N1AzCM1j8yFDsnD7Ldbbs7RoRa9VIjzbjh41IEXusM-fanp3sJz0F07l3j9a4t7PDw7RiolWZDiKVuJragh-TKiKTn)

When you factory reset the device, you will go through the Android standard setup process. Suppose you connect to the internet during this setup process, the Zero-touch profile will be found. It will automatically start the provisioning process after a few license/onboarding prompts.

Note: You can assign a configuration to multiple devices at a time. Navigate to the Device section for bulk upload and choose ‘Upload batch configurations’ from the menu.

![](https://lh3.googleusercontent.com/Y6OSXGr4holvSEubo_zL3pXh5YZ5Iqwv2W8farOhL1dalL9xXXgoIrrBHW5NGTOaVXPa9oRYf_j3qqSq0wk69SHDeqS0UpTMHjly6qUHRd6EIEZGYhpqbPKc4jh8XBaQlFcY2Ko0)

Download an example from the pop-up, associate a configuration, and upload a CSV file.

![](https://lh5.googleusercontent.com/RQKRhBT0sn6sQZsCYoq5AEO5dCULr7t6O9d1Za9k8DuNv2hSxuZlar9dI4VxfQPyF7y8wVrKY00OegJrUGGCftVZE0i6sTKtMK1vnsXxiRSsO1FC_QoeIonDpmvsWgYCtH6_zd3z)