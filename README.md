# Angular Project with ESLint and Prettier

## Project Description

This Angular project has been configured with ESLint and Prettier to enhance code quality and maintain consistency across the codebase. ESLint helps in identifying and fixing problems in JavaScript and TypeScript code, while Prettier ensures consistent code formatting.

### ESLint Configuration
_**Configuration**: Recommended for angular


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
