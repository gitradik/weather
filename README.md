# weather

### Main technologies
- [React 18](https://reactjs.org/)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI V5](https://next.material-ui.com/) note that V5 is still in beta and has a separate documentation
    - Refer to the [upgrade notes](https://next.material-ui.com/guides/migration-v4/) if you are familiar with the previous version
- [Redux](https://redux.js.org/) for state management, using [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK query](https://redux-toolkit.js.org/rtk-query/overview) for managing server state

### Client dev start
Perform the following within the root directory:
- Install dependencies: `yarn install`
- Start app in development mode: `yarn start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### IDE setup
- This project uses [absolute imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports). You may need to set up your IDE accordingly
  - In Webstorm, check [use paths relative to tsconfig.json](https://blog.jetbrains.com/webstorm/2020/07/configuring-the-style-of-imports-in-javascript-and-typescript/) in the project settings

### Imports
Always use absolute imports instead of relative imports

### Backend API
[The backend API docs can be accessed at `https://openweathermap.org/api`
](**``**)
