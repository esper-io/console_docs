module.exports = [
  [
    "script",
    {},
    `let htmlElement = document.getElementsByTagName("html")[0];
    if (localStorage && localStorage['docs.theme']) {
      htmlElement.className += (htmlElement.className ? ' ' : '') + 'theme-' + localStorage['docs.theme'];
    }`
  ],
  [
    "link",
    {
      rel: "icon",
      href: "https://esper.io/favicon-32x32.png"
    }
  ],
  [
    "link",
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "https://esper.io/favicon-32x32.png"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "https://esper.io/favicon-32x32.png"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "https://esper.io/favicon-32x32.png"
    }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "https://esper.io/favicon-32x32.png",
      color: "#e5422b"
    }
  ],
  ["meta", { name: "msapplication-TileColor", content: "#f1f5fd" }],
  ["meta", { name: "theme-color", content: "#f1f5fd" }]
];
