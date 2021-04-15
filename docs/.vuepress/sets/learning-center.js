module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Learning Center",
  handle: "console",
  icon: "/icons/sidebar/learning_center.svg",
  baseDir: "learning-center",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Learning Center (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
          "product-tour",
          "product-video",
          "new",
          "faq",
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
