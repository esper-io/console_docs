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
      href: "/icons/favicon.png"
    }
  ],
  [
    "link",
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/favicon.png"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicon.png"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicon.png"
    }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/icons/favicon.png",
      color: "#e5422b"
    }
  ],
  ["meta", { name: "msapplication-TileColor", content: "#f1f5fd" }],
  ["meta", { name: "theme-color", content: "#f1f5fd" }],
  ['meta', { property: "og:image", content:"https://console-docs.esper.io/icons/homepage/dashboard.png" }],
  ['meta', { property: "twitter:card", content:"summary_large_image" }]
];
