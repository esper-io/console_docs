module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Devices and Groups",
  handle: "craft",
  icon: "/docs/icons/icon-tip.svg",
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
          "add-device",
          "rename",
          "device-move",
          "apps-device",
          "customize",
          "switch-view",
          "device-compliance",
          "device-graph",
          "device-security",
          "device-settings",
          "download-csv",
          "event-feed",
          "filters",
          "logs",
          "tags",
          "group-apps",
          "group-delete",
          "group-move",
          "group-pane",
          "group-policy",
          "group-rename",
          "group-updates",
          "group-feed",
          "group-settings",
          "quick-actions",
          "remote-viewer",
          "static-info",
          "switch-nested",
         ]
      }
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
