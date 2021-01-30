module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "no-debugger": 0,
    "no-alert": 0,
    "no-unused-vars": 1,
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    'react/jsx-indent': [2, 2], // error & 2 spaces
    'react/jsx-indent-props': [2, 2],
    "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 1, // disallow dangling underscores in identifiers
    "no-extra-parens": 1, // disallow wrapping of non-IIFE statements in parens
    "quotes":["error", "single"], // specify whether double or single quotes should be used
    "semi": [1, "always"], // require or disallow use of semicolons instead of ASI
    "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}], // require or disallow space before function opening parenthesis (off by default)
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false }], // require or disallow spaces inside brackets (off by default)
    "space-in-parens": [1, "never"], // require or disallow spaces inside parentheses (off by default)
    "jsx-quotes": ["error", "prefer-single"], // Enforce quote style for JSX attributes
    "strict": ["error", "global"],
    "spaced-comment": ["error", "always"],
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "no-console": "off",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "semi": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "error",
    "react/prefer-stateless-function": "warn",
    "react/jsx-one-expression-per-line":"error",
    "react/jsx-closing-bracket-location": "warn",
    "comma-dangle": 0,
    "react/jsx-props-no-spreading": 0,
    "global-require": "off",
    "one-var": "off",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "import/no-unresolved": [2, { ignore: ['@env'] }],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "radix": 0,
    "no-shadow": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "jsxSingleQuote": true
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ]
  },
  "plugins": [
    "prettier",
    "react",
    "react-hooks"
  ]
}