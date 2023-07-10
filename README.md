# MovieApp

MovieApp is a mobile application built with React Native and Expo that allows users to browse and search for movies using TheMovieDataBase API. Users can view movie details such as title, poster, and description.

## Features

- Browse movies by categories: top rated, popular, upcoming.
- Search for movies using keywords.
- View movie details including title, poster, and description.
- Bookmark favorite movies for quick access.

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed.
2. Clone this repository: git clone https://github.com/your-username/MovieApp.git
3. cd MovieApp
4. install dependencies: npm install or yarn install
5. Obtain a TMDB API token:
   - Visit the TMDB website and create an account if you don't have one.
   - Go to your account settings and navigate to the "API" section.
   - Generate a new API key by following the provided instructions.
   - Copy the generated API token.
6. Create a .env file in the project root directory and add your TMDB API token: TMDB_TOKEN=your-tmdb-api-token
7. Launch the app: yarn start or expo start

## Configuration

The project structure follows the standard structure for React Native applications:

├── assets
│ ├── fonts
│ ├── images
├── components
├── reducers
├── screens
├── types
└── App.tsx

assets: Contains fonts and images used in the app.
components: Contains reusable components used throughout the app.
reducers: Contains Redux reducers for managing app state.
screens: Contains screen components for different app screens.
types: Contains type definitions used in the app.
App.tsx: Entry point of the app.

## Technologies Used

ReactNative
Expo
Redux
ReactNavigation

## License

This project is licensed under the MIT License.

## Acknowledgements

TheMovieDataBase API
React Native Safe Area Context
NativeBase
