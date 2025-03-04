import React from 'react';
import { useRecordContext } from 'react-admin';
import { Chip } from '@mui/material';

export const StatusField = ({ source }) => {
    const record = useRecordContext();
    const status = record?.[source];

    const getStatusColor = (status) => {
        switch (status) {
        case 'published':
            return 'success';
        case 'draft':
            return 'default';
        default:
            return 'primary';
        }
    };

    return (
        <Chip
        label={status}
        color={getStatusColor(status)}
        size="small"
        />
    );
};