# Text Highlighter UI

## Description
Text Highlighter UI is a Chrome extension that allows users to highlight selected text on web pages with a chosen color. The extension provides a simple user interface for selecting the highlight color and applying it to the selected text.

## Features
- Select a highlight color using a color picker.
- Highlight selected text on any web page.
- Simple and intuitive user interface.

## Installation
1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on the "Load unpacked" button and select the directory where the extension files are located.

## Usage
1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Use the color picker to select your desired highlight color.
3. Select the text you want to highlight on the web page.
4. Click the "Highlight" button in the popup to apply the highlight to the selected text.

## Files Included
- `manifest.json`: The manifest file that defines the extension's properties and permissions.
- `background.js`: The background script that handles the extension's background tasks.
- `popup.html`: The HTML file for the popup user interface.
- `popup.js`: The JavaScript file that handles the popup's functionality.
- `styles.css`: The CSS file for styling the popup.

## Permissions
The extension requires the following permissions:
- `tabs`: To interact with the browser's tab system.
- `storage`: To store user preferences.
- `scripting`: To inject scripts into web pages.
- `activeTab`: To access the currently active tab.

## Development
To contribute to the development of this extension, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.