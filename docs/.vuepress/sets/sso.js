module.exports = {
    title: "Esper Console Documentation | %v",
    setTitle: "sso",
    handle: "console",
    icon: "/icons/sidebar/sso.svg",
    baseDir: "sso",
    // versions: [
    //   ["introduction", { label: "1.x" }]
    // ],
    // defaultVersion: "introduction",
    searchPlaceholder: "Search SSO (Press “/” to focus)",
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
  