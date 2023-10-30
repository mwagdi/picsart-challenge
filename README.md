# Picsart Challenge

A server-side rendered React App that communicates with an API to:
- Display and add tasks
- Display users
- Display user details

## Getting Started

After cloning the project, navigate to the project directory and run `yarn` to install the dependencies.
To run the application, run:
```shell
yarn dev
```
This will build both the client and server code as well as run the API server. The application will be running on http://localhost:3000, while the API server will be running on http://localhost:3001.

## Testing

To test the app run:
```shell
yarn test
```

## Project Structure

Since this is an SSR app, the project consist of two main parts, the server and the client, each of which has its own webpack configuration. The shared code between the server and the client is extracted to the root of the project, for example, utils, types, etc.

### Server

The server has two purposes:
- Wraps the app with the necessary providers and returns it as HTML
- Acts as a Backend-for-Frontend layer between the REST API and the app

In order to decrease response size and optimize performance I have opted to use a GraphQL server that consumes the REST API and returns GraphQL response instead. The GraphQL server is mounted on the `/graphql` endpoint. To check out the schema and the queries you can check the [GraphiQL interface](http://localhost:3000/graphql). 

### Client

The UI into:
- Components: Reusable components which contain as little logic as possible
- Pages: These represent the routes in the app and handle the fetching of data as well the bulk of logic

#### Testing
Unit testing for the components is implemented using Jest and React Testing Library.

### Data Fetching

For fetching data from the GraphQL server, Apollo Client is being used. It was convenient due to:
- Simplifying GraphQL query implementations
- Removes redundant requests due to caching
- supports state management
- Easy to track loading state
- Applying it to an SSR app is pretty straightforward

### Theming

For themes, I have implemented a custom theme provider to handle the theme switching. Since Styled Components are being used it was pretty straightforward for components to have access to the `theme` prop.

### Performance

To analyze the bundles for the project, run the following scripts:
```shell
# for client
yarn dev:build:client # build
yarn analyze:client # analyze

# for server
yarn dev:build:server # build
yarn analyze:server # analyze
```



