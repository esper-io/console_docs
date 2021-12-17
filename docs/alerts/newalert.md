
## How to Add a New Alert?

Step 1: To create a new alert, click **New Alert**.

  

![Create Alert Button](./images/newalert/1-createalert.png)

Step 2: Select an alert type and enter a name for your new alert in the Alert Name field; then click **Next**.

![Alert name](./images/newalert/2-alertname.png)

Step 3: Set the alert condition which is specific to the alert type, then click **Next**.

*Battery Alert Condition*: You can set an alert condition for the battery percent.

![Battery Alert](./images/newalert/3-batterycondition.png)

  

*Network Alert Condition*: You can set the day, hour, and minutes to alert when the devices are offline.

:::tip
Minimum value for this alert is 5 min.
:::

![Network Alert](./images/newalert/3-networkCondition.png)

*Bluetooth Alert Condition*: You can set an alert to fire when the bluetooth is On or OFF.

![Bluetooth Alert](./images/newalert/3-bluetooth.png)

Step 4: Set the alert communication. You can have alerts sent to:

-   a single email address
    

![single email address](./images/newalert/4-alert-single.png)

-   a channel (group of emails): Selected from a list of channels created.
    

![multiple email address](./images/newalert/4-alert-channel.png)

-   Create a new email channel by clicking 'Create a New Channel.' A channel helps you create a list of email addresses.  This list is used to subscribe to alerts. 

:::tip
Channels can be created once and reused across alerts. 
:::


![Create email channel](./images/newalert/4-alert-newchannel.png)

Frequency and time interval between notifications can be set in Email Alert Frequency section. Click **Next**.

-   SNS

You can configure alerts to send to an AWS SNS topic. To receive alerts on an SNS topic, you need to configure the SNS topic.

![Create email channel](./images/newalert/4-alert-sns.png)

1.  Select SNS as the communication channel.
    
2.  Enter details of your SNS topic, including SNS topic ARN: An AWS resource identifier, AWS access key id, and secret key which has access publish to this topic.
    
For security, please create a separate user for this topic with restricted permissions that have access only to publish to this topic. 

:::tip
The access key id and secret correspond to this user.
:::


Once configured, whenever alerting condition matches, Esper will send an event to this topic. You need to configure your system to consume from this topic.

Step 6:  Click Link Devices to select devices required to be monitored for the specific alert. 

![Link device and group](./images/newalert/5-link-alert.png)

To add a group, click **Groups**, then select the group for which you’d like to see alerts, then click **Next**.

:::tip
An alert cannot be linked to a combination of devices and groups. It needs to be either only devices, or only groups.
:::

Step 7: Preview and Click **Save**. Click **Back** to make changes.

![Save alert](./images/newalert/6-preview.png)

The created alert will be seen on the alerts page.

![Alert created](./images/newalert/7-alertcreated.png)
