import React, { useState } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  useNotify,
  useRefresh,
  EditButton,
  ShowButton,
  BulkDeleteButton,
  TopToolbar,
} from 'react-admin';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import dataProvider from '../../providers/dataProvider';

const DeactivateButton = ({ selectedIds }) => {
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const refresh = useRefresh();

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = async () => {
      try {
          await Promise.all(
              selectedIds.map(id =>
                  dataProvider.update('users', {
                      id,
                      data: { status: 'inactive' },
                  })
              )
          );
          notify('Users successfully deactivated', { type: 'success' });
          refresh();
      } catch (error) {
          notify('Error: users not deactivated', { type: 'error' });
      }
      setOpen(false);
  };

  return (
      <>
          <Button onClick={handleClick} variant="contained" color="secondary">
              Deactivate
          </Button>
          <Dialog open={open} onClose={handleDialogClose}>
              <DialogTitle>Deactivate Users</DialogTitle>
              <DialogContent>
                  Are you sure you want to deactivate these users?
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleDialogClose}>Cancel</Button>
                  <Button onClick={handleConfirm} color="primary">
                      Confirm
                  </Button>
              </DialogActions>
          </Dialog>
      </>
  );
};

const UserBulkActionButtons = ({ selectedIds }) => (
    <TopToolbar>
        <DeactivateButton selectedIds={selectedIds} />
        <BulkDeleteButton />
    </TopToolbar>
);

export const UserList = () => (
    <List>
        <Datagrid bulkActionButtons={<UserBulkActionButtons />}>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="status" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);