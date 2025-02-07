import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    DateField,
    EditButton,
    ShowButton,
    FilterButton,
    TextInput,
    SelectInput,
    ReferenceInput,
} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" reference="users" label="Author" />,
    <SelectInput
        source="status"
        choices={[
            { id: 'published', name: 'Published' },
            { id: 'draft', name: 'Draft' },
        ]}
    />,
];

const PostList = () => (
    <List
        filters={postFilters}
        actions={<FilterButton />}
        sort={{ field: 'publishedAt', order: 'DESC' }}
    >
        <Datagrid>
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedAt" />
            <TextField
                source="status"
                sx={record => ({
                    color: record.status === 'published' ? 'green' : 'gray',
                })}
            />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export { PostList };