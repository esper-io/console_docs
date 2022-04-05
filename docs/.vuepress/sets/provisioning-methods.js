module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Onboarding Methods",
  handle: "console",
  icon: "/icons/sidebar/Onboarding.svg",
  baseDir: "provisioning-methods",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Onboarding methods (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
          "factory-reset",
          "android-for-work",
          "6-tap",
          "provisioner-tool",
          "seamless",
          "kme",
          "zte",
          "imei-provisioning",
          "notification"
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
