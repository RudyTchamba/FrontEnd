import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
    DateField,
    ReferenceArrayField,
    Datagrid,
} from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="role" />
            <TextField source="status" />
            <DateField source="createdAt" />
            <DateField source="lastLogin" />
            <ReferenceArrayField label="Posts" reference="posts" source="id" target="userId">
                <Datagrid>
                    <TextField source="title" />
                    <TextField source="status" />
                    <DateField source="publishedAt" />
                </Datagrid>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
);