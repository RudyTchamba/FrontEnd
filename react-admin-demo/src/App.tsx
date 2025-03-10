
import { Admin, Resource} from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import PostList from "./pages/posts/post-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from './pages/posts/post_edit';
import PostCreate from './pages/posts/post-create';
import UserList from "./pages/users/user-list";
import UserShow from "./pages/users/user-show";
import UserEdit from './pages/users/user-edit';
import UserCreate from './pages/users/user-create';
import ArticleIcon  from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import { HomePage } from './pages/homepage';


export const App = () => (
    <Admin
        layout={Layout}
        dataProvider={dataProvider}
        dashboard={HomePage}
	>
        <Resource icon={ArticleIcon} name='posts' list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}></Resource>
        <Resource icon={PersonIcon} name='users' list={UserList} show={UserShow} edit={UserEdit} create={UserCreate}></Resource>
    </Admin>
);