module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Provisioning Templates",
  handle: "console",
  icon: "/icons/sidebar/template.svg",
  baseDir: "provisioning-template",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Provisioning Templates (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
          "actions",
          "createtemplate",
          "upload-imei",
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
