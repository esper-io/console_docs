## What Android Version is Needed?

Targeted Dedicated Devices must run Android version 4.4 KitKat (API Level 19) or above. However, with Esper, we recommend that you use devices running Android version 7.0 Nougat (API Level 24) or above.

We now support the latest Android version 10 on our platform.

We will Esper always support Development Devices running Esper Enhanced Android. Such devices open up additional features for developers when using Esper.

## What feature Does Esper Support?

## What are the Firewall Requirements?

Dedicated devices are often behind corporate firewalls, preventing the Esper backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports if your fleet runs behind such a firewall.

### URLs

-   *.amazonaws.com
    
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
    

## What’s next?

-   To understand system requirements, see Requirements.
    
-   To get started, see Getting Started Guide.
    
-   Checkout Esper APIs documentation
    
-   Checkout Esper SDK on GitHub
    
-   Checkout Esper CLI, a command-line tool for accessing APIs
    
-   To learn more about Esper, visit esper.io
   
 
You can also send us an email at  mailto:support@esper.io  for any questions or concerns.