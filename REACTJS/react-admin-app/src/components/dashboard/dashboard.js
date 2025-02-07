import React, { useState, useEffect } from 'react';
import { useDataProvider } from 'react-admin';
import { Card, CardContent, Box, Stack, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
    const dataProvider = useDataProvider();
    const [stats, setStats] = useState({
        userCount: 0,
        postCount: 0,
        postsByUser: [],
        postsByStatus: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data: users } = await dataProvider.getList('users', {
                pagination: { page: 1, perPage: 100 },
                sort: { field: 'id', order: 'ASC' },
            });

            const { data: posts } = await dataProvider.getList('posts', {
                pagination: { page: 1, perPage: 100 },
                sort: { field: 'id', order: 'ASC' },
            });

            // Process data for charts
            const postsByUser = users.map(user => ({
                name: user.name,
                posts: posts.filter(post => post.userId === user.id).length,
            }));

            const postsByStatus = [
                { name: 'Published', value: posts.filter(post => post.status === 'published').length },
                { name: 'Draft', value: posts.filter(post => post.status === 'draft').length },
            ];

            setStats({
                userCount: users.length,
                postCount: posts.length,
                postsByUser,
                postsByStatus,
            });
        };

        fetchData();
    }, [dataProvider]);

    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <Box sx={{ p: 2 }}>
            <Stack spacing={3}>
                {/* Quick Stats Card */}
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Quick Stats
                        </Typography>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            sx={{ justifyContent: 'space-around' }}
                        >
                            <Box>
                                <Typography variant="h6">
                                    Total Users: {stats.userCount}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">
                                    Total Posts: {stats.postCount}
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>

                {/* Charts Container */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    sx={{ width: '100%' }}
                >
                    {/* Posts by User Chart */}
                    <Card sx={{ flex: 1, minHeight: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Posts by User
                            </Typography>
                            <Box sx={{ width: '100%', height: 300 }}>
                                <ResponsiveContainer>
                                    <BarChart data={stats.postsByUser}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar
                                            dataKey="posts"
                                            fill="#8884d8"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Posts by Status Chart */}
                    <Card sx={{ flex: 1, minHeight: 400 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Posts by Status
                            </Typography>
                            <Box sx={{ width: '100%', height: 300 }}>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie
                                            data={stats.postsByStatus}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, percent }) => 
                                                `${name} ${(percent * 100).toFixed(0)}%`
                                            }
                                        >
                                            {stats.postsByStatus.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={COLORS[index % COLORS.length]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Dashboard;