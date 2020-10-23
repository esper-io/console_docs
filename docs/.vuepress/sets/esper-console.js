module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Esper Console",
  handle: "craft",
  icon: "/docs/icons/craft.svg",
  baseDir: "",
  versions: [
    ["1.x", { label: "1.x" }],
    ["2.x", { label: "2.x" }]
  ],
  defaultVersion: "1.x",
  searchPlaceholder: "Search the Esper Console (Press “/” to focus)",
  primarySet: true,
  locales: {
    "/": {
      lang: "en-US",
      name: "English",
      title: "Esper Console Documentation | %v",
      config: require("./esper-console-en.js")
    },
    "/ja/": {
      lang: "ja",
      title: "Esper Console ドキュメント | %v",
      config: require("./esper-console-ja.js")
    },
    "/fr/": {
      lang: "fr",
      title: "Esper Console Documentation | %v",
      config: require("./esper-console-fr.js")
    }
  }
};
