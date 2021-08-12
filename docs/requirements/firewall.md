## What are the Firewall Requirements?

Dedicated devices are often behind corporate firewalls, preventing Esper's backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports if your fleet runs behind such a firewall.

### URLs

-   *.amazonaws.com (443 and 8883)
-   [mqtt.shoonyacloud.com:1883](http://mqtt.shoonyacloud.com:1883/) (device telemetry/management)
-   [customer endpoint].esper.cloud:443
-   [customer-endpoint]-api.esper.cloud
-   [turn.shoonyacloud.com](http://turn.shoonyacloud.com/)
-   13.52.132.230 (required only if you want to allow secure remote ADB access to your devices)
    

For customers that are provisioning devices behind a firewall, there are a few additional URLs to allow:

-   dpcdownloads.esper.cloud
-   [downloads.esper.io](http://downloads.esper.io/)
-   [services.shoonyacloud.com](http://services.shoonyacloud.com/) (only for serial number-based provisioning)
    

### Ports

-   5228 
-   5229 
-   5230

-   3478, 5349 [TCP] (For TURN Server)
-   3478, 5349, 49152 - 65535 [UDP] (For TURN Server)
  