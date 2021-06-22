module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Compliance Policy",
  handle: "console",
  icon: "/icons/sidebar/compliance.svg",
  baseDir: "compliance-policy",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Compliance Policy (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
         "create-policy",
         "apply-policy",
         "edit-policy",
         "frp",
         "duplicate-policy",
         "delete-policy", 
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
