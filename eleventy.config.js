const navigation = require('@11ty/eleventy-navigation');
const dates = require('./utilities/filters/dates');
const helpers = require('./utilities/filters/helpers');
const htmlminify = require('./utilities/transforms/htmlminify');

module.exports = function (config) {
  // Plugins
  config.addPlugin(navigation);

  // Filters
  config.addFilter("dateDisplay", dates.friendly);
  config.addFilter("timestamp", dates.timestamp);
  config.addNunjucksFilter("spaceless", helpers.spaceless);
  config.addNunjucksFilter("shuffle", helpers.shuffle);

  // Transforms
  config.addTransform("htmlminify", htmlminify);

  // Ignored Files
  config.ignores.add("_drafts/**");

  // Layout Aliases
  config.addLayoutAlias("base", "base.njk");
  config.addLayoutAlias("home", "home.njk");
  config.addLayoutAlias("page", "page.njk");
  config.addLayoutAlias("organizers", "organizers.njk");
  config.addLayoutAlias("sponsorship", "sponsorship.njk");
  config.addLayoutAlias("contact", "contact.njk");

  // Passthrough Copy
  config.addPassthroughCopy({ "css": "css" });
  config.addPassthroughCopy({ "js": "js" });
  config.addPassthroughCopy({ "images": "images" });
  config.addPassthroughCopy({ "globals": "globals" });
  config.addPassthroughCopy({ "favicon.png": "favicon.png" });
  config.addPassthroughCopy({ "favicon.svg": "favicon.svg" });

  // Return Configuration
  return {
    pathPrefix: "/commhack-site/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "site",
      output: "public",
      includes: "includes",
      layouts: "includes/_layouts",
      data: "globals",
    },
  };
};
