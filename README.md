<img src="https://user-images.githubusercontent.com/16405300/154925743-1a508544-73ab-461b-81b4-c642d8d14b98.PNG" width="100" height="100"> 

# Truecaller Blog

## Sections
+   [Description](#description)
+   [Project Worflow](#project-workflow)
+   [Local Installation](#local-installtion)
+   [Demo Video](#demo-video)
+   [Misc](#misc)

## Description

This is blog website built on vue 3 which supports unit+e2e testing.
It incorporates usage of both options API and Composition API[Vue SFC has also been incorporated]

JEST has been used for unit test cases.

Cypress has been used for end to end test cases.

## Project workflow

This Projects consists of 2 routes:

  + Blog List/ Home page
  + Blog Detail View

The Home page incorporates pagination and gives user ability to select categories of blogs user wants to view.

## Local Installtion

The project is built on vue 3 and using niode version 14.

Clone this repository and follow the steps mentioned below.

If using NVM[ to shift to node 14 ]
```
nvm use 14
```

To Install the dependencies
```
npm install
```

To compile and hot-reload for development
```
npm run serve
```

To compile and minify for production
```
npm run build
```

To run e2e test cases
```
npm run test:e2e
```

To run unit test cases
```
npm run test:unit
```

### Environment Variables

Create a .env file in the root folder

List of required _environment variables_ :

```
MNEMONIC=
PROVIDERURL=
MATIC_PROJECT_ID=
INFURA_PROJECT_ID=
```

## Misc


### Tools and Libraries used
   +  Vue 3
   +  Cypress
   +  Prettier
   +  Jest

### License

MIT
