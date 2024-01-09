"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import Header from './Header';


const navItems = [
  {
    route:"Home",
    pathname:'/'
  },
  {
    route:"Pages",
    pathname:'/pages'
  },
  {
    route:"News",
    pathname:'/news'
  },
  {
    route:"Category",
    pathname:'/category'
  },
  {
    route:"About",
    pathname:'/about'
  },
  {
    route:"Contact",
    pathname:'/contact'
  },
];



const Navbar=()=>{
  

  return (
    <>
    <Header/>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={"auto"} alt="logo"/>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link href={item.pathname} key={item}>
                 <Button className='text-white'>
                {item.route}
              </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction={"row"} sx={{
              "& svg":{
                color:"white"
              }
            }}>
            <IconButton>
              <FacebookIcon/>
            </IconButton>
            <IconButton>
              <InstagramIcon/>
            </IconButton>
            <IconButton>
              <TwitterIcon/>
            </IconButton>
            <IconButton>
              <YouTubeIcon/>
            </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;