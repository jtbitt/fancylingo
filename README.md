# fancylingo

This project is a flashcard style language learning application. 

It utilitizes Expo, React Native, Apollo, GraphQL, Hasura, and Firebase.

## Structure

- /functions/src -> firebase cloud functions for authentication
- /src/api -> Communication with Hasura DB using Apollo
- /src/contexts -> Auth context handler
- /src/hooks -> Custom firebase hooks
- /src/modules -> Feature architecture, account, auth, and lessons modules
- /src/routes -> App routing with React-Navigation

## Installation

This project is based on yarn as a package manager.
To install node_modules, simply run the below command.

```
yarn install
```

## Development

Runs the app in the development mode.

The app will reload if you make edits.

```
yarn start
```

## Building

Builds the applications for production.

```
expo build:ios
expo build:android
```

## Testing
