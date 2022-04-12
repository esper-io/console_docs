## What are the terms associated with Pipelines?

Following are the key terms related to pipelines:

_Pipeline_  - A chain of processes/functions connected in a serial manner.

_Operation_  - An operation is defined as the action to be performed. Installation of an application is an operation.

_Stage_  - Logical separation to perform any checks between the execution of an operation.

_Target_  - Destination intended for a specific operation in each stage. For instance, if the operation is installing an application, the target is the device/list of devices the application is being installed.

_Job_  - The action performed (operation) as part of a pipeline. For instance, a pipeline could have two separate jobs - for installing two different applications.

_Run_  - An instance of pipeline in execution.

_Trigger_  - A prompt to force the execution of a pipeline stage. This could be manual (prompted by a user) or automatic (prompted as a result of successful criteria like an online device).

::: tip
We currently suppport manual trigger.
:::