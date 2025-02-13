# Gemini Electron For Macos

Gemini Electron is an app that ported Gemini web with Electron.

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

- Node.js and npm must be installed.
- Only works correctly on MacOS now.

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```bash
   cd gemini-electron
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Build the electron app for macos

   ```bash
    npx electron-packager . Gemini --platform=darwin --arch=x64 --icon=assets/gemini.icns --out=build
   ```

5. Move the app to the Application folder in the build folder

   ```bash
   mv build/Gemini-darwin-x64/Gemini.app /Applications
   ```

## Keyboard Shortcuts

- **Cmd + N**: Open a new chat
- **Ctrl + S**: Toggle the side menu
