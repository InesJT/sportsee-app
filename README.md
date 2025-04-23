# SportSee-app

SportSee is a React-based web application that provides users with a personalized dashboard to track their fitness activities and key health metrics. The app fetches data from a backend API or mock data and visualizes it using charts and graphs.

## Table of Contents

- [SportSee-app](#sportsee-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [Technologies Used](#technologies-used)
  - [License](#license)

## Features

- **Dashboard**: Displays user activity, session duration, performance, and key health metrics.
- **Charts**: Interactive visualizations using `recharts`.
- **Routing**: Multi-page navigation with React Router.
- **Mock Data**: Fallback to mock data when the backend is unavailable.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── mock.json
├── src/
│   ├── assets/          # Static assets (icons, logo)
│   ├── components/      # Reusable components (charts, key data, etc.)
│   ├── layout/          # Layout components (header, sidebar)
│   ├── pages/           # Page components (dashboard, profile, etc.)
│   ├── services/        # API service functions
│   ├── App.jsx          # Main application component
│   ├── context.js       # React context for user ID
│   ├── main.jsx         # Application entry point
│   ├── index.scss       # Global styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/InesJT/sportsee-app.git
   cd sportsee-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and define the backend URL:
   ```
   VITE_BACKEND_URL=http://localhost:3000
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

3. To build the project for production:

   ```bash
   npm run build
   ```

4. To preview the production build:
   ```bash
   npm run preview
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Recharts**: For creating interactive charts and graphs.
- **Axios**: For making HTTP requests.
- **Sass**: For styling.
- **Vite**: Build tool for fast development and production builds.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
