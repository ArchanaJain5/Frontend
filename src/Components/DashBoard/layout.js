import { styled } from '@mui/material/styles';
import { SideBar } from './NavBar/side-bar';
import { useCallback, useState,useEffect } from 'react';

const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingLeft: 250 //width of side bar
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 250 //width of side bar
    // }
  }));
  
  const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
  });

  export const  Layout = ((props) => {
    const { children } = props;
    const [openNav, setOpenNav] = useState(false);
  
    const handlePathnameChange = useCallback(() => {
      if (openNav) {
        setOpenNav(false);
      }
    }, [openNav]);
  
    // Use handlePathnameChange somewhere in your component, such as in a useEffect hook
    useEffect(() => {
      window.addEventListener('popstate', handlePathnameChange);
      return () => window.removeEventListener('popstate', handlePathnameChange);
    }, [handlePathnameChange]);
  
    return (
      <div>
         
      <SideBar
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
      </div>
    );
  });


  // export const Layout = ((props) => {
  //   const { children } = props;    
  //   return (
  //     <>        
  //       <SideBar/>                
  //       <LayoutRoot>
  //         <LayoutContainer>
  //           {children}
  //         </LayoutContainer>
  //       </LayoutRoot>
  //     </>
  //   );
  // });
  