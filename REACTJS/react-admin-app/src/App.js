import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import { authProvider } from './providers/authProvider';
import Dashboard from './components/dashboard/dashboard';
import { UserList, UserEdit, UserCreate, UserShow } from './resources/users';
import { PostList, PostEdit, PostCreate, PostShow } from './resources/posts';
import { lightTheme } from './utils/theme';

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={lightTheme}
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
);

export default App;