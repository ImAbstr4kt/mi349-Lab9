
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  // Pass through static files
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Shortcode for page title
  eleventyConfig.addShortcode("pageTitle", function(mainTitle, highlightedText) {
    return `<h1>${mainTitle} <strong>${highlightedText}</strong></h1>`;
  });
};
