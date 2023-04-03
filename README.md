# React Toolkit Query (RTK Query)

# ESLint + Prettier

- https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b

- eslint (already installed/shipped with create-react-app, ESLint is used as static code analysis tool for identifying problematic patterns found in JavaScript code, code smells, unused variables, etc..)

- prettier (code formatter)

- eslint-plugin-prettier (runs prettier as eslint rule)

- eslint-config-prettier (turn off all ESLint styling rules that are unnecessary or might conflict with [Prettier])

- eslint-plugin-react (plugin for eslint to follow some best react practices, already shipped with create-react-app)

- eslint-plugin-react-hooks (add eslint rules for hooks, this plugin also comes in with create-react-app)

At the end:
When we create react app with create-react-app we should only install:

- eslint-config-prettier
- esling-plugin-prettier
- add eslint config
- add prettier config and prettier ignore files
  And two scripts:
- "lint": "eslint .",
- "lint:fix": "eslint . --fix" (will use the prettier styling guide)
