module.exports = {
    title: "Esper Console Documentation | %v",
    setTitle: "Billing",
    handle: "console",
    icon: "/icons/sidebar/Billing.svg",
    baseDir: "billing",
    // versions: [
    //   ["introduction", { label: "1.x" }]
    // ],
    // defaultVersion: "introduction",
    searchPlaceholder: "Search billing (Press “/” to focus)",
    primarySet: true,
    sidebar: {
      "/": [
        {
          title: "Introduction",
          collapsable: false,
          children: [
            "",
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
  