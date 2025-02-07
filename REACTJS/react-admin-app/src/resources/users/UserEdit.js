import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    email,
    required,
    PasswordInput,
} from 'react-admin';

const validateEmail = email();
const validateRequired = required();

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={validateRequired} />
            <TextInput source="email" validate={[validateRequired, validateEmail]} />
            <PasswordInput source="password" />
            <SelectInput
                source="role"
                choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'user', name: 'User' },
                ]}
                validate={validateRequired}
            />
            <SelectInput
                source="status"
                choices={[
                    { id: 'active', name: 'Active' },
                    { id: 'inactive', name: 'Inactive' },
                ]}
                validate={validateRequired}
            />
        </SimpleForm>
    </Edit>
);