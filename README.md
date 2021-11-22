This page hosts a list of recipes in Markdown format, dynamically pulling the files from
[this directory](./public/list) of the repo. Adding and modifying entries there does not
require a re-deploy of the React site. The site is live [here](https://deek80.github.io/recipes/)!

It lists files using
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
and the GitHub API
[repository contents](https://docs.github.com/en/rest/reference/repos#get-repository-content)
endpoint. Markdown content is fetched from the corresponding `raw.githubusercontent` site. These
details have been separated out into the [gh-reader](https://github.com/deek80/gh-reader) repo.

The markdown content itself is rendered using [markedjs](https://github.com/markedjs/marked). This
site could easily be modified to host any sort simple text data, not just recipes. Enjoy!
