# What are the Firewall Requirements?

Dedicated devices are often behind corporate firewalls, preventing Esper's backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports if your fleet runs behind such a firewall.

| FQDNs                                 | Ports                           | Features                                                                                 |
|---------------------------------------|---------------------------------|------------------------------------------------------------------------------------------|
| *.amazonaws.com                       | 443 and 8883                    | For provisioning, app management and device management                                   |
|  [mqtt.shoonyacloud.com:1883](http://mqtt.shoonyacloud.com:1883/)  |                         | Backup device managemnt channel                                                          |
| mqtt2.shoonyacloud.com                | 1883                            | Backup device managemnt channel                                                          |
| [services.shoonyacloud.com]           | TCP: 80 (HTTP), 443 (HTTPS)     | IMEI/ Seamless provisioning and remote viewer APK                                        |
| [turn.shoonyacloud.com](http://turn.shoonyacloud.com/)               | "TCP: 3478, 5349                | For remote viewer and control                                                            |
| dpcdownloads.esper.cloud              | UDP: 3478, 5349, 49152 - 65535" | For the 6-tap QR code method of provisioning and Remote viewer APK                       |
| [customer endpoint].esper.cloud       | N/A                             | For Esper Console                                                                        |
| [customer endpoint]-api.esper.cloud   | TCP: 443                        | For communication from device to cloud (device status event and command success/failure) |
| mqtt-telemetry-prod.esper.cloud       | 1883                        | Deep telemetry from devices                                                              |
| firebaseinstallations.googleapis.com and fcm.googleapis.com| 1883                            | Backup channel and used for ping command to wakeup a device (Only for GMS devices)       |


:::tip
For static IP, please contact [Esper team](https://support.esper.io/s/).
:::


  