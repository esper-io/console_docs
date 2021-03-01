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
          "add-device"
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
