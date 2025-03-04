import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;