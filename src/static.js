import color from "chalk"
import nanoLogger from "nano-logger"
const log = nanoLogger("statinamic/lib/static")

import toStaticHtml from "./to-static-html"

export default ({ urls, pagesData, dest, routes, store }) => (
  toStaticHtml({
    urls,
    pagesData,
    dest,
    routes,
    store,
  })
  .then(
    (files) => {
      log(
        color.green(`✓ Static html files: ${ files.length } files written`)
      )
    },
    (error) => {
      log(color.red(`✗ Static html files: failed to create files`))
      setTimeout(() => {
        throw error
      }, 1)
    }
  )
)
