# Cineverse - The Movie App

Cineverse is a modern movie discovery app that allows users to explore trending, upcoming, and top-rated movies, search for films, and view detailed information about movies and people in the film industry. The app leverages The Movie Database (TMDB) API to provide up-to-date movie data and images.

## Features

- Browse trending, upcoming, and top-rated movies
- Search for movies by title
- View detailed information about movies, including cast and similar movies
- Explore profiles of actors and crew members
- Responsive and visually appealing UI
- Fast and smooth navigation

## Demo

<img src="assets/demo.gif" alt="App Demo" height="400"/>

<!-- Add screenshots here if available -->

## Technologies Used

- **React Native / Expo**: For building cross-platform mobile apps
- **TypeScript**: Type safety and modern JavaScript features
- **Tailwind CSS (via NativeWind)**: Utility-first styling
- **Axios**: For API requests
- **TMDB API**: Source of movie and person data

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd cineverse
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your TMDB API credentials:
     ```env
     EXPO_PUBLIC_MOVIE_DB_API_BASE_URL=https://api.themoviedb.org/3
     EXPO_PUBLIC_MOVIE_DB_API_KEY=your_tmdb_api_key
     ```
4. **Start the development server:**
   ```bash
   npx expo start
   ```
5. **Run on your device or emulator:**
   - Use the Expo Go app or an emulator to preview the app.

## Folder Structure

```
cineverse/
├── app/                # App screens and navigation
│   ├── (tabs)/         # Tabbed navigation screens (Home, Profile, Search, etc.)
│   ├── movie/          # Movie detail screens
│   └── person/         # Person detail screens
├── assets/             # Images, fonts, and icons
├── components/         # Reusable UI components
├── context/            # React context providers
├── TMDB/               # API configuration and utility functions
├── global.css          # Tailwind CSS configuration
├── tailwind.config.js  # Tailwind CSS setup
├── package.json        # Project metadata and scripts
└── ...
```

## API Reference

This app uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api). You need to sign up for a free API key to use the app.

## Credits

- [TMDB](https://www.themoviedb.org/) for movie data and images
- [NativeWind](https://www.nativewind.dev/) for Tailwind CSS in React Native
- [Expo](https://expo.dev/) for the development platform

## License

This project is for educational and demonstration purposes.
