import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

export const PostsByUserChart = () => {
    const [data, setData] = useState([]);
    const dataProvider = useDataProvider();

    useEffect(() => {
        dataProvider
        .getList('posts', {
            pagination: { page: 1, perPage: 100 },
            sort: { field: 'userId', order: 'ASC' },
        })
        .then(({ data: posts }) => {
            const postsByUser = posts.reduce((acc, post) => {
            acc[post.userId] = (acc[post.userId] || 0) + 1;
            return acc;
            }, {});

            const chartData = Object.entries(postsByUser).map(([userId, count]) => ({
            userId,
            count,
            }));

            setData(chartData);
        });
    }, [dataProvider]);

    return (
        <Card>
        <CardContent>
            <Typography variant="h6">Posts by User</Typography>
            <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="userId" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </CardContent>
        </Card>
    );
};