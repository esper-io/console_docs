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
    "script",
    {},
    `
    document.addEventListener("DOMContentLoaded", function() {
      var banner = document.createElement("div");
      var text1a = document.createElement("span");
      text1a.innerHTML = "If you signed up for Esper using out website- https://www.esper.io/, please click ";
      var text1b = document.createElement("span");
      text1b.innerHTML = " for the Console documentation.";

      let a = document.createElement('a');
      let anchorText = document.createTextNode("here");
      a.appendChild(anchorText);
      a.title = "Console docs v2";
      a.href = "https://console-docs-v2.esper.io/";
      banner.appendChild(text1a)
      banner.appendChild(a);
      banner.appendChild(text1b);

      banner.className = "bg-yellow-500 text-gray-800 p-2 mb-4 text-center";
      if(document.getElementsByTagName('body')[0]) {
        document.getElementsByTagName('body')[0].prepend(banner)
      }
    })
    `
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
