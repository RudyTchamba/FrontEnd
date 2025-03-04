import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  email,
} from 'react-admin';

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={[required(), email()]} />
      <SelectInput
        source="status"
        choices={[
          { id: 'active', name: 'Active' },
          { id: 'inactive', name: 'Inactive' },
        ]}
        defaultValue="active"
      />
    </SimpleForm>
  </Create>
);