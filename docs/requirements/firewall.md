# What are the Firewall Requirements?

Dedicated devices are often behind corporate firewalls, preventing Esper's backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports if your fleet runs behind such a firewall.

| FQDNs                                 | Ports                           | Features                                                                                 |
|---------------------------------------|---------------------------------|------------------------------------------------------------------------------------------|
| *.amazonaws.com                       | 443 and 8883                    | For provisioning, app management and device management                                   |
|  mqtt.shoonyacloud.com |       1883                  | For MQTT communication with devices                                                          |
| mqtt2.shoonyacloud.com                | 1883                            | For MQTT communication with devices                                                          |
| services.shoonyacloud.com           | TCP: 80 (HTTP), 443 (HTTPS)     | Provisioning services and Remote Viewer APK                                        |
| turn.shoonyacloud.com              | TCP: 3478, 5349                | For Remote Viewer and Remote Control services                                                            |
| dpcdownloads.esper.cloud              | UDP: 3478, 5349, 49152 - 65535 | For the 6-tap QR code method of provisioning and Remote Viewer APK                       |
| [customer endpoint].esper.cloud       | N/A                             | For Esper Console                                                                        |
| [customer endpoint]-api.esper.cloud   | TCP: 443                        | For communicating from the device to the Esper Endpoint. (example: device status events and command success/failure messages) |
| mqtt-telemetry-prod.esper.cloud       | 1883                        | Deep telemetry from devices                                                              |
| N/A           | 13.52.132.230 Port range: 40000 - 50000 | For allowing secure remote ADB access to your devices                       |
| firebaseinstallations.googleapis.com and fcm.googleapis.com| 1883                            | Backup channel, also used for ping command to wake up a device (Only for GMS devices)       |


:::tip
For static IP, please get in touch with the [Esper team](https://support.esper.io/s/).
:::


  