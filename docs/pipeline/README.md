## What is a Pipeline?

Esper Pipelines enable you to ensure the smooth completion of actions on large fleets of devices by providing a way to automate them. Using a pipeline you define the stages through which the actions must be complete and the events that trigger each of those stages, providing an effective way to control complex or large processes.

Esper Pipelines currently supports application installation. It requires the user to manually promote to the next stage.

A new pipeline can be created with a maximum of 3 stages using the Console (You can create more than 3 stages via the Esper API). Create a new job that will indicate the operation (application install in this case) and corresponding application/version.

Start a new run to initiate a pipeline - you can choose to update the application version to be installed before starting a new run. A Run can be started, paused, resumed, or terminated.

Any pipeline can have multiple jobs created, and each job can have multiple runs (only one run active at a time) associated with it.

![pipeline main screen](https://onboarding-esper.netlify.app/assets/img/main-pipeline.22b61e8f.png)

The landing page displays a summary of all the Pipeline runs for the enterprise. Click the ellipsis for a particular run to view the pipeline or cancel a run. The Pipelines tab displays all the pipelines created for the enterprise. You can also create a new pipeline.
