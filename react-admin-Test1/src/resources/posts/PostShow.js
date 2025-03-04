import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  DateField,
} from 'react-admin';
import { StatusField } from '../../components/customFields/StatusField';

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="body" />
        <ReferenceField source="userId" reference="users">
            <TextField source="name" />
        </ReferenceField>
        <StatusField source="status" />
        <DateField source="publishedDate" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);