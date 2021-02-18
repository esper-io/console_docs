## How to Capture Logs For a Single Device?

  

This feature enables you to capture a bug report for the device.

  

![](./images/logs/135_Groups_devices_details_capture_logs.png)

  

### Generating a Bug Report of a Device From the Console

  

Step 1: To generate a report, go to the ‘Capture logs’ tab and then click on **Start**.

![](./images/logs/136_Groups_devices_details_capture_logs_start.png)

  

Step 2: As the report is gathered, the status will change from Requesting Report to Permission Granted to Download.

  

![](./images/logs/137_Groups_devices_details_capture_logs_loading.png)

  

Step 3: The Download status is a live link. Clicking on Download will download the bug report with the date and timestamp for the device to help your technical staff debug any issues.

When you request a capture log from a specific device, a notification will pop up on that device asking permission to share the report. The device user will need to swipe down the notification bar, tap the bug report line, and click Share. If the device user taps Decline, the report will not be shared and the status will change to Permission Denied by User.

**Note**: If the target device is in Kiosk mode or the notification bar has not been enabled, you will be unable to capture a bug report. Kiosk mode prevents the notification bar from being displayed and the device user will not be able to grant permission for the report. To get around this you can temporarily apply a Compliance Policy with a notification bar enabled.