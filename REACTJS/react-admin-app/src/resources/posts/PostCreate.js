import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    DateTimeInput,
    required,
} from 'react-admin';

const validateRequired = required();

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput
                source="title"
                validate={validateRequired}
                fullWidth
            />
            <TextInput
                source="body"
                multiline
                rows={5}
                validate={validateRequired}
                fullWidth
            />
            <ReferenceInput
                source="userId"
                reference="users"
                validate={validateRequired}
            >
                <SelectInput
                    optionText="name"
                    label="Author"
                />
            </ReferenceInput>
            <SelectInput
                source="status"
                choices={[
                    { id: 'draft', name: 'Draft' },
                    { id: 'published', name: 'Published' },
                ]}
                defaultValue="draft"
                validate={validateRequired}
            />
            <DateTimeInput
                source="publishedAt"
                validate={validateRequired}
            />
        </SimpleForm>
    </Create>
);