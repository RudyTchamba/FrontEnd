import {
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceField,
    DateField,
    RichTextField,
    useRecordContext,
} from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post: {record ? record.title : ''}</span>;
};

const StatusField = () => {
    const record = useRecordContext();
    return (
        <Box
            sx={{
                display: 'inline-block',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: record.status === 'published' ? '#4caf50' : '#9e9e9e',
                color: 'white',
            }}
        >
            {record.status}
        </Box>
    );
};

export const PostShow = () => (
    <Show title={<PostTitle />}>
        <SimpleShowLayout>
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        <TextField source="title" />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        By: <ReferenceField source="userId" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Published: <DateField source="publishedAt" showTime />
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <StatusField />
                    </Box>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Content
                    </Typography>
                    <RichTextField source="body" />
                </CardContent>
            </Card>
        </SimpleShowLayout>
    </Show>
);