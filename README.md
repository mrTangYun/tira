## GET STARTED

1.install

```
npm i -g @tira/tira-cli
```

2.make a workspace and sub project package directory

```
mkdir workspace && cd workspace
tira init -t workspace
```

3.generate some projects

```
mkdir packages && cd packages
mkdir frontend && cd frontend
tira init -t frontend-server
cd ..
mkdir backend && cd backend
tira init -t graphql-server
```

4.goto the root directory of the workspace and bootstrap the workspace

```
cd ../../
npm run bootstrap
```

this will install all dependencies of all project into the root node_modules of the workspace
5.watching typescript file of all projects

```
npm run watch-tsc
```

6.start the projects in the root directory of each project

```
npm start
```

7.now you can start coding the client side with hot reloading and server side source file with auto restarting the node process

## Features

1.ES6、Typescript support

2.graphql support based on apollo

6.support graphql gateway and make it possible to developing large micro service projects

3.simply convert sequelize models and relations to graphql types

4.linting with js|jsx|ts|tsx|json|css|less|scss|yaml|yml files and graphql query statement based on prettier/eslint/tslint

5.multi project support based on lerna

6.well-designed project template and updating capacity
