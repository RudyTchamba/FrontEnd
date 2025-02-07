import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    DateInput,
    SelectInput,
} from 'react-admin';

const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
            <ReferenceInput source="userId" reference="users" />
            <SelectInput
                source="status"
                choices={[
                    { id: 'published', name: 'Published' },
                    { id: 'draft', name: 'Draft' },
                ]}
            />
            <DateInput source="publishedAt" />
        </SimpleForm>
    </Edit>
);

export { PostEdit };