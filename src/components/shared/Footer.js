import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const Footer = () => {
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
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
            <Box sx={{"& svg":{color:"white"}}} 
             className="w-full text-center"
            >
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
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link href={item.pathname} key={item}>
                 <Button className='text-white'>
                {item.route}
              </Button>
              </Link>
            ))}
          </Box>
          <Typography variant={"body2"} color={"gray"} textAlign='center'>
            @2024 All rights reserved by The Dragon News
          </Typography>
        </Container>
        </Box>
    );
};

export default Footer;