
# SVG Project Documentation
## SVG-Art

A React project for creating SVG art using Vite and TypeScript.

[![Stars](https://img.shields.io/github/stars/siddharth-vss/SVG-Art)](https://github.com/siddharth-vss/SVG-Art/stargazers)
[![Forks](https://img.shields.io/github/forks/siddharth-vss/SVG-Art)](https://github.com/siddharth-vss/SVG-Art/network/members)
[![Open Issues](https://img.shields.io/github/issues/siddharth-vss/SVG-Art)](https://github.com/siddharth-vss/SVG-Art/issues)
[![Last Updated](https://img.shields.io/github/last-commit/siddharth-vss/SVG-Art)](https://github.com/siddharth-vss/SVG-Art/commits/main)

## Introduction

SVG-Art is a web application built with React, Vite, and TypeScript that allows users to create and manipulate SVG (Scalable Vector Graphics) elements. This project provides a foundation for building interactive and dynamic SVG-based artwork.

## Features

-   Built with React, Vite, and TypeScript for a modern development experience.
-   Uses Styled Components for easy and maintainable styling.
-   Includes basic project setup and configuration.

## Technologies Used

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Styled Components](https://styled-components.com/)
-   [@svgr/webpack](https://react-svgr.com/docs/webpack/)

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/siddharth-vss/SVG-Art.git
    cd SVG-Art
    ```

2.  Install the dependencies:

    ```bash
    npm install # or yarn install
    ```

## Usage

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## Project Structure

The project structure is organized as follows:

-   `src/`: Contains the main application code.
    -   `src/App.tsx`: The main application component.
    -   `src/components/`: Directory for React components.
    -   `src/assets/`: Directory for assets like images and fonts.
    -   `src/index.css`: Global styles for the application.
    -   `src/main.tsx`: Entry point for the React application.
    -   `src/vite-env.d.ts`: TypeScript environment declarations for Vite.
-   `public/`: Contains static assets.
-   `index.html`: The main HTML file.
-   `vite.config.ts`: Vite configuration file.
-   `tsconfig.json`: TypeScript configuration file.
-   `eslint.config.js`: ESLint configuration file.
-   `.github/workflows`: Contains GitHub Actions workflows.

## Configuration

-   `vite.config.ts`: Configures the Vite build process, including plugins like `@vitejs/plugin-react` and `vite-plugin-svgr`.
-   `tsconfig.json`: Configures the TypeScript compiler options for the project.
-   `eslint.config.js`: Configures ESLint rules for linting the project.

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## License

This project does not have a license specified. Please refer to the repository owner for licensing information.

## Contact

siddharth-vss - [https://siddharth-vss.github.io/SVG-Art/](https://siddharth-vss.github.io/SVG-Art/)

## Overview
This project is focused on creating and manipulating SVG (Scalable Vector Graphics) files. It includes various utilities and tools to work with SVG files programmatically.

## Features
- Create SVG files from scratch
- Modify existing SVG files
- Export SVG files to different formats
- Utilities for common SVG operations

## Installation
To install the necessary dependencies, run:
```sh
npm install
```

## Usage
### Creating a new SVG file
To create a new SVG file, use the following code:
```javascript
const { createSVG } = require('./path/to/svg/utils');
const svg = createSVG({ width: 100, height: 100 });
// ...additional code to manipulate the SVG...
```

### Modifying an existing SVG file
To modify an existing SVG file, use the following code:
```javascript
const { modifySVG } = require('./path/to/svg/utils');
const svg = modifySVG('path/to/existing/file.svg');
// ...additional code to manipulate the SVG...
```

### Exporting an SVG file
To export an SVG file to a different format, use the following code:
```javascript
const { exportSVG } = require('./path/to/svg/utils');
exportSVG(svg, 'output/file/path.png');
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```




