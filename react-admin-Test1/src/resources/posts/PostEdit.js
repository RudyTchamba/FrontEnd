import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  required,
} from 'react-admin';

export const PostEdit = () => (
  <Edit>
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
        />
        <DateInput source="publishedDate" />
    </SimpleForm>
  </Edit>
);