import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    ShowButton,
    BulkDeleteButton,
    useNotify,
    useRefresh,
    useUnselectAll,
    SelectColumnsButton,
    FilterButton,
    TextInput,
    SelectInput,
} from 'react-admin';
import { Confirm } from 'react-admin';
import { useState } from 'react';
import { dataProvider } from '../../providers/dataProvider';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <SelectInput
        source="status"
        choices={[
            { id: 'active', name: 'Active' },
            { id: 'inactive', name: 'Inactive' },
        ]}
    />,
    <SelectInput
        source="role"
        choices={[
            { id: 'admin', name: 'Admin' },
            { id: 'user', name: 'User' },
        ]}
    />,
];

const DeactivateButton = () => {
    const [open, setOpen] = useState(false);
    const notify = useNotify();
    const refresh = useRefresh();
    const unselectAll = useUnselectAll();

    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleConfirm = async (ids) => {
        // Make API call to deactivate users
        await dataProvider.updateMany('users', {
            ids,
            data: { status: 'inactive' },
        });

        notify('Users deactivated successfully');
        refresh();
        unselectAll('users');
        setOpen(false);
    };

    return (
        <>
            <BulkDeleteButton label="Deactivate" onClick={handleClick} />
            <Confirm
                isOpen={open}
                title="Deactivate Users"
                content="Are you sure you want to deactivate the selected users?"
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </>
    );
};

export const UserList = () => (
    <List
        filters={userFilters}
        actions={[
            <FilterButton />,
            <SelectColumnsButton />,
        ]}
    >
        <Datagrid bulkActionButtons={<>
            <DeactivateButton />
            <BulkDeleteButton />
        </>}>
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="role" />
            <TextField 
                source="status"
                sx={record => ({
                    color: record.status === 'active' ? 'green' : 'red',
                    fontWeight: 'bold',
                })}
            />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);