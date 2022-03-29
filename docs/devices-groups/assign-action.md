# What Actions can be Performed on the Devices in the Assign to group tab?

  

Navigate to the Directory view> Select Unmanaged Devices> Assign to Group. Click the ellipsis (...) for a selected device.

![](https://lh6.googleusercontent.com/wSNacL4kmTz4EECqO557k3FRmLRdfcf2FabA7LjXGAGCrUpIKDVoSCjzhr3Ci897CwwiHjysHD0GzKaicoOkhqJjhTjOkkfxyz4R4NJW9FRLHNZ3KMEtQnr7AHflTlgkBWli4lzq)

## Add Tags

Tags make it easy to identify devices in a specific location, type, Wi-Fi, or SSID. You can add up to 5 tags. Select Add Tags from the dropdown. You can add a new tag or select from a list of already added tags.

![](https://lh3.googleusercontent.com/f646xDX19YsJ-KiWJOccLjeszHhzHAMXX2YxwTuFMHqsQNN8evReRQq56ERxenI8J3WXN1Vycm45sQKz65h_NCxtpda3pZ6aero-h0DFiTGXx02PVhcBoc5T5owqxM3h3ub5lfV2)

Click ‘X’ to remove the existing tag. Deleting a tag will also remove it from all devices with that tag. We display a warning that the action will remove this tag from any tagged device. When a tag no longer exists on any device, it will be deleted from the dropdown.

## Move

Select Move from the drop-down. This action allows you to move a device from the director or Parent Group to another. Select the destination group from the dropdown, add optional details and click Continue.

![](https://lh3.googleusercontent.com/n6bN_LPHHqdgeexicpr20pLML_dV8BM75yMC0uxbIEw3Od5InPcNY-j8kuUuWifs_YeA_gn_-Y1vpOofA5XgUjpMVIWA7hiO4hq5ku2PmwbK52p_c-B1Kpf143ADoahw0uOAGPVl)

## Rename Device

Choosing the ‘Rename Device’ option from the dropdown allows you to select the device ID or add a Custom Alias name for the device.

![](https://lh3.googleusercontent.com/8Z5Glo_A4CJNLJtYmECJvGBps0Xzm--wt2P39ImnpcclNV7vglTm1_3GsHG9rZVQRbMPI65wuUPs7pJjFFJFjP5Nly0M9Y2v6IgN4nS0COsnvCEodpSSXP0S0bpbtyPlpnIsNsee)

  

Click Rename to change the device name.

## Lockdown

The lockdown option from the menu triggers a complete lockdown of the device. This is useful to prevent unauthorized use or relocation.

![lockdown](https://lh3.googleusercontent.com/wpR9c-EkvHsekAXBkYMLLLbY3VIw8d0l1Ipf67UiP_PcAoxka9K7CIeLDK-ywcADP8P4_wi9JtcicUGpkLpMZifZ5A91zZNldSzj5jnTm1OIaDHZD9gltzWk9Hf2xOVZONFyrkgx)

When you click Lockdown, a custom message text box appears where you can enter the text you want the device user’s to see.

![custom message](https://lh6.googleusercontent.com/83J3lMVUHbSbHTYHiNvkPuIlYa5EsqRIH2tikYW7kxlA4LOO-vkVzqoia9y2EGsprlC-7tKjWYiR_d-n3elVZ5UExpz-Q8uiex3Vi3vp74fJPG6NmP5Q6YZm70bihij2VfdtrKhh)

After the device has been locked down, the user will see the following screen.

![device](https://lh6.googleusercontent.com/GQfXgNVtkI5iY9rid4ALzQ-SYCzpE0LMKFJI4xy-oSnQi9dthDha88LEWea1Ug-Aq--aTiaSGjS650dhQt5SGgMUloXHIOVKD0yphWsAyn5x9kXyAILnzng0Jw1h30uYWecCrdkw)

After a device is locked, the button will change to Unlock to enable you to unlock the device from the Console.



## Ping Device

When you select the Ping Device, the Esper Console will attempt to ping the device. It is used when you want to check if your device is reachable or not.

## Reboot

When you click Reboot, the Esper Console will send the command to reboot the device. You can reboot the device if you are having trouble communicating with it.

## Screen Lock

When you select Screen Lock, the Esper Console will send a command to lock the screen of the device. If you have a lock screen password set up on the device this feature can be used to require the user to enter the lock screen password before they can unlock the device.

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

![Remove Device button](https://lh6.googleusercontent.com/7S3atPBMDyWeXp3E6WJEBerE6A3koGWNP4exnYauk0RFAT5rNsZF15VYh6ivuDnCUSjzK1DJsY98pQQZiYW7qCmPIS7WTUTYhBcN_-5hJzy8xfsOQhxjqv9ldE4YkUnESu8kZXv1)