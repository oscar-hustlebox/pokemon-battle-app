# Pokemon Battle App

A React-based Pokemon battle simulator that lets you pit random Pokemon against each other in a simple battle system based on move power.

## Features

- Random Pokemon selection for both sides
- Automatic move selection and power comparison
- Beautiful UI with Pokemon sprites and battle animations
- Responsive design that works on both desktop and mobile
- Real-time battle log updates
- Easy reset functionality to start new battles

## Tech Stack

- React 19
- TypeScript
- TanStack Query (React Query) for data fetching
- Tailwind CSS for styling
- PokeAPI for Pokemon data

## Getting Started

### Prerequisites

Make sure you have Node.js and yarn installed on your system.

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd pokemon-battle-app
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

The app will open in your default browser at [http://localhost:3000](http://localhost:3000).

## How to Play

1. When you open the app, two random Pokemon will be automatically selected
2. Each Pokemon will be assigned a random move from their movepool
3. Click "Start Battle" to begin the battle
4. The Pokemon with the stronger move power wins the battle
5. Click "Reset Battle" to get new random Pokemon and start over

## Available Scripts

- `yarn start` - Runs the app in development mode
- `yarn test` - Launches the test runner
- `yarn build` - Builds the app for production
- `yarn eject` - Ejects from Create React App (one-way operation)

## API Usage

This app uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data. No API key is required as it's a free and open API.

## Contributing

Feel free to submit issues and pull requests to improve the application.

## License

This project is open source and available under the MIT license.
