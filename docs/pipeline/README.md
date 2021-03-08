## What are Pipelines?

Esper Pipeline enables you to ensure smooth completion of actions on large fleets of devices by providing a way to automate them. Using a pipeline you define the stages through which the actions must go and the events that trigger each of those stages, providing an effective way to control complex or large processes.

Esper Pipeline currently only supports application installation and requires the user to manually promote to the next stage. Clicking on a new pipeline will create a default pipeline for you, with three stages. You only need to update the target device(s) or group(s) to make it ready to use. You can create one or more jobs for each pipeline and select the corresponding operation. In this case, Application Installation is the operation and the particular application version. Following are the key terms related to pipelines:


*Pipeline* - A chain of processes/functions connected in a serial manner.

*Operation* - An operation is defined as the action to be performed. Installation of an application is an operation.

*Stage* - Logical separation to perform any checks between the execution of an operation.

*Target* - Destination intended for a specific operation in each stage. For instance, if the operation is the installation of an application, the target is the device/list of devices the application is to be installed in.

*Job* - A job defines the action to be done (operation) as part of a pipeline. For instance, a pipeline could have two separate jobs - one for application installation, another for DPC updates.

*Run* - An instance of pipeline in execution.

*Trigger* - A prompt to force the execution of a pipeline stage. This could be manual (prompted by a user) or automatic (prompted as a result of successful criteria like an online device).

A new pipeline (base) can be created with three default stages using the Console (more than 3 can be done via the Esper CLI). Create a new Job that will indicate the operation (Application Install in this case) and corresponding application/version.

Start a new Run to initiate execution of a pipeline - the user can choose to update the application version to be installed before starting a new run. A Run can be started, paused, resumed, or terminated. 

Any pipeline could have multiple jobs created and each job could have multiple runs (only one active at a time) associated with it.

![](./images/main-pipeline.png)