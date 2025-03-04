import { EditButton, Datagrid, List, ShowButton, TextField } from "react-admin"

const UserList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="phone" />
                <ShowButton />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default UserList