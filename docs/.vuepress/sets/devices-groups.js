module.exports = {
  title: "Esper Console Documentation",
  setTitle: "Devices and Groups",
  handle: "console",
  icon: "/icons/sidebar/devices_and_groups.svg",
  baseDir: "devices-groups",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Devices and groups (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Devices and Groups",
        collapsable: false,
        children: [
          "",
          "group-pane",
          "switch-view",
          "switch-nested",
          "customize",
          "download-csv",
          "filters",
          "rename",
          "tags", 
          "device-actions", 
          "static-info",  
          "device-settings", 
          "event-feed", 
          "device-graph", 
          "apps-device", 
          "device-app-install-uninstall",
          "device-activityfeed",
          "device-compliance",
          "device-security",
          "remote-viewer",
          "logs",
          "quick-actions",
          "device-move",
          "activity",
          "add-group",
          "group-apps",
          "groups-apps-install-uninstall",
          "group-move",
          "group-policy",
          "group-rename",
          "groups-feed",
          "groups-settings",
          "group-delete",
          "remove-offline-device"
         ]
      },
    ]
  }
  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     name: "English",
  //     title: "Esper Console Documentation | %v",
  //     config: require("./Introduction/introduction-to-esper-en.js")
  //   },
    // "/ja/": {
    //   lang: "ja",
    //   title: "Esper Console ドキュメント | %v",
    //   config: require("./esper-console-ja.js")
    // },
    // "/fr/": {
    //   lang: "fr",
    //   title: "Esper Console Documentation | %v",
    //   config: require("./esper-console-fr.js")
    // }
  // }
};
