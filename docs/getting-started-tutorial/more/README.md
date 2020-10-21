# Where to Go From Here

Craft CMS is a powerful tool for modeling and managing content as you need it. We’ve kept the tutorial focused on basic concepts to build a common, simple type of website—but there’s more to explore to get a better sense of how Craft CMS can support whatever’s needed for the complexities of *your* project.

If you’d like to explore further, here are some immediate tasks you might tackle.

## Beginner: extend the demo

- Expose blog post author details. (Hint: use [`dd`](/1.x/dev/tags.md#dd) on `entry.author` to see what’s there, or consult the [User element API documentation](craft3:\craft\elements\User).)
- Customize the homepage (`index.twig`) to match your site.
- Add more posts and integrate [pagination](/1.x/dev/tags.md#paginate) in your templates.
- Add an RSS feed using the example [in the documentation](/1.x/dev/examples/rss-feed.md).
- Use the [Contact Form plugin](https://plugins.craftcms.com/contact-form) to add a form to your site.

## Intermediate: go deeper with Craft

- Add a new section to the site like portfolios, press releases, or recipes.
- Add multiple [sites](/1.x/sites.md) to your installation that cross-promote content or offer it [in different languages](/1.x/sites.md#setting-up-a-localized-site).
- Add a [Structure section](/1.x/entries.md#sections) to the site for creating specialized marketing landing pages.
- Create a store using [Craft Commerce](https://craftcms.com/commerce).
- Optimize template performance with [caching](/1.x/dev/tags.md#cache) and [eager loading](/1.x/dev/eager-loading-elements.md).

## Advanced: extend Craft’s core functionality

- [Build a custom plugin or module](/1.x/extend/) using your own business logic.
- Familiarize yourself with [the Yii 2.0 documentation](https://www.yiiframework.com/doc/guide/2.0/en), since Craft CMS is an application built on that framework.

## Additional Resources

This tutorial is an introduction to the more in-depth [official documentation](/1.x/). Take a look, [join us in Discord](https://craftcms.com/discord), and we hope you’ll build something great with Craft CMS!