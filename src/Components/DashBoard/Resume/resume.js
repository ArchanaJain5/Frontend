import { Layout } from '../layout';
import { Box, Card, CardContent, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const ResumePage = () => {
    return(
    <>
        <Layout>
            <h2> Resume Landing Page </h2>
            <Stack
                //align="center"
                alignItems="center"
                direction="row"
                justifyContent="center"
                spacing={5}
                sx={{ p: 2 }}
            >
                <Link to={'/HomePage/Job_Postings'} style={{ textDecoration: 'none' }}>
                <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
                >
                <CardContent>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pb: 3                        
                    }}
                    >
                    </Box>  
                    <SvgIcon
                    
                        color="action"
                        viewBox="0 0 40 40"
                    >
                        <UploadFileIcon />
                    </SvgIcon>      
                    <Typography        
                    align="center"
                    variant="h5"                    
                    >
                    Evaluate existing Resume
                    </Typography>
                </CardContent>      
                </Card>
                </Link>

                <Link to={'/HomePage/Resume/GenerateResume'} style={{ textDecoration: 'none' }}>
                <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
                >
                <CardContent>
                    <Box
                    sx={{
                        display: 'flex',                        
                        pb: 3
                    }}
                    >
                    </Box>        
                    <Typography        
                    align="center"
                    variant="h5"
                    >
                    Generate Resume
                    </Typography>
                </CardContent>      
                </Card>
                </Link>
            </Stack>
        
        </Layout>
    </>
    );
};

// ResumePage.getLayout = (page) =>(
//     <Layout>
//         {page}
//     </Layout>
// );

export default ResumePage;

