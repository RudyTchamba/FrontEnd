import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const QuickStats = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalPosts: 0,
        publishedPosts: 0,
        activeUsers: 0,
    });
    const dataProvider = useDataProvider();

    useEffect(() => {
        const fetchStats = async () => {
        const [{ data: users }, { data: posts }] = await Promise.all([
            dataProvider.getList('users', {
            pagination: { page: 1, perPage: 100 },
            sort: { field: 'id', order: 'ASC' },
            }),
            dataProvider.getList('posts', {
            pagination: { page: 1, perPage: 100 },
            sort: { field: 'id', order: 'ASC' },
            }),
        ]);

        setStats({
            totalUsers: users.length,
            activeUsers: users.filter(user => user.status === 'active').length,
            totalPosts: posts.length,
            publishedPosts: posts.filter(post => post.status === 'published').length,
        });
        };

        fetchStats();
    }, [dataProvider]);

    return (
        <Box container spacing={2}>
        <Box item xs={12} sm={6} md={3}>
            <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Total Users
                </Typography>
                <Typography variant="h5">{stats.totalUsers}</Typography>
            </CardContent>
            </Card>
        </Box>
        <Box item xs={12} sm={6} md={3}>
            <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Active Users
                </Typography>
                <Typography variant="h5">{stats.activeUsers}</Typography>
            </CardContent>
            </Card>
        </Box>
        <Box item xs={12} sm={6} md={3}>
            <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Total Posts
                </Typography>
                <Typography variant="h5">{stats.totalPosts}</Typography>
            </CardContent>
            </Card>
        </Box>
        <Box item xs={12} sm={6} md={3}>
            <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Published Posts
                </Typography>
                <Typography variant="h5">{stats.publishedPosts}</Typography>
            </CardContent>
            </Card>
        </Box>
        </Box>
    );
};