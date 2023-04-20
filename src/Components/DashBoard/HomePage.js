import React from 'react';
import { Layout } from './layout';

import { subDays, subHours } from 'date-fns';
import { Typography, Box, Container, Unstable_Grid2 as Grid } from '@mui/material';

import { TotalApplications } from './Metrics/totalApplications';
import { Applications } from './Metrics/applications';
import { OverviewTasksProgress } from './Metrics/overview-tasks-progress';
import { SavedJobs } from './Metrics/saved-jobs';
import { OverviewTotalProfit } from './Metrics/overview-total-profit';
import { ApplicationStatus } from './Metrics/application-status';

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
                    <SavedJobs
                    
                    sx={{ height:'100%' }}
                    value="16"
                    />
                </Grid>
                {/* <Grid
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
                </Grid> */}
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
                    ]}
                    sx={{ height: '100%' }}
                    />
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    lg={4}
                >
                    <ApplicationStatus
                    chartSeries={[63, 15, 22]}
                    labels={['Reject', 'Interview', 'OA']}
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