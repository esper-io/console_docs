# What Are the Additional JSON Settings?

This page is a knowledge base for all the additional acessibility settings via JSON. These settings are not available in the Console or Esper settings app on the device.
Adding JSON can be done in Provisioning Templates on the “Settings” page, or in Blueprints in the “Settings App” section.

<div class="scrollit">
    <table>
        <tr>
        <th>Description</th>
        <th>JSON</th>
        <th>Supervisor plugin</th>
        <th>Comments</th>
        </tr>
        <tr>
            <td>The Accessibility Menu provides a large on-screen menu to control your phone. You can lock your phone, control volume and brightness, take screenshots, and more.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "secure": [
            {
                "key": "accessibility_enabled",
                "value": "1"
            },
            {
                "key": "enabled_accessibility_services",
                "value": "com.google.android.marvin.talkback/com.google.android.accessibility.accessibilitymenu.AccessibilityMenuService"
            },
            {
                "key": "accessibility_button_targets",
                "value": "com.google.android.marvin.talkback/com.google.android.accessibility.accessibilitymenu.AccessibilityMenuService"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>Not recommended for use with Esper as it exposes additional shortcuts that you may not want available to the user.</td>
        </tr>
 <tr>
            <td>When Select to Speak is on, you can tap specific items on your screen to hear them read aloud.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "secure": [
            {
                "key": "accessibility_enabled",
                "value": "1"
            },
            {
                "key": "enabled_accessibility_services",
                "value": "com.google.android.marvin.talkback/com.google.android.accessibility.selecttospeak.SelectToSpeakService"
            },
            {
                "key": "accessibility_button_targets",
                "value": "com.google.android.marvin.talkback/com.google.android.accessibility.selecttospeak.SelectToSpeakService"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
 <tr>
            <td>Switch Access lets you interact with your Android device using one or more switches instead of the touchscreen. Switch Access can be helpful if you can’t interact directly with your device. Use switches to select items, scroll, type, and more. 
Default shortcuts:

-Press and hold both volume buttons to turn on or off

-Swipe up with three fingers to turn on, two fingers to turn off</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "secure": [
            {
                "key": "accessibility_enabled",
                "value": "1"
            },
            {
                "key": "enabled_accessibility_services",
                "value": "com.google.android.marvin.talkback/com.android.switchaccess.SwitchAccessService"
            },
            {
                "key": "accessibility_button_targets",
                "value": "com.google.android.marvin.talkback/com.android.switchaccess.SwitchAccessService"
            },
            {
                "key": "accessibility_soft_keyboard_mode",
                "value": "2"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>When Talkback is on, it provides spoken feedback so that you can use your device without looking at the screen. Talkback is intended for situations or people who have difficulty seeing the screen.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
To add Shortcut:
{
    "settings": {
        "secure": [
            {
                "key": "accessibility_button_targets",
                "value": "com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService"
            },
            {
                "key": "accessibility_shortcut_target_service",
                "value": "com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService"
            }
        ]
    }
}

To activate:
{
    "settings": {
        "secure": [
            {
                "key": "accessibility_enabled",
                "value": "1"
            },
            {
                "key": "enabled_accessibility_services",
                "value": "com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService"
            },
            {
                "key": "accessibility_soft_keyboard_mode",
                "value": "0"
            },
            {
                "key": "show_ime_with_hard_keyboard",
                "value": "0"
            },
            {
                "key": "touch_exploration_enabled",
                "value": "1"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>Make the items on your screen smaller or larger. Some apps on your screen may change position.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "secure": [
            {
                "key": "display_density_forced",
                "value": "360"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>Requires reboot to take effect.
To set: 204 (small), none (default), 300 (large), 360 (largest)</td>
        </tr>
<tr>
            <td>Quickly zoom in on the screen to display content more clearly.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
"{
    ""settings"": {
        ""secure"": [
            {
                ""key"": ""accessibility_button_targets"",
                ""value"": ""com.android.server.accessibility.MagnificationController""
            }
        ]
    }
}"
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>The color correction allows you to adjust how colors are displayed on your device.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
"To add shortcut:
{
    ""settings"": {
        ""secure"": [
            {
                ""key"": ""accessibility_button_targets"",
                ""value"": ""com.android.server.accessibility/Daltonizer""
            }
        ]
    }
}

To activate: 11 (Protanomaly), 12 (Deuteranomaly), 13 (Tritanomaly)

{
    ""settings"": {
        ""secure"": [
            {
                ""key"": ""accessibility_display_daltonizer_enabled"",
                ""value"": ""1""
            },
            {
                ""key"": ""accessibility_display_daltonizer"",
                ""value"": ""12""
            }
        ]
    }
}

"
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>Color inversion turns light screens dark. Color inversion reverses the color on the screen, and applies to everything including media.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
"Add shortcut:


{
    ""settings"": {
        ""secure"": [
            {
                ""key"": ""accessibility_button_targets"",
                ""value"": ""com.android.server.accessibility/ColorInversion""
            }
        ]
    }
}
To activate: (also affected are secure settings “qs_auto_tiles” and “sysui_qs_tiles” which may not be important with Esper)


{
    ""settings"": {
        ""secure"": [
            {
                ""key"": ""accessibility_display_inversion_enabled"",
                ""value"": ""1""
            }
        ]
    }
}"
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>You can make the mouse pointer bigger so it's more noticeable.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
"{
    ""settings"": {
        ""secure"": [
            {
                ""key"": ""accessibility_large_pointer_icon"",
                ""value"": ""1""
            }
        ]
    }
}"
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>You can turn off animations to help you focus.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "global": [
            {
                "key": "animator_duration_scale",
                "value": "0"
            },
            {
                "key": "transition_animation_scale",
                "value": "0"
            },
            {
                "key": "window_animation_scale",
                "value": "0"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>Autoclick works with a connected mouse. You can set the mouse cursor to click automatically when the cursor stops moving for a certain amount of time.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
To set:

In milliseconds, 200-1000 (0.2 seconds-1 second)


{
    "settings": {
        "secure": [
            {
                "key": "accessibility_autoclick_enabled",
                "value": "1"
            },
            {
                "key": "accessibility_autoclick_delay",
                "value": "200"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>Settings UI may not accurately reflect this being set.</td>
        </tr>
<tr>
            <td>When this accessibility setting is on, the screen automatically rotates when you move your device between portrait and landscape position. If you're using TalkBack, you might want to turn off auto-rotate, since rotating the screen can interrupt spoken feedback.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "system": [
            {
                "key": "accelerometer_rotation",
                "value": "1"
            },
            {
                "key": "hide_rotation_lock_toggle_for_accessibility",
                "value": "0"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>No</td>
            <td>Reverse the values to disable screen rotation.</td>
        </tr>
<tr>
            <td>This setting adjusts the amount of time before your tap on the screen becomes a touch & hold.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
To set:

400 (default, short), 1000 (medium), 1500 (long)


{
    "settings": {
        "secure": [
            {
                "key": "long_press_timeout",
                "value": "1000"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>You can choose how long to show messages that ask you to take action, but are visible only temporarily.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
To set:

0 (default), 10000 (10 seconds), 30000 (30 seconds), 60000 (1 minute), 120000 (2 minutes)


{
    "settings": {
        "secure": [
            {
                "key": "accessibility_interactive_ui_timeout_ms",
                "value": "10000"
            },
            {
                "key": "accessibility_non_interactive_ui_timeout_ms",
                "value": "10000"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>Yes</td>
            <td>N/A</td>
        </tr>
<tr>
            <td>You can turn on or off the vibration for ringing, notifications, and touch.</td>
            <td>
            <div class="language-json">
                <pre class="language-json" style="max-width:300px;">
                <code>
{
    "settings": {
        "system": [
            {
                "key": "vibrate_when_ringing",
                "value": "0"
            }
        ]
    }
}
</code>
    </pre>
    </div>
            </td>
            <td>No</td>
            <td>N/A</td>
        </tr>
 </table>
</div>
