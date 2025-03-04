import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F'];

export const PostStatusChart = () => {
  const [data, setData] = useState([]);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider
      .getList('posts', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'id', order: 'ASC' },
      })
      .then(({ data: posts }) => {
        const statusCount = posts.reduce(
          (acc, post) => {
            acc[post.status] = (acc[post.status] || 0) + 1;
            return acc;
          },
          { published: 0, draft: 0 }
        );

        const chartData = [
          { name: 'Published', value: statusCount.published },
          { name: 'Draft', value: statusCount.draft },
        ];

        setData(chartData);
      });
  }, [dataProvider]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Post Status Distribution</Typography>
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx={250}
            cy={150}
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
};