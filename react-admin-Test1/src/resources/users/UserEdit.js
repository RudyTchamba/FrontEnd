import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  email,
} from 'react-admin';

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={[required(), email()]} />
      <SelectInput
        source="status"
        choices={[
          { id: 'active', name: 'Active' },
          { id: 'inactive', name: 'Inactive' },
        ]}
      />
    </SimpleForm>
  </Edit>
);