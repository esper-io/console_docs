# How to Deploy an Esper Agent Version to the Device Fleet?

You need to use a pipeline to automatically deploy the selected Esper Agent Version to your device fleet. Pipelines allow the user to properly stage, test, and deploy Esper Agent updates before updating their whole fleet. You can select a templated pipeline from:

1.  Latest Releases and the Version History tab


![latest releases list](./images/deploy/1-latest.png)
    
2.  Installed Versions
    

![installed version list](./images/deploy/2-installed.png)

Select the device count and version you want to update to and click the corresponding arrow. This will launch a templated pipeline experience with pre-filtered devices.

  

![select devices](./images/deploy/3-selectDevices.png)

By default, the template pipeline will have one stage. You can add more stages to stagger Esper Agent install on your device fleet— max of 3 stages. When ready, click **Continue**. Enter the optional fields and/or click **Test or Apply to Select Devices.**

 ![fill out optional info](./images/deploy/4-optionalInfo.png) 



Select Run to execute the pipeline now.

![run pipeline](./images/deploy/5-run.png)

