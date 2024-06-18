

# Hello World Chrome Extension with LevelDB Access

## Overview

This project demonstrates the integration of a simple Chrome extension that uses the `chrome.storage` API to store a value. Additionally, it includes a Node.js script designed to read this value from a LevelDB database, which is used by Chrome extensions for local storage. This setup provides a basic example of extension data management and LevelDB interaction.

## Contents

- [Project Setup](#project-setup)
- [Extension Details](#extension-details)
- [Script to Fetch Data](#script-to-fetch-data)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

### Setting Up the Chrome Extension

1. Create Extension Files:
   - Prepare the necessary files for the Chrome extension, including the manifest file, background script, popup HTML, and popup JavaScript.

2. Configure the Extension:
   - Edit the files to define the extension’s behavior, such as storing a value in `chrome.storage.sync`.

3. Load the Extension in Chrome:
   - Navigate to `chrome://extensions/` in Chrome, enable "Developer mode", and load the extension directory.

### Running the Script to Fetch Data

1. Install Dependencies:
   - Ensure Node.js is installed and install the required package to interact with LevelDB.

2. Prepare the Script:
   - Set up the script to locate and access the LevelDB database used by Chrome for storing extension data.

3. Execute the Script:
   - Navigate to the script’s directory and run it using Node.js to fetch and display the stored values.

## Troubleshooting

Extension Not Found in `Local Extension Settings`:
  - Verify that the extension is installed and enabled in Chrome.
  - Ensure you are using the correct Chrome user profile.

*Permission Issues:
 Run Chrome as an administrator to resolve access permission problems.

Script Errors:
Confirm that Node.js and all required dependencies are installed correctly.
 Double-check the extension ID used in the script’s path.

 Contributing

Contributions to enhance or expand the functionality of this project are welcome. To contribute, please fork the repository, make your changes, and submit a pull request. For significant changes, open an issue to discuss your proposed modifications.


