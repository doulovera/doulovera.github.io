const folders = ['styles', 'assets']

module.exports = function(eleventyConfig) {
  return folders.map((folder) => {
    eleventyConfig.addPassthroughCopy(folder)
    return { passthroughFileCopy: true }
  })
}