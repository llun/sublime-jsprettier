[prettier](https://github.com/jlongster/prettier) for Sublime Text 2/3
=================


Prettier is an opinionated JavaScript formatter inspired by
[refmt](https://facebook.github.io/reason/tools.html) with advanced
support for language features from ES2017, JSX, and Flow. It removes
all original styling and ensures that all outputted JavaScript
conforms to a consistent style. (See this [blog post](http://jlongster.com/A-Prettier-Formatter))


Enable `autoformat` then save the file and it gets formatted.

### Installation

<!-- **Via package control**   -->
<!-- Open your command palette -> Package Control: Install Package -> jsprettier -->

**Manual**
```bash

## go to your ST packages folder. maybe something like …
cd ~/Library/"Application Support/Sublime Text 2"/Packages

# clone this repo
git clone hhttps://github.com/jlangston/sublime-jsprettier jsprettier
cd jsprettier
npm install
```

On windows open cmd and:
```
cd %APPDATA%\"Sublime Text 3"\Packages
git clone https://github.com/jlangston/sublime-jsprettier jsprettier
cd jsprettier
npm install
```




### Settings
```javascript
{
    // autoformat on save
    "autoformat": false,

    // array of extensions for autoformat
    "extensions": ["js", "jsx", "sublime-settings"],

    // options for prettier
    "options": {
      // Fit code within this line limit
      "printWidth": 120,
      // Number of spaces it should use per tab
      "tabWidth": 2
      // Use the flow parser instead of babylon
      "useFlowParser": false,
      // If true, will use single instead of double quotes
      "singleQuote": true,
      // Controls the printing of trailing commas wherever possible
      "trailingComma": false,
      // Controls the printing of spaces inside array and objects
      "bracketSpacing": true
    },
    "alert-errors": true,
    // path to nodejs
    "node-path": "node",
    // if true it will format the whole file even if you have a selection active
    "ignore-selection": false
}

```

### Commands
**Command palette:**  

- JSPrettier: Format the current file
- JSPrettier: Toggle autoformat
- JSPrettier: Settings - Default
- JSPrettier: Settings - User

**Menu:**  
Preferences -> Package Settings -> Sublime JSPrettier

**Keyboard shortcut**  
If you want to trigger the formatting on a keyboard shortcut you will need to:
- Go to Preferences -> Key Bindings - User
- Insert the configuration to call the `format_javascript` command
```js
{ "keys": ["ctrl+q"], "command": "format_javascript" },

### Contributing

If you find any bugs feel free to report them [here](https://github.com/jlangston/sublime-jsprettier)  
Pull requests are also encouraged.

Big thanks to ionutvmi for [sublime-jsfmt](https://github.com/ionutvmi/sublime-jsfmt) which this plugin is based off of
