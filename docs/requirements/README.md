## What Android Version is Needed?

Targeted Dedicated Devices must run Android version 4.4 KitKat (API Level 19) or above. However, with Esper, we recommend that you use devices running Android version 7.0 Nougat (API Level 24) or above.

We now support the latest Android version 10 on our platform.

We will Esper always support Development Devices running Esper Enhanced Android. Such devices open up additional features for developers when using Esper.

## What feature Does Esper Support?

## What are Esper Development Tools?

Esper gives you access to a suite of development tools you need to build, deliver, and maintain dedicated device solutions all in one place. Below is an overview of the Esper Tools:

-   [Esper Dev Portal](https://docs.esper.io/): Provides all Esper documentation in a portal that’s easy to access and use
    
-   Esper Dev Console: A developer-specific console organizing all of the Esper tools
    
-   Esper Cloud: A private Cloud dedicated to each development team
    
-   [Esper Virtual Device](https://docs.esper.io/home/esperplugin.html#esper-android-virtual-device): An emulation environment for development and verification testing use with Esper Enhanced Android. You can also use emulation in Android Studio with a stock Android image running our Esper Agent.
    
-   Esper Enhanced Android: A fortified version built with Android OS for Dedicated Devices. Adds key features for Dedicated Device needs not met by stock Android.
    
-   Esper Development Devices: Esper sourced Dedicated Devices for your test drive Esper Enhanced Android.
    
-   [Esper APIs](https://api.esper.io/): Rich API set for Dedicated Device application development, deployment, and management.
    
-   [Esper SDKs](https://docs.esper.io/home/pythonsdk.html): Available for Python—and soon for Kotlin, Java, and JavaScript
    
-   [Esper CLI](https://docs.esper.io/home/espercli.html): A unified command-line interface to the Esper APIs, provided with source code to extend it yourself.
    
-   Esper Remote Debug: Everything you need to secure remote debugging of deployed Dedicated Devices running Esper Enhanced Android.
    
-   Esper Dedicated Device Cookbooks: Available quick starts for Kiosk, POS, Restaurant, and Logistics Dedicated Device solutions.
    
-   Esper Manage Console: Use the Esper console to access Device Orchestration capabilities that elevate the MDM of dedicated devices to a whole new level.
    
-   [Esper Support](https://docs.esper.io/home/support.html): Chat, GitHub, email, and phone
    

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