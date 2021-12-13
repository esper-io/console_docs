## What is the Devices & Groups Section?

The Devices & Groups section enables you to manage devices and groups in one place. You can assign blueprints, manage settings for the devices or the groups, move devices/groups from one group to another, and a lot more. Once the devices are assigned to groups, you can use a single command to perform an action on all the devices in the group. You can, for example, apply a blueprint to all the devices in the group at once.

![](https://lh4.googleusercontent.com/FGT9WiVT-MYCR-X3W10Ct1hmREWSdBIiCOpS1osoYXEhGxlrtXxWHVDQWwor3WFl_kiQE7dDSbFmlHJE6TIvGOIiQCjdPgcUBw130Dx_iJQhEIx3oOnLykmEj6zLdy71v8JjZN1f)

Once your devices are enrolled to Esper or simulated devices are added, the Devices & Groups view will display all the devices and group structure.

## Nested Groups

We provide the capability of “Nested Groups”, which is essentially a hierarchical structure of groups that enhances the flexibility of taking actions on the devices. Thus introducing two more concepts:

-   Parent Group - A group at a higher level of the hierarchy. Users can create multiple parent groups at the same level.
    
-   Subgroup - A group at a lower level of hierarchy associated with a parent group. Any action intended for a parent group will be cascaded to all sub-groups.
    

You can create nested groups at any level. You can create a maximum of 5 sub-levels for any parent device group. You can create as many parents as you want. By default, there is always one super parent group named “ All Devices.” Devices are automatically added to this group unless otherwise specified during provisioning via a template. You cannot delete the “All Devices” group.

![nested devices](https://lh3.googleusercontent.com/YyS1rtndmgCpaKrbWq83yvox3mbn50GKGd5AaAfGCEz5Xz3qySCmA6fO7NGlQbjfKGI8y_R8rBcCm26pj58HhMYeB1ZyeG7d8m_puzR6mdI8Do8sAAakzdfjycPL0cD7r3UzeyMW)

