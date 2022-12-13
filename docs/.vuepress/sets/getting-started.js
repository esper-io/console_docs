module.exports = {
  title: "Esper Console Documentation",
  setTitle: "Getting Started",
  handle: "console",
  icon: "/icons/sidebar/getting_started.svg",
  baseDir: "getting-started",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Getting started",
        collapsable: false,
        children: [
          "",
          "upload-app", 
          "shortcode", 
          //"create-template", 
          "onboard", 
          "find-device", 
          "add-member",
          "contact"
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
