import PropTypes from 'prop-types';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Card, CardContent, Divider, Stack, SvgIcon, Typography } from '@mui/material';

export const SavedJobs = (props) => {
  const { sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Saved Jobs
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <WorkIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        <br/>
        
        <Typography variant="overline" color="text.secondary">
          <u>View Saved Jobs</u>
        </Typography>
      </CardContent>
    </Card>
  );
};

SavedJobs.propTypes = {
  value: PropTypes.string.isRequired,
  sx: PropTypes.object
};

