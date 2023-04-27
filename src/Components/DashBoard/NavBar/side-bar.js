// import NextLink from 'next/link';
// import { usePathname } from 'next/navigation';
// import PropTypes from 'prop-types';
import {
  Box,  
  Drawer,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Scrollbar } from '../../scrollbar';
import { items } from './config';
import { SideBarItem } from './side-bar-item';

export const SideBar = () => {
//   const { open, onClose } = props;
//   const pathname = usePathname();
//   const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
                      
    <Box
        component="nav"
        sx={{
        flexGrow: 1,
        px: 2,
        py: 3
        }}
    >
        <Stack
        component="ul"
        spacing={0.5}
        sx={{
            listStyle: 'none',
            p: 0,
            m: 0
        }}
        >
        {items.map((item) => {
            const active = true;//item.path ? (pathname === item.path) : false;

            return (
            <SideBarItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
            />
            );
        })}
        </Stack>        
    </Box>              
    </Scrollbar>
  );
  return (
    <Drawer 
        anchor="left" 
        open
        PaperProps={{
                      sx: {
                        backgroundColor: 'neutral.900',
                        color: 'common.white',
                        width: 250
                      }
                    }}
        variant="permanent"
    >
            {content}            
    </Drawer>
  );

//   if (lgUp) {
//     return (
//       <Drawer
//         anchor="left"
//         open
//         PaperProps={{
//           sx: {
//             backgroundColor: 'neutral.800',
//             color: 'common.white',
//             width: 280
//           }
//         }}
//         variant="permanent"
//       >
//         {content}
//       </Drawer>
//     );
//   }

//   return (
//     <Drawer
//       anchor="left"
//     //   onClose={onClose}
//     //   open={open}
//       PaperProps={{
//         sx: {
//           backgroundColor: 'neutral.800',
//           color: 'common.white',
//           width: 280
//         }
//       }}
//       sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
//       variant="temporary"
//     >
//       {content}
//     </Drawer>
//   );
};

// SideBar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool
// };
