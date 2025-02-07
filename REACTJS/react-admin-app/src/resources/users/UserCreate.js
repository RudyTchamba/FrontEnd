import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    email,
    required,
    PasswordInput,
} from 'react-admin';

const validateEmail = email();
const validateRequired = required();

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={validateRequired} />
            <TextInput source="email" validate={[validateRequired, validateEmail]} />
            <PasswordInput source="password" validate={validateRequired} />
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
                defaultValue="active"
                validate={validateRequired}
            />
        </SimpleForm>
    </Create>
);