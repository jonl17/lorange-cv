import all from "../../db/tonlist/*.md"
import _ from "lodash"

const transform = ({ html, metadata }) => {
  const date = new Date(metadata.releaseDate)
  return { ...metadata, html, date }
}

export const albums = _.chain(all).map(transform).orderBy("date", "desc").value()


