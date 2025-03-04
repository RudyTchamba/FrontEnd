import { Create, SimpleForm, TextInput } from "react-admin"


const UserCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="phone" />
            </SimpleForm>
        </Create>
    );
}

export default UserCreate