export default (selector, number, rule) => {

  let styles = ''
  let count = 0

  document.querySelectorAll(selector).forEach(tag => {

    const attr = (selector+number).replace(/\W+/g, '')
    const partial = `[data-specificity-${attr}="${count}"]`
    const repeated = partial + partial.repeat(number)

    tag.setAttribute(`data-specificity-${attr}`, count)
    styles += `${repeated} { ${rule} }\n`
    count++

  })

  return styles

}