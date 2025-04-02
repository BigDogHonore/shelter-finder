# Shelter Finder

## Overview
The Shelter Finder project is a web application designed to help users locate homeless shelters across Canada and the USA. The application provides an intuitive interface for users to search for shelters, view details, and access relevant information.

## Features
- Search for homeless shelters by location.
- View detailed information about each shelter, including address, contact details, and services offered.
- Responsive design for optimal viewing on various devices.
- User-friendly interface with easy navigation.

## Project Structure
```
shelter-finder
├── public
│   ├── index.html          # Main HTML document
│   ├── styles
│   │   └── main.css       # Styles for the website
│   └── scripts
│       └── main.js        # Main JavaScript code
├── src
│   ├── api
│   │   └── shelters.js    # API interaction for shelter data
│   ├── components
│   │   ├── header.js      # Header component
│   │   ├── footer.js      # Footer component
│   │   └── shelterCard.js  # Shelter card component
│   └── utils
│       └── helpers.js     # Utility functions
├── package.json           # npm configuration file
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd shelter-finder
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
- Open `public/index.html` in a web browser to view the application.
- Use the search functionality to find shelters by entering a location.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.