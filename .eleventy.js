module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addFilter("findBySlug", (arr, slug) => {
    if (!Array.isArray(arr)) return null;
    return arr.find((item) => item.slug === slug);
  });

  eleventyConfig.addFilter("formatDate", (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (isNaN(date)) return value;
    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
