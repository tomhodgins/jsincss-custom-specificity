export default (selector, number, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .reduce((styles, tag, count) => {

      const attr = (selector + number).replace(/\W/g, '')

      const partial = `[data-specificity-${attr}="${count}"]`
       const repeated = partial + partial.repeat(number)

      tag.setAttribute(`data-specificity-${attr}`, count)
      styles += `${repeated} { ${rule} }\n`
      count++

      return styles

    }, '')

}
