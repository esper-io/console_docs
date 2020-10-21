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
      title: "Craft CMS Documentation | %v",
      config: require("./craft-cms-en.js")
    },
    "/ja/": {
      lang: "ja",
      title: "Craft CMS ドキュメント | %v",
      config: require("./craft-cms-ja.js")
    },
    "/fr/": {
      lang: "fr",
      title: "Craft CMS Documentation | %v",
      config: require("./craft-cms-fr.js")
    }
  }
};
