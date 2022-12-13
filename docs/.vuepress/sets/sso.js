module.exports = {
    title: "Esper Console Documentation",
    description: "Onboard, manage, and maintain a fleet of devices with Esper.",
    setTitle: "SSO",
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
            "saml-okta",
            "oidc-okta", 
            "delete-sso"
          ]
        },
      ]
    }
  };
