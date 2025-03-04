# React Admin Test1

This project is a demo application built with React and `react-admin` to create an admin interface. It uses `json-server` to mock a REST API for data management.

## Project Structure
```
react-admin-demo/
├── package.json
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Dashboard.js
│   │   │   ├── PostsByUserChart.js
│   │   │   ├── PostStatusChart.js
│   │   │   └── QuickStats.js
│   │   └── customFields/
│   │       └── StatusField.js
│   ├── resources/
│   │   ├── posts/
│   │   │   ├── PostList.js
│   │   │   ├── PostEdit.js
│   │   │   ├── PostCreate.js
│   │   │   └── PostShow.js
│   │   └── users/
│   │       ├── UserList.js
│   │       ├── UserEdit.js
│   │       ├── UserCreate.js
│   │       └── UserShow.js
│   ├── providers/
│   │   ├── authProvider.js
│   │   ├── dataProvider.js
│   │   └── themeProvider.js
│   └── utils/
│       └── theme.js
└── db.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RudyTchamba/DeveloppementRepo/tree/main/react-admin-Test1
   cd react-admin-Test1
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Running the Application
    1.  Start the JSON server:
        ```
        npm run server
        ```
    This will start the JSON server on port 3001 and serve the data from ```db.json```
    2.  Start the React application:
        ```npm start```
    This will start the React development server on port 3000.


## Project Parts

### Custom Components
* CustomAppBar: A custom AppBar component that includes a theme toggler.
* ThemeToggler: A component to toggle between light and dark themes.

### Data Providers
* authProvider: Handles authentication logic.
* dataProvider: Handles data fetching and manipulation.
* themeProvider: Provides theme configuration.

### Resources
* UserList, UserEdit, UserCreate, UserShow: Components for managing users.
* PostList, PostEdit, PostCreate, PostShow: Components for managing posts.

### Middleware
The server.js file includes custom middleware to add the X-Total-Count header to the JSON server responses, which is required by react-admin for pagination.

## Troubleshooting
If you encounter issues with missing modules, ensure that all dependencies are installed by running ```npm install```.
If the JSON server is not running, check the console output for errors and ensure that ```json-server``` is installed.
