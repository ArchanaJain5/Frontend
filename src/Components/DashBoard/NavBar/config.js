import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import { SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';

export const items = [
  {
    title: (<h3>Dashboard</h3>),
    path: '/',
    icon: (
      <SvgIcon fontSize="medium">
        <SpaceDashboardIcon />
      </SvgIcon>
    )
  },
  {
    title: ( <h3>Generate Resume</h3> ),
    path: '/resume',
    icon: (
      <SvgIcon fontSize="medium">
        <DescriptionIcon />
      </SvgIcon>
    )
  },
  {
    title: (<h3>Apply to jobs</h3>),
    path: '/HomePage/Job_Postings',
    icon: (
      <SvgIcon fontSize="medium">
        <WorkIcon />
      </SvgIcon>
    )
  },
  {
    title: (<h3>Track jobs</h3>),
    path: '/track',
    icon: (
      <SvgIcon fontSize="medium">
        <ScreenSearchDesktopIcon />
      </SvgIcon>
    )
  },
  {
    title: (<h3>Profile</h3>),
    path: '/profile',
    icon: (
      <SvgIcon fontSize="medium">
        <UserIcon />
      </SvgIcon>
    )
  }
];
