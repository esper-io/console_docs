# What Are the Additional JSON Settings?

This page is a knowledge base for all the additional configurable settings via JSON. These settings are not available in the Console or Esper settings app on the device. 
Adding JSON can be done in Provisioning Templates on the “Settings” page, or in Blueprints in the “Settings App” section.

| Description                                                                            | JSON                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Supervisor plugin          | Comments                                                                                 |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|------------------------------------------------------------------------------------------|
| Set notification sound file to “None”                                                  | ```
{
      ""system"": [
      {
        ""key"": ""notification_sound"",
        ""value"": null
      }
    ]
}                                                                                                                                              ```                                                                                                                                                                                                                                                           | No                         | N/A                                                                                      |
| Disable accessibility shortcut for TalkBack. Ensure TalkBack itself is disabled.       | ```
{
  ""settings"": {
    ""secure"": [
      {
        ""key"": ""accessibility_shortcut_enabled"",
        ""value"": ""0""
      },
      {
        ""key"": ""enabled_accessibility_services"",
        ""value"": null
      },
    ],
 }
}
```                                                                                                                                                                                                                                                                         | Yes                        | N/A                                                                                      |
| Disable all notifications on the lock screen                                           | {  
  "settings": {
    "secure": [   
     {
        "key": "lock_screen_show_notifications",
        "value": "0"
      },    
     {  
      "key": "lock_screen_show_silent_notifications", 
      "value": "0" 19 
     } 
  ],
 } 
}                                                                                                                                                                                                                                                                                | Yes                        | N/A                                                                                      |
| Enable Airplane Mode in order to disable Wi-Fi and allow usage of an ethernet adapter. | "{
  ""settings"": {
    ""global"": [
      {
        ""key"": ""airplane_mode_on"",
        ""value"": ""1""
      }
    ]
  }
}"                                                                                                                                                                                                                                                                                                                                                                                       | Yes                        | Reboot the device to take effect.                                                        |
| Shows the software keyboard when a physical keyboard is plugged in                     | "{
  ""settings"": {
    ""secure"": [
      {
        ""key"": ""show_ime_with_hard_keyboard"",
        ""value"": ""1""
      },
  ]
}"                                                                                                                                                                                                                                                                                                                                                                                 | Yes                        | N/A                                                                                      |
| Display size or scaling                                                                | "{
  ""settings"": {
    ""secure"": [
      {
        ""key"": ""display_density_forced"",
        ""value"": ""240""
      }
    ]
  },
}"                                                                                                                                                                                                                                                                                                                                                                              | Yes                        | N/A                                                                                      |
| Hides the navigation bar at the bottom of the screen when in kiosk mode                | {
  "settings": {
    "dpcParams": [
    {
      "key": "hideNavBarInKioskMode",
      "value": "true"
    }
  ]
}                                                                                                                                                                                                                                                                                                                                                                                                        | No                         | Exclusive to EFA                                                                         |
| Set font size as large as 1.15 or as small as 0.9                                      | "{
    ""settings"": {
        ""system"": [
            {
                ""key"": ""font_scale"",
                ""value"": ""1.15""
            },
        ]
    }
}"                                                                                                                                                                                                                                                                                                                                                 | No                         | N/A                                                                                      |
| Sets the clock to 12 hrs format.                                                       | "{
    ""settings"": {
        ""system"": [
            {
                ""key"": ""time_12_24"",
                ""value"": ""12""
            }
        ]
    }
}"                                                                                                                                                                                                                                                                                                                                                    | No                         | N/A                                                                                      |
| Enable roaming data usage.                                                             | "{
  ""settings"": {
    ""global"": [
      {
        ""key"": ""data_roaming"",
        ""value"": ""1""
      }
    ]
  }
}"                                                                                                                                                                                                                                                                                                                                                                                           | Yes                        | Bluebird HF550 devices have special integration.                                         |
| Allow and block particular sites on the titanium browser.                              | "{
  ""managedAppConfigurations"": {
    ""io.esper.titanium"": {
      ""URLAllowlist"": [
        ""google.com"",
        ""https://www.google.com/?safe=active""
      ],
      ""URLBlocklist"": [
        ""*""
      ],
      ""BrowserSignin"": ""0"",
      ""PrintingEnabled"": ""true"",
      ""HomepageLocation"": ""https://www.google.com/?safe=active"",
    }
  }
}"                                                                                                                                      | No                         |                                                                                          |
| APN config                                                                             | "{
  ""dpcParams"": [
    {
      ""key"": ""addNewApnAndSetDefault"",
      ""value"": ""{\""mnc\"":\""030\"",\""mcc\"":\""310\"",\""name\"":\""ATTDEMO\"",\""apn\"":\""attiotdemo\"",\""proxy\"":\""\"",\""port\"":\""\"",\""mmsc\"":\""\"",\""mmsproxy\"":\""\"",\""mmsport\"":\""\"",\""user\"":\""\"",\""password\"":\""\"",\""authtype\"":\""-1\"",\""type\"":\""default\"",\""protocol\"":\""IPV4V6\"",\""roaming_protocol\"":\""IPV4V6\"",\""carrier_enabled\"":\""true\"",\""mvno_type\"":\""\""}""
    }
  ]
}" | Yes                        | "Requires a reboot after the Knox agreement.
For SM-T547U and AT&T M2X IoT data service" |
| Disable lock screen phone shortcut                                                     | "{
    ""dpcParams"": [
        {
            ""key"": ""hideLockscreenShortcuts"",
            ""value"": ""true""
        },
    ]
}"                                                                                                                                                                                                                                                                                                                                                                                   | No (Samsung Knox required) | Samsung only                                                                             |
| Disable Samsung Edge Screen shortcut                                                   | "{
    ""dpcParams"": [
        {
            ""key"": ""allowEdgeScreen"",
            ""value"": ""false""
        }
    ]
}"                                                                                                                                                                                                                                                                                                                                                                                           | No (Samsung Knox required) | Samsung only                                                                             |
| Application to run on a particular button press                                        | {
  "button_left": "Run application",
  "button_left_run_application": "com.android.camera2"
}                                                                                                                                                                                                                                                                                                                                                                                                                            | No                         | N/A                                                                                      |


