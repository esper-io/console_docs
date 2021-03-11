module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "User Management",
  handle: "craft",
  icon: "/icons/icon-tip.svg",
  baseDir: "user-management",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search User Management (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
          "new-user",
          "edit-user",
          "delete-user",
          "user-roles",
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
