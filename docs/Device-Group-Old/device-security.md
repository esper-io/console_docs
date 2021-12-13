## How to Check the Security Summary of a Single Device?

  

The Security tab shows the security risks faced by the device if any. If there are risks, it will show the threat level, cause of the threat, and provide recommendations to secure the device.

  

![Security tab](./images/9-securtiydevice.png)

  

### Security Criteria

The following are the basis on which security risks are calculated:

#### Basic Integrity

Basic Integrity gives you a signal about the general integrity of the device and its API.

Rooted devices fail basic integrity, as do emulators, virtual devices, and devices with signs of tampering, such as API hooks.

#### CtsProfileMatch

CtsProfileMatch gives you a much stricter signal about the compatibility of the device. Only unmodified devices that have been certified by Google can pass the CTS profile match. Devices that will fail CTS profile match include the following:

-   Devices that fail basic integrity
-   Devices with an unlocked bootloader
-   Devices with a custom system image (custom ROM)
-   Devices for which the manufactured didn’t apply for, or pass, Google certification
-   Devices with a system image built directly from Android Open Source Program source files
-   Devices with a system image distributed as part of a beta or developer preview program (including the Android Beta Program)
    

When this alarm is thrown, the advice parameter will provide additional information which is then displayed by Esper.

#### Security Patch Version

The last updated security patch version is used to determine if the device is up-to-date on Android security patches.

#### Calculating the Security Score

Your Esper Console will receive the above values and calculate the security state as follows:

-   If basic integrity is false, then the device is a high-risk device (<=5 points).
-   If basic integrity is true, the Console gives a little more weight to ctsProfile (3) and to Security Patch (2). if both are false (= 5 points), the device is considered medium risk.
-   If basic integrity is true, the CTS profile match is also true, and the patch version is greater than three months old, the device is considered low risk.
    

Risk classification based on points is as follows:

-   0-5 points → High Risk
-   5-7 points → Medium Risk
-   8-9 points → Low Risk
-   9-10 points → Secure
    

#### Security Check Frequency

Basic Integrity and CtsProfileMatch are calculated on three instances:

-   During provisioning
-   Every five hours thereafter
-   When requested from the Esper Console