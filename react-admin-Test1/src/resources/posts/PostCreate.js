import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  required,
} from 'react-admin';

export const PostCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="title" validate={required()} />
        <TextInput source="body" multiline rows={5} validate={required()} />
        <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" validate={required()} />
        </ReferenceInput>
        <SelectInput
            source="status"
            choices={[
            { id: 'draft', name: 'Draft' },
            { id: 'published', name: 'Published' },
            ]}
            defaultValue="draft"
        />
        <DateInput source="publishedDate" />
        </SimpleForm>
    </Create>
);