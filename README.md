# blockm_1.0

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This React Native project follows a component-based architecture and leverages RTK Query for efficient API calling and state management. The project is structured to promote scalability, reusability, and maintainability.

## Features

- **Component-Based Architecture**: Modular and reusable components.
- **RTK Query**: Simplified API interactions and state management.
- **React Navigation**: Easy navigation within the app.
- **Custom Hooks**: Encapsulated logic to reuse stateful logic.

## Project Structure

The project structure is organized as follows:

Blockm/
├── assets # Static assets like images, fonts, etc.
├── components # Reusable UI components
├── constants # Constant values used throughout the app
├── hooks # Custom hooks
├── navigation # Navigation configuration and screens
├── redux # Redux slices and API services using RTK Query
├── store # Redux store configuration
├── utils # Utility functions and helpers

### Folder Breakdown

- **assets**: Contains static assets such as images, fonts, and other media files.
- **components**: Houses reusable UI components like buttons, cards, inputs, etc.
- **constants**: Includes constant values and configurations used throughout the project.
- **hooks**: Contains custom hooks for encapsulating and reusing logic.
- **navigation**: Holds the navigation setup and screen components.
- **redux**: Contains Redux slices and RTK Query API service definitions.
- **store**: Configures the Redux store.
- **utils**: Includes utility functions and helper methods.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-react-native-project.git
   ```

2. Navigate to the project directory:

   ```sh
   cd my-react-native-project
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the App

1. Start the Metro bundler:

   ```sh
   npx react-native start
   ```

2. Run the app on your preferred platform:
   ```sh
   npx react-native run-android
   ```
   or
   ```sh
   npx react-native run-ios
   ```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Native**: A framework for building native apps using React.
- **Redux**: A predictable state container for JavaScript apps.
- **@reduxjs/toolkit**: The official, recommended way to write Redux logic.
- **RTK Query**: A powerful data fetching and caching tool.

## Usage

### Components

Reusable components are stored in the `components` directory. Each component is structured with its own styles and logic to promote reusability.

### RTK Query

API calls are managed using RTK Query. API service definitions and endpoints are located in the `redux` directory.

### Navigation

The `navigation` directory contains the setup for React Navigation, allowing easy and smooth navigation between screens.

### Custom Hooks

Reusable logic is encapsulated in custom hooks stored in the `hooks` directory.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
