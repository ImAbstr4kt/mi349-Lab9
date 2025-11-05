
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  module.exports = function(eleventyConfig) {

  // Shortcode for text at top of screen
  eleventyConfig.addShortcode("pageTitle", function(mainTitle, highlightedText) {
    return '<h1>${mainTitle} <strong>${highlightedText}</strong></h1>';
  });

};