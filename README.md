# React Typescript Webpack Jest 

## Getting Started
To run this project locally,

```bash
yarn

yarn run start
```

This fires up a local webpack development server in `development` mode

## Docker
To run this project as a dockerized container, insured you have Docker installed on your machine,

```bash
docker build -f Dockerfile.prod -t outside-test:latest .

docker run -it -p 5000:80 --rm outside-test:latest
```

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode using Webpack.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!

## `yarn test`

Launches the test runner in the interactive watch mode.\
Using React Testing library on top of Jest for this project.

### `yarn lint`

Lints the project using ESLint and Prettier config and you can fix them using 
the `--fix` flag or just running `yarn lint:fix`

## Husky Pre-commit hook
Before committing files to remote, our custom hook lints our project and tries to fix them, if fixed stages them using `lint-staged` which helps us improve our code quality and consistency.

## Animation using Framer motion
Using [Motion by Frame](https://www.framer.com/motion/), the industry standard for creating beautiful and performant animations in production-ready React applications. 

## React Query
Using `react-query` to fetch our API Requests. This library takes care of caching and reinvalidating queries on its own, which helps create a better user experience for the end-user.

## Backend

Hosted publicly using Github actions and Alibaba ECS on [REST](https://strapi.kagati.io)

Framework - Strapi (NodeJS)

Created public endpoints for:
- [Movies](https://strapi.kagati.io/movies)
- [Directors](https://strapi.kagati.io/directors)

## File Structure
```bash
│   .dockerignore
│   .eslintrc.js
│   .gitignore
│   .stylelintrc
│   babel.config.js
│   Dockerfile.prod
│   index.html
│   jest.config.js
│   package.json
│   README.md
│   setUpTests.js
│   tsconfig.json
│   webpack.config.js
│   yarn.lock
│
├───.husky
│   │   pre-commit
│   │
│   └───_
│           .gitignore
│           husky.sh
│
├───.vscode
│       settings.json
│
├───build
│       index.html
│       main.ef55cfa7c99e2c428683.bundle.js
│       main.ef55cfa7c99e2c428683.bundle.js.LICENSE.txt
│       main.ef55cfa7c99e2c428683.bundle.js.map
│
├───nginx
│       nginx.conf
│
├───src
│   │   app.tsx
│   │
│   ├───components
│   │   ├───Home
│   │   │   ├───Director
│   │   │   │   │   DirectorDetails.tsx
│   │   │   │   │
│   │   │   │   ├───styles
│   │   │   │   │       modal-details.styled.ts
│   │   │   │   │
│   │   │   │   ├───__mocks__
│   │   │   │   │       mockDirector.ts
│   │   │   │   │
│   │   │   │   └───__tests__
│   │   │   │           DirectorDetails.test.tsx
│   │   │   │
│   │   │   ├───Movie
│   │   │   │   │   MovieCard.tsx
│   │   │   │   │   MovieDetails.tsx
│   │   │   │   │
│   │   │   │   ├───__mocks__
│   │   │   │   │       mockMovie.ts
│   │   │   │   │
│   │   │   │   └───__tests__
│   │   │   │           MovieCard.test.tsx
│   │   │   │           MovieDetails.test.tsx
│   │   │   │
│   │   │   └───styles
│   │   │           button.styled.ts
│   │   │           card.styled.ts
│   │   │           drawer-card.styled.ts
│   │   │
│   │   └───Skeletons
│   │       │   MoviesLoading.tsx
│   │       │   SkeletonCard.tsx
│   │       │
│   │       └───__tests__
│   │               MoviesLoading.test.tsx
│   │               SkeletonCard.test.tsx
│   │
│   ├───interfaces
│   │       cover.ts
│   │       director.ts
│   │       movie.ts
│   │
│   ├───styles
│   │       index.css
│   │
│   └───views
│           Home.tsx
│
└───utils
        urls.js
```
