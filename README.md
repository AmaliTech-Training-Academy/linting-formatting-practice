## Linting and Formatting

### ESLint

- **Configuration**: Extends recommended rules for Angular and Airbnb.


### Prettier

- **Configuration**: Uses consistent styling rules, including single quotes and trailing commas.

### NPM Scripts

- `lint`: Runs ESLint on the project.
- `format`: Formats code with Prettier.
- `lint:fix`: Automatically fixes linting issues.

### Husky

- **Pre-commit Hook**: Runs linting and formatting before each commit using lint-staged.

To install dependencies and set up hooks, run:

```bash
npm install
npm run prepare
