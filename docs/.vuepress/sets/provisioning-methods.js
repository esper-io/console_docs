module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Provisioning Methods",
  handle: "console",
  icon: "/icons/sidebar/provisioning_methods.svg",
  baseDir: "provisioning-methods",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Provisioning methods (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
          "select-method",
          "help",
          "factory-reset",
          "android-for-work",
          "6-tap",
          "notification",
          "imei-provisioning",
          "provisioner-tool",
          "seamless",
          "zte",
          "kme",
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
