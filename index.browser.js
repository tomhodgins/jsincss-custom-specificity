function specificity(selector, number, rule) {
  const attr = (selector + number).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .reduce((output, tag, count) => {
      const partial = `[data-specificity-${attr}="${count}"]`
      const repeated = partial + partial.repeat(number)
      output.add.push({tag: tag, count: count})
      output.styles.push(`${repeated} { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-specificity-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-specificity-${attr}`, ''))
  return result.styles.join('\n')
}
