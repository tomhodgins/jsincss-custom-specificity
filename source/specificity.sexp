mixin('specificity', ['selector', 'number', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    reduceFunc(
      createAttribute(['selector', 'number'],
        prelude('      const partial = `[data-specificity-${attr}="${count}"]`\n\
      const repeated = partial + partial.repeat(number)\n\n',
          addAttribute('tag', 'specificity',
            plainRule('${repeated}', '${rule}')))))))
