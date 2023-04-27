import { Layout } from '../layout';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Tab, Tabs, Typography, FormControl, InputLabel, Input } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function switchTab(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GenerateResume() {    

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <>
            <Layout>
              
              <h2> Generate Resume</h2>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                  <Tab label="Contact" {...switchTab(0)} />
                  <Tab label="Education" {...switchTab(1)} />
                  <Tab label="Experience" {...switchTab(2)} />
                  <Tab label="Projects" {...switchTab(3)} />
                  <Tab label="Skills" {...switchTab(4)} />
                  <Tab label="Summary" {...switchTab(5)} />
                  <Tab label="Review" {...switchTab(6)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Contact Details
                <Divider/>
                <form>
                <FormControl>
                  <InputLabel htmlFor="full-name">Full Name</InputLabel>
                  <Input id="full-name" />                                   
                  </FormControl>
                  
                  <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" />
                  </FormControl>
                  </form>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Tell us about your Education
              </TabPanel>
              <TabPanel value={value} index={2}>
                Let's talk about Experience
              </TabPanel>
              <TabPanel value={value} index={3}>
                List down your awesome projects!
              </TabPanel>
              <TabPanel value={value} index={4}>
                Show off your skills
              </TabPanel>
              <TabPanel value={value} index={5}>
                Let's write a summary
              </TabPanel>
              <TabPanel value={value} index={6}>
                Finally, review your information
              </TabPanel>
            </Box>
            </Layout>
        </>
    );
}


