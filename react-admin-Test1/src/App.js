// src/App.js
import React from 'react';
import { Admin, Resource, Layout } from 'react-admin';
import { Box } from '@mui/material';
import { AppBar as RaAppBar } from 'react-admin';
import { UserList, UserEdit, UserCreate, UserShow } from './resources/users';
import { PostList, PostEdit, PostCreate, PostShow } from './resources/posts';
import { Dashboard } from './components/dashboard/Dashboard';
import { authProvider } from './providers/authProvider';
import { ThemeProvider } from './providers/themeProvider';
import { ThemeToggler } from './components/ThemeToggler';
import dataProvider  from './providers/dataProvider';

// Custom AppBar component with proper imports
const CustomAppBar = (props) => (
  <RaAppBar {...props}>
    <Box flex={1} display="flex" justifyContent="space-between">
      <Box flex={1} />
      <ThemeToggler />
    </Box>
  </RaAppBar>
);

const CustomLayout = (props) => (
  <Layout {...props} appBar={CustomAppBar} />
);

const App = () => {
  return (
    <ThemeProvider>
      <Admin
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        layout={CustomLayout}
      >
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
      </Admin>
    </ThemeProvider>
  );
};

export default App;