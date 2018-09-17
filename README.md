## GET STARTED

1.install

```
npm i -g @tira/tira-cli
```

2.make a workspace

```
mkdir workspace && cd workspace
tira init -t workspace
```

3.generate some projects

```
cd packages
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
