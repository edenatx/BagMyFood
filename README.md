# Bag My Food

Online shop for all your grocery needs

[![Build Status](https://travis-ci.org/edenatx/BagMyFood.svg?branch=master)](https://travis-ci.org/edenatx/BagMyFood)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

This project requires node version 7.4. Using a manager as NVM is highly recommended. 

This project uses YARN for dependency management. Yarn also installs NPM if you don't
already have it installed.

For MAC OS install:
```
brew install yarn
```

For other OS systems checkout YARN site

https://yarnpkg.com/en/docs/install

This project uses create-react-app by Facebook to reduce amount of configuration required to
get a react web app running. 

For Install:
```
npm install -g create-react-app
```

This project uses DotNet Core 2.0 for the server

For Install:
```
https://www.microsoft.com/net/core#macos
```

### Installing

A step by step series of examples that tell you have to get a development env running

First build the web application

```
cd webapp
yarn install
yarn build
```

Run the server code and start the WebApp at once

```
cd ..
cd server
dotnet restore
cd BagAPI
dotnet run
```

Bring up the website in your browser. 

```
localhost:5000
```
For faster developement start server code and run site in create react app
```
cd server/BagAPI
dotnet run
* separate terminal *
cd webapp
yarn start
```

## Running the tests

Server tests
```
cd webapp
dotnet test
```

Client tests
```
yarn test
```
### And coding style tests

We are using TSLint for styling standards
## Deployment

Asp.Net BagAPI will server up the static content produced by create-react-app. 
Deployment will involve getting the build artifact fro dotnet and deploying to the cloud.
This has not been done yet so it needs to be properly worked out

## Built With

* [React](https://github.com/facebook/react) - React
* [React-Redux](https://github.com/reactjs/react-redux) - React Redux
* [Typescript](https://github.com/microsoft/typescript) - Typescript
* [Create React App](https://github.com/facebookincubator/create-react-app) - Create React App
* [Asp.Net Core](https://docs.microsoft.com/en-us/aspnet/core/) - Asp.Net Core 

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

TBD

## Authors

* **EdenATX** - *contributor* - [EdenATX](https://github.com/edenatx)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
