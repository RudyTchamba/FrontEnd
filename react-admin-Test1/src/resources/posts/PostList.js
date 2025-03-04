import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  ReferenceInput,
} from 'react-admin';
import { StatusField } from '../../components/customFields/StatusField';

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <SelectInput
      source="status"
      choices={[
        { id: 'published', name: 'Published' },
        { id: 'draft', name: 'Draft' },
      ]}
    />
  </Filter>
);

export const PostList = (props) => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedDate" />
      <StatusField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);