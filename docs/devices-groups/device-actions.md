# What are the Actions Available for the Device?

On the device view, clicking on the ellipsis will open you a list of options to perform on the device.

![](https://lh6.googleusercontent.com/XKux8uttzJJ0ZDpMY3KAKnU8EQneDxuVG5Uub5ntuU4az3QL5GYnDA_oRTN3PF3tO-3FD2bUzGwCOA5tgboMeEP6xbMoJFpFxjxUp1IbGArLk6bdrI6Ijy0qJHJ2aVT86yVDSLr7)

## Move

You can move the device from the existing group to another. Select the Move option from the drop-down. On the pop-up, choose the target Group.

![](https://lh6.googleusercontent.com/dGNcNbrqTRT_ez65PxLBS9easRKWBb_YTM2jIUwaExA3i-SxXBo62CZsJ6dSoKgoY3TcOPTKbyPJoVCET0yrl6hVcU8Pzlc1C7kxtV6Bfgr7CZj-HpjDV2jb6JVOBeNi_os3-P_F)

Add the optional alias, sequence, and tags and click ‘Submit’. When successful, the device will be moved to the target Parent Group.

## Add Tags

Tags make it easy to identify devices in a specific location, type, Wi-Fi, or SSID. You can add upto 5 tags. Select Add Tags from the dropdown. You can add a new tag or select from a list of already added tags.

![](https://lh6.googleusercontent.com/Qtm7EnWsOi-9l-LMA0VjvwR7wpDq63HMtsE8E_AO0XlVEfepVM1EGwKZpXnjib17nrD0DSVK3x2tZ4ktrUQuFjKeqBm_lD50BSmXkHKqLbx-r2HPwPzQ9NOVmYumlFN0_CP92o1B)

Click ‘X’ to remove the existing tag. Deleting a tag will also remove it from all devices with that tag. We display a warning that the action will remove this tag from any tagged device. When a tag no longer exists on any device, it will be deleted from the dropdown.

## Rename Device

Choosing the ‘Rename Device’ option from the dropdown allows you to select the device ID or add a Custom Alias name for the device.

![](https://lh6.googleusercontent.com/70vszMYraNfO2wsogNwvsVKggcXO4nuqYjBiPc0mKFPQ-eoSnjdkIlwU5qXwkIvbMIKVhxxqiTcsrqsVLJhRMHxSUGaUo_YOhEELYy1RaVubcdwZ8g1ohQOcWbzyclMiDN7AZu0Y)
 

Click Rename to change the alias name.

:::tip

You cannot change the device Id. When you rename a device, you are adding an alias name.
:::

## Lockdown

The lockdown option from the menu triggers a complete lockdown of the device. This is useful to prevent unauthorized use or relocation.

![lockdown](https://lh6.googleusercontent.com/QMP3UQHDQ4RWSa5Vnil9Aowk_ms8wDVQ5kOg3rk6mrS8aluQ9Y3XWba37DJZiza9wn1cwNe0buzHIl5ZNjQna2aavkRvaDe9lkvI9I8B0un25XJIm8atS1t7nBS0fF7pR6Val-g2)

When you click Lockdown, a custom message text box appears where you can enter the text you want the device user’s to see.

 ![custom message](https://lh6.googleusercontent.com/-LbTcKvYY1CJNtS6dWTqfrYGfZTL53CHv8OgiuSJgFyDoFzfqkJyNNizPRy5eOatAsjZg5CgTW_tpL9sj1MRc_N1xLsIxMLRd5f-epid-cBjSPYR8F7lUEbORk9FgyxQEV019P3e)

After the device has been locked down, the user will see the following screen.

![device](https://lh3.googleusercontent.com/5F9jAPzNQmGE1i4q0UXomoXelUM-QAZ2i_QiNByMpGQySXORlQ2TfI8-ldy7ZfUyevhty4fU_EsEjExgFFVmnffBy5L6L7gmylb7lwJSLayY4neugV4-E1UQHvQ6c16IFfh2yPaf)

After a device is locked, the button will change to Unlock to enable you to unlock the device from the Console.

## Ping Device

When you select the Ping Device, the Esper Console will attempt to ping the device. It is used when you want to check if your device is reachable or not.

## Reapply Blueprint

When you select Reapply Blueprint, this reapplies the device’s associated blueprint. So all settings defined in the blueprint will get pushed to the device.

  

## Reboot

When you click Reboot, the Esper Console will send the command to reboot a device. You can reboot your device if you are having trouble communicating with the device.

## Screen Lock

When you select Screen Lock, the Esper Console will send the command to lock the screen of the device. You can lock your device screen whenever you notice any suspicious activity.

  

## Send Message


Send message allows you to send a message to the selected device. Select the device you want to send a message to, click the ellipsis and choose “Send Message”.

Enter the subject and the body of the message. You can also include an optional link. You need to enter the end date and time for the message. For devices at a different location, you can reference the date and time from the device or the Console. The Console will not send the message after the specified end date and time.

![message details](https://lh4.googleusercontent.com/sJqs1k0f2eIfZI7FuxGbSV5C23Qfv4KIZUAOzoWeAwNMfjaUSleokJLyOHSWL91RU5Kfhu06WU9aaS2kEOImx54tlKhB8IOZ3ZwL0fjmU9u5xBw9Z5yyYm1rAZw1lFUWLuzJci8L)

The message is sent only to the online devices immediately. The system will attempt to send the message to offline devices till the specified end time.

When you select the ‘Schedule Delivery’ checkbox, you will be prompted to enter the start date and the time. You can choose the date and time to correspond with the Console time zone or the device time zone.

![Scheduled delivery](https://lh3.googleusercontent.com/ekAZfm4YDiKm0CcfryHkcJG-YY6MbxsDW4V5IxT2U3YnqZ5QUMwVBJzNYwEUFHnAIqL9pglLTTTw8d1NdWoE6bPGxV-6cCvBlK-6LtPHrpJNR2lhU6CojgC6z0zn4stfdO1OS6n2)

Click Send Message when you are ready to send the message. Clicking Cancel will take you back to the Unmanaged Group screen.

## Remove / Factory Reset Device

Users will have an option to remove devices from the Esper Dashboard. There is a checkbox for ‘Delete approval of directory record’ and for ‘Wipe external device.’ If you do not select either option, the Console will factory reset your device.

If you select the ‘Wipe external device’ option, the device will be wiped and removed immediately from the dashboard if it’s online. For offline devices, our system will wait for it to come online for the next 24 hours and if it does, the Console will wipe and remove the device. If it doesn't come online in 24 hours, then the device will be removed from the Console only between 24 to 36 hours.

If the device user executes a factory reset directly on the device, the device will still appear in your Esper Endpoint as an offline device. If you re-provision the same device on your Esper Endpoint, it will keep the same Device ID, but you will need to re-enter the custom alias and any tags you previously added for the device.

If you select the ‘Delete approval of directory record’ option, the directory record is deleted.

![Remove Device button](https://lh4.googleusercontent.com/IzAf_2XdfpU_uPWoPnZJLFpGJlmGHxbDdiqoyY4k89VrH6xDJA84Jlxo1K80UlM5qNr25mVhk-AWQqjkiR6CkPx85KlVukMJ3H0ofvGzx_z8yufTE_aSr-k3zyEY8Ip23z0Mo7U1)