## What are the Different Types of User Roles and Access Controls?

There are four user roles for the Esper Console: Enterprise Administrator, Enterprise Viewer, Group Administrator, and Group Viewer. When setting up a group, be mindful that each role has different permissions. Enterprise Administrators have the highest level of permissions and can view or change most of the settings. In contrast, a Group Viewer has far fewer permissions. These users need permissions to view tasks for the devices and groups. The privileges and permissions for each role are as follows:

|                             |  Enterprise Admin  |  Enterprise Viewer |             Group Admin             |                 Group Viewer                |
|-----------------------------|:------------------:|:------------------:|:-----------------------------------:|:-------------------------------------------:|
| Alerts                      | Read, Write Access |     Read access    |             Read access             |                 Read access                 |
| Apps/Play for Work          | Read, Write Access |     Read access    |             Read access             |                 Read access                 |
| Compliance Policy           | Read, Write Access |     Read access    |             Read access             |                 Read access                 |
| Dashboard                   | Read, Write Access |     Read access    |             Read access             | Read access(for devices in assigned groups) |
| Device views                | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Device Apps                 | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Device Compliance Policies  | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Device Capture logs         | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Geofencing                  | Read, Write Access |     Read access    |                  No                 |                      No                     |
| Group views                 | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Group settings and policies | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Group apps                  | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Group OS updates            | Read, Write Access |     Read access    | Yes, for devices in assigned groups | Read access(for devices in assigned groups) |
| Pipeline                    | Read, Write Access |     Read access    |             Read access             |                 Read access                 |
| Esper Software updates      | Read, Write Access |     Read access    |             Read access             |                 Read Access                 |
| API key management          | Read, Write Access | Read, Write Access |          Read, Write Access         |              Read, Write Access             |
| Provisioning                | Read, Write Access |     Read access    |          Read,Write access          |                      No                     |
| Reports                     | Read, Write Access |     Read access    | Yes, for devices in assigned groups |                      No                     |
| User management             | Read, Write Access |         No         |                  No                 |                      No                     |
| Company settings            | Read, Write Access |         No         |                  No                 |                      No                     |
