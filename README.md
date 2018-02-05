# jsincss-custom-specificity

A custom specificity plugin for [jsincss](https://github.com/tomhodgins/jsincss)

## About

This plugin is a JavaScript module that works with [JS-in-CSS stylesheets](https://responsive.style/theory/what-is-a-jic-stylesheet.html), to set custom specificity levels for rules separately from the weight of their selectors.

## Downloading

You can download `index.js` and add it to your codebase, or download it with npm:

```bash
npm install jsincss-custom-specificity
```

Another option that works for building or testing, that isn't ideal for production use, is linking to the module directly from a CDN like unpkg:

```html
<script type=module>
  import specificity from 'https://unpkg.com/jsincss-custom-specificity/index.js'
</script>
```

## Importing

You can import the plugin into your own JavaScript modules in a couple of ways.

The first way is using the native [`import` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript. Here you can assign any name you want to the function you are importing, and you only need to provide a path to the plugin's `index.js` file:

```js
import specificity from './node_modules/jsincss-custom-specificity/index.js'
```

If you want to use `require` to load this plugin instead, and use a bundler like Webpack or Parcel, make sure to add `.default` as you require it:

```js
const specificity = require('jsincss-custom-specificity').default
```

Once you have imported this plugin into your module, you can use the plugin as `specificity()`

## Using JS-in-CSS Stylesheets

The main goal of this plugin is to allow CSS authors the ability to assign a custom specificity for a CSS rule separately from the selector used to select elements to apply the rule toward.

The plugin has the following format:

```js
specificity(selector, number, rule)
```

- `selector` is a string containing a CSS selector
- `number` is a number 0 or greater, assigning a custom specificity level to the rule
- `rule` is a string or template string containing a CSS rule

## Example

This example will use the `jsincss` plugin to load a JS-in-CSS stylesheet making use of this plugin. To test it in a JavaScript module, import both the `jsincss` package and any helper plugins you want:

```js
<script type=module>
  import jsincss from 'https://unpkg.com/jsincss/index.js'
  import specificity from 'https://unpkg.com/jsincss-custom-specificity/index.js'

  jsincss(() => {

    return `

      ${specificity('li', 1, `
        background: hotpink;
      `)}
      ${specificity('li.target', 1, `
        background: red;
      `)}
      ${specificity('li#target', 3, `
        background: blue;
      `)}

    `

  })
</script>
```

It's also possible to write your stylesheets as a separate JavaScript module like this, where you import any helper plugins at the top of the stylesheet:

```js
import specificity from 'http://unpkg.com/jsincss-custom-specificity/index.js'

export default () => {

  return `

    ${specificity('li', 1, `
      background: hotpink;
    `)}
    ${specificity('li.target', 1, `
      background: red;
    `)}
    ${specificity('li#target', 3, `
      background: blue;
    `)}

  `

}
```

And then import both the `jsincss` plugin and the stylesheet into your code and run them like this, suppling any `selector` or `events` list the `jsincss` plugin might need to apply the stylesheet only the the element(s) and event(s) you require, depending on what you're doing:

```js
import jsincss from 'https://unpkg.com/jsincss/index.js'
import stylesheet from './path/to/stylesheet.js'

jsincss(stylesheet)
```

## Compatible JS-in-CSS Stylesheet Loaders

- [jsincss](https://github.com/tomhodgins/jsincss)