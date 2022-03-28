module.exports = {
  title: "Esper Console Documentation | %v",
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
          "directory",
          "management",
          "device-record",
          //"pending-action",
          "readyonboard-action",
          //"assign-action",
          "view",
          "customize",
          "download-csv",
          "filters",
          "add-group",
          "create-blueprint",
          "blueprint-settings",
          "static-info",
          "apps-device", 
          "device-app-install-uninstall",
          "remote-viewer",
          "activity",
          "device-actions",
          "group-action",
          "logs",
          "event-feed",
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
