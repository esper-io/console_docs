# 6Tap Provisioning

Android devices that have Google Mobile Services (GMS) support and a camera can be enrolled and provisioned onto Esper using the Android for Work (AfW) provisioning method. The particular provisioning screens and device provisioning flow vary across Android versions, noting 6 Tap QR Code support was first delivered in Android 7. On some Android versions, primarily Android 9 and above, some of these screens may not appear at all. If you have any questions or issues with 6 Tap QR Code-based provisioning, please email us.

Tip: Device makers and carriers customize the setup process, thus it is likely you’ll encounter unique setup screens specific to your device. Generally, you can either skip or decline most of the options, noting there are a handful of system specific notifications called out in the instructions for which you’ll need to make the proper selections.
From the Provisioning Methods screen, if you select 6 Tap QR Code you will be taken step through instructions using the 6 Tap QR Code provisioning process. You can progress through these steps easily by clicking Next.


From the Provisioning Methods screen, if you select Android for Work you will be taken step through instructions using the AfW provisioning process. You may follow through these steps easily by clicking Next.

![factory reset Erase confirm](/images/provisioning/provisioning_afw.png)

The below steps are a more detailed version of the same steps provided in the Console. Be sure to have your Provisioning Template created so you can access the QR code you will use to provision your device.

<div>
<StepView
    :items="[
        { title: 'Step 1 : Begin by factory resetting your device.', image: '/images/provisioning/provisioning_afw.png' },
        { title: 'Step 2: Once the factory reset is completed, in the first setup screen select START (the button title may be a variation of getting started, setting up your device, or let’s go).', image: '/images/provisioning/provisioning_afw_start.png' }, { title: 'Step 3 : If your device does not have an active cellular data network connection, you will next need to connect the device to the internet either using the cellular or Wi-Fi. If you have a cellular device without a SIM, you may encounter this screen first. Select SKIP if you plan to use Wi-Fi. Otherwise proceed to insert your SIM with cellular data support.', image: '/images/provisioning/afw_network.png' },
        { title: 'Step 4: When presented with the Copy apps & data screen (noting on some devices this may appear after establishing a Wi-Fi connection), select Set up as new (may also be Don’t copy or another variant).', image: '/images/provisioning/afw_copy.png' },
        { title: 'Step 5: If you are using Wi-Fi complete the steps to connect to your desired access point.', image: '/images/provisioning/afw_ssid.png' },
        { title: 'Step 6: You will see a *Checking for updates…* screen that may change to *Just a sec…* and *I or Checking info…* *Please be patient* as the device is prepared for enrollment.', image: '/images/provisioning/afw_checking_updates.png' },
        { title: 'Step 7: It will take a few moments for the *Google Sign in* screen to appear. Once it does, in the Email or phone field enter afw#esper and then select Next. As a certified Google EMM partner, this is a special keyword used by the AfW provisioning process that will then start the process to enroll your device into Esper.', image: '/images/provisioning/provisioning_afw.png' },
    ]"
/>
</div>