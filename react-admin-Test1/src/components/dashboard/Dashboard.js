import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { Title } from 'react-admin';
import { PostsByUserChart } from './PostsByUserChart';
import { PostStatusChart } from './PostStatusChart';
import { QuickStats } from './QuickStats';

export const Dashboard = () => (
  <Card>
    <Title title="Dashboard" />
    <CardContent>
      <Box container spacing={2}>
        <Box item xs={12}>
          <QuickStats />
        </Box>
        <Box item xs={12} md={6}>
          <PostsByUserChart />
        </Box>
        <Box item xs={12} md={6}>
          <PostStatusChart />
        </Box>
      </Box>
    </CardContent>
  </Card>
);