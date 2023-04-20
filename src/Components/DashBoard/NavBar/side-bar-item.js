import { Box, ButtonBase } from '@mui/material';
import PropTypes from 'prop-types';

export const SideBarItem = (props) => {
  const { active = false, disabled, external, icon, path, title } = props;

  const linkProps =  {  
        href: path        
      };

  return (
    <li> 
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.04)'
        }}     
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'neutral.400',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              color: 'primary.main'              
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            color: 'common.black'            
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
};

SideBarItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};