This is a NextJS + Ant Design + Sass boilerplate.

## Getting Started

- Installation
  Run `npm ci` to install the dependencies. This will install the exact version of all the packages that were used while setting up the boilerplate thus avoiding any version incompatibility between packages.

- If you want to update the packages run the below two commands:

```
npm i @ant-design/nextjs-registry antd next react react-dom
```

```
npm i --save-dev @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/addon-onboarding @storybook/blocks @storybook/nextjs @storybook/react @storybook/test @types/node @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-next eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-storybook husky prettier sass storybook storybook-dark-mode typescript
```

- Setup husky
  Run `npx husky init` this will initialize husky in our project.
  Open `pre-commit` file which will be inside `.husky` folder and replace `npm run test` to `npm run lint`.

- You are ready to go. Run `npm run dev` to start the local server.
