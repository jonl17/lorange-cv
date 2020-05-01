import all from "../../db/vefir/*.md"
import _ from "lodash"

const transform = ({ html, metadata }) => {
  const date = new Date(metadata.releaseDate)
  const textContent = html.split("--ENSKA--")
  return { ...metadata, date, html: { is: textContent[0], en: textContent[1] } }
}

export const projects = _.chain(all).map(transform).orderBy("date", "desc").value()


