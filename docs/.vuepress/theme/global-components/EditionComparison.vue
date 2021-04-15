<template>
  <table>
    <tbody>
      <fragment v-for="(feature, index) in features" :key="index">
        <tr v-if="feature.category" class="category">
          <td class="feature">
            <b>{{ feature.category }}</b>
          </td>
          <td class="edition">Android 4.4 (KitKat)</td>
          <td class="edition">Android 5.0 (Lollipop)</td>
          <td class="edition">Android 5.1 (Lollipop MR1)</td>
          <td class="edition">Android 6.0 (Marshmallow)</td>
          <td class="edition">Android 7.0 (Nougat)</td>
          <td class="edition">Android 7.1 (Nougat MR1)</td>
          <td class="edition">Android 8.0 (Oreo)</td>
          <td class="edition">Android 8.1 (Oreo MR1)</td>
          <td class="edition">Android 9.0 (Pie)</td>
          <td class="edition">Android 10</td>
        </tr>
        <tr v-for="item in feature.items" :key="item.name">
          <td>
            <span>{{ item.name }}</span>
            <info-hud v-if="item.info" class="info">
              <span class="smaller">{{ item.info }}</span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an044 === rowItems.supported"
              label="supported in Android 4.4"
            />
            <info-hud v-if="item.an044 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an044 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an050 === rowItems.supported"
              label="supported in Android 5.0"
            />
            <info-hud v-if="item.an050 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an050 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an051 === rowItems.supported"
              label="supported in Android 5.1"
            />
            <info-hud v-if="item.an051 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an051 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an060 === rowItems.supported"
              label="supported in Android 6.0"
            />
            <info-hud v-if="item.an060 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an060 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an070 === rowItems.supported"
              label="supported in Android 7.0"
            />
            <info-hud v-if="item.an070 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an070 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark v-if="item.an071" label="supported in Android 7.1" />
            <info-hud v-if="item.an071 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an071 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an080 === rowItems.supported"
              label="supported in Android 8.0"
            />
            <info-hud v-if="item.an080 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an080 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an081 === rowItems.supported"
              label="supported in Android 8.1"
            />
            <info-hud v-if="item.an081 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an081 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an090 === rowItems.supported"
              label="supported in Android 9.0"
            />
            <info-hud v-if="item.an090 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an090 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
          <td class="support">
            <check-mark
              v-if="item.an010 === rowItems.supported"
              label="supported in Android 10.0"
            />
            <info-hud v-if="item.an010 === rowItems.prompt" class="info">
              <span class="smaller">
                A prompt will be provided to the user, which then has to be
                approved unless a supervisor is present, in which case silent
                application install/uninstall is supported.</span
              >
            </info-hud>
            <info-hud
              v-if="item.an010 === rowItems.partially"
              class="info-hud-warning"
            >
              <span class="smaller"
                >Partially supported. This option is only supported if a
                supervisor is available.
              </span>
            </info-hud>
          </td>
        </tr>
      </fragment>
    </tbody>
  </table>
</template>

<script>
import CheckMark from "./CheckMark";
import InfoHud from "./InfoHud";
import { Fragment } from "vue-fragment";
const RowItems = {
  supported: 1,
  unsupported: 0,
  prompt: 2,
  partially: 3,
};
export default {
  components: { Fragment, CheckMark, InfoHud },
  data() {
    return {
      rowItems: RowItems,
      features: [
        {
          category: "General Features",
          items: [
            {
              name: "Managed Google Play",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "App Install/Uninstall",
              an044: RowItems.prompt,
              an050: RowItems.prompt,
              an051: RowItems.prompt,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "App Permission Management",
              an044: RowItems.unsupported,
              an050: RowItems.unsupported,
              an051: RowItems.unsupported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Remote Viewer & Screenshot",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Reboot command",
              an044: RowItems.partially,
              an050: RowItems.partially,
              an051: RowItems.partially,
              an060: RowItems.partially,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Location Control command",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Brightness command",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Volume control",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Rotation Control",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Screen Timeout control",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Lockscreen Policy",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Camera Policy",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Status Bar Policy",
              an044: RowItems.unsupported,
              an050: RowItems.unsupported,
              an051: RowItems.unsupported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable NFC Beam Policy",
              an044: RowItems.unsupported,
              an050: RowItems.unsupported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Outgoing Calls Policy",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Factory Reset Policy",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable USB Connectivity Policy",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Screenshot Policy",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable Safe Mode Policy",
              an044: RowItems.unsupported,
              an050: RowItems.unsupported,
              an051: RowItems.unsupported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Disable SMS Policy",
              an044: RowItems.unsupported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Enforce Password Rules Policy",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Enforce Default App Permissions Policy",
              an044: RowItems.unsupported,
              an050: RowItems.unsupported,
              an051: RowItems.unsupported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Safety Net Policy",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Device Telemetry Policy",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
            {
              name: "Kiosk Mode & Lockdown Policy",
              an044: RowItems.supported,
              an050: RowItems.supported,
              an051: RowItems.supported,
              an060: RowItems.supported,
              an070: RowItems.supported,
              an071: RowItems.supported,
              an080: RowItems.supported,
              an081: RowItems.supported,
              an090: RowItems.supported,
              an010: RowItems.supported,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="postcss">
table {
  @apply border-0 relative overflow-visible;
}

.theme-default-content {
  td,
  tr {
    @apply border-0;

    &:first-child,
    &:last-child {
      @apply border-0;
    }
  }
}

.category {
  @apply border-t-0 font-bold;
}

.category .feature {
  @apply text-xl pl-0;
}

.category td {
  @apply pt-8 border-0;
}

.edition {
  @apply text-left;
  width: 15%;
}

.support {
  @apply relative overflow-visible font-bold;
}

.info {
  @apply ml-3;
}

.smaller {
  @apply text-sm leading-tight;
}
</style>
