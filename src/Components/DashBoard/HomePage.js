import React from 'react';
import { Layout } from './layout';

import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';

import { TotalApplications } from './Metrics/totalApplications';
import { Applications } from './Metrics/applications';
import { OverviewTasksProgress } from './Metrics/overview-tasks-progress';
import { OverviewTotalCustomers } from './Metrics/overview-total-customers';
import { OverviewTotalProfit } from './Metrics/overview-total-profit';
import { OverviewTraffic } from './Metrics/overview-traffic';

const now = new Date();

const HomePage = () => {
    return(
    <>
         <Layout>
         <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
            <Container maxWidth="xl">
                <Grid
                container
                spacing={3}
                >
                <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                >
                    <TotalApplications
                    difference={12}
                    positive
                    sx={{ height: '100%' }}
                    value="231"
                    />
                </Grid>
                <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                >
                    <OverviewTotalCustomers
                    difference={16}
                    positive={false}
                    sx={{ height:'100%' }}
                    value="1.6k"
                    />
                </Grid>
                <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                >
                    <OverviewTasksProgress
                    sx={{ height: '100%' }}
                    value={75.5}
                    />
                </Grid>
                <Grid
                    xs={12}
                    sm={6}
                    lg={3}
                >
                    <OverviewTotalProfit
                    sx={{ height: '100%' }}
                    value="$15k"
                    />
                </Grid>
                <Grid
                    xs={12}
                    lg={8}
                >
                    <Applications
                    chartSeries={[
                        {
                        name: 'This year',
                        data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                        },
                        // {
                        // name: 'Last year',
                        // data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                        // }
                    ]}
                    sx={{ height: '100%' }}
                    />
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    lg={4}
                >
                    <OverviewTraffic
                    chartSeries={[63, 15, 22]}
                    labels={['Desktop', 'Tablet', 'Phone']}
                    sx={{ height: '100%' }}
                    />
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    lg={4}
                >
                    
                </Grid>
                </Grid>
            </Container>
            </Box>
        </Layout>
    </>
    );
};


HomePage.getLayout = (page) => (
    <Layout>
      {page}
    </Layout>
  );
  

export default HomePage;