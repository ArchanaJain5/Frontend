import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { CompanyCard } from './company-card';
import { CompaniesSearch } from './companies-search';
import { Layout } from '../layout';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const ITEMS_PER_PAGE = 10;

function Job_Postings  () {
  const [companies, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetch_Postings() {
      try{
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      let response =await fetch (
        "http://localhost:5050/api/job_postings/getjobs",
        requestOptions
    )
    const jsonData = await response.json();
    const { jobs } = jsonData;
    setData(jobs);
    console.log(jsonData);
    console.log(companies);
  } catch (error) {
    console.error(error);
  }
}
fetch_Postings();
}, []);

const totalPages = Math.ceil(companies.length / ITEMS_PER_PAGE);
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = startIndex + ITEMS_PER_PAGE;
const currentJobs = companies.slice(startIndex, endIndex);

const handlePageChange = (event, value) => {
  setCurrentPage(value);
};


  return (
  <>
    <Layout>
    <Helmet>
      <title>
        Companies | Devias Kit
      </title>
    </Helmet>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Companies
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {currentJobs.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company._id}
              >
                <CompanyCard key={company._id} company={company}  />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
             <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
          </Box>
        </Stack>
      </Container>
    </Box>
  </Layout>
  </>

)
}
// Job_Postings.getLayout = function(page) {
//   return (
//     <Layout>
//       {page}
//       console.log(page);
//     </Layout>
//   );
// }
export default Job_Postings ;


