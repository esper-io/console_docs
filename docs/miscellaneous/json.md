# What Are the Additional JSON Settings?

This page is a knowledge base for all the additional configurable settings via JSON. These settings are not available in the Console or Esper settings app on the device. 
Adding JSON can be done in Provisioning Templates on the “Settings” page, or in Blueprints in the “Settings App” section.

 <table>
    <tr>
        <td style="width:70%">Description</td>
        <td style="width:50%">JSON</td>
        <td style="width:20%">Supervisor plugin</td>
        <td style="width:20%">Comments</td>
    </tr>
    <tr>
        <td style="width:70%">Set notification sound file to “None”</td>
        <td style="width:50%">
        "{
            ""system"": [
        {
         ""key"": ""notification_sound"",
        ""value"": null
      }
    ]
    }"
</td>
        <td style="width:20%">>No</td>
        <td style="width:20%">>N/A</td>
    </tr>
    <tr>
        <td>Disable accessibility shortcut for TalkBack. Ensure TalkBack itself is disabled.</td>
        <td>"{
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
}"</td>
        <td>Yes</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Disable all notifications on the lock screen</td>
        <td>{  
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
}</td>
        <td>Yes</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Enable Airplane Mode in order to disable Wi-Fi and allow usage of an ethernet adapter.</td>
        <td>"{
  ""settings"": {
    ""global"": [
      {
        ""key"": ""airplane_mode_on"",
        ""value"": ""1""
      }
    ]
  }
}"</td>
        <td>Yes</td>
        <td>Reboot the device to take effect.</td>
    </tr>
    <tr>
        <td>Shows the software keyboard when a physical keyboard is plugged in</td>
        <td>"{
  ""settings"": {
    ""secure"": [
      {
        ""key"": ""show_ime_with_hard_keyboard"",
        ""value"": ""1""
      },
  ]
}"</td>
        <td>Yes</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Display size or scaling</td>
        <td>"{
  ""settings"": {
    ""secure"": [
      {
        ""key"": ""display_density_forced"",
        ""value"": ""240""
      }
    ]
  },
}"</td>
        <td>Yes</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Hides the navigation bar at the bottom of the screen when in kiosk mode</td>
        <td>{
  "settings": {
    "dpcParams": [
    {
      "key": "hideNavBarInKioskMode",
      "value": "true"
    }
  ]
}</td>
        <td>No</td>
        <td>Exclusive to EFA</td>
    </tr>
    <tr>
        <td>Set font size as large as 1.15 or as small as 0.9</td>
        <td>"{
    ""settings"": {
        ""system"": [
            {
                ""key"": ""font_scale"",
                ""value"": ""1.15""
            },
        ]
    }
}"</td>
        <td>No</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Sets the clock to 12 hrs format.</td>
        <td>"{
    ""settings"": {
        ""system"": [
            {
                ""key"": ""time_12_24"",
                ""value"": ""12""
            }
        ]
    }
}"</td>
        <td>No</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Enable roaming data usage.</td>
        <td>"{
  ""settings"": {
    ""global"": [
      {
        ""key"": ""data_roaming"",
        ""value"": ""1""
      }
    ]
  }
}"</td>
        <td>Yes</td>
        <td>Bluebird HF550 devices have special integration.</td>
    </tr>
    <tr>
        <td>Allow and block particular sites on the titanium browser.</td>
        <td>"{
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
}"</td>
        <td>No</td>
        <td></td>
    </tr>
    <tr>
        <td>APN config</td>
        <td>"{
  ""dpcParams"": [
    {
      ""key"": ""addNewApnAndSetDefault"",
      ""value"": ""{\""mnc\"":\""030\"",\""mcc\"":\""310\"",\""name\"":\""ATTDEMO\"",\""apn\"":\""attiotdemo\"",\""proxy\"":\""\"",\""port\"":\""\"",\""mmsc\"":\""\"",\""mmsproxy\"":\""\"",\""mmsport\"":\""\"",\""user\"":\""\"",\""password\"":\""\"",\""authtype\"":\""-1\"",\""type\"":\""default\"",\""protocol\"":\""IPV4V6\"",\""roaming_protocol\"":\""IPV4V6\"",\""carrier_enabled\"":\""true\"",\""mvno_type\"":\""\""}""
    }
  ]
}"</td>
        <td>Yes</td>
        <td>"Requires a reboot after the Knox agreement.
For SM-T547U and AT&amp;T M2X IoT data service"</td>
    </tr>
    <tr>
        <td>Disable lock screen phone shortcut</td>
        <td>"{
    ""dpcParams"": [
        {
            ""key"": ""hideLockscreenShortcuts"",
            ""value"": ""true""
        },
    ]
}"</td>
        <td>No (Samsung Knox required)</td>
        <td>Samsung only</td>
    </tr>
    <tr>
        <td>Disable Samsung Edge Screen shortcut</td>
        <td>"{
    ""dpcParams"": [
        {
            ""key"": ""allowEdgeScreen"",
            ""value"": ""false""
        }
    ]
}"</td>
        <td>No (Samsung Knox required)</td>
        <td>Samsung only</td>
    </tr>
    <tr>
        <td>Application to run on a particular button press</td>
        <td>{
  "button_left": "Run application",
  "button_left_run_application": "com.android.camera2"
}</td>
        <td>No</td>
        <td>N/A</td>
    </tr>
</table>

