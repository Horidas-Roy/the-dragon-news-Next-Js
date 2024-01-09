import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import headerImg from "@/assets/The Dragon News.png"
import { getCurrentDate } from '@/Utils/getCurrentDate';
const Header = () => {
    const currentDate=getCurrentDate()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headerImg} width={500} height={"auto"} alt='The Dragon News' className='mx-auto'/>
                <Typography variant={"body2"} color={"gray"} textAlign='center' className='my-2'>
            Journalism without Fear or Favour
          </Typography>
                <Typography textAlign='center'>
            {currentDate}
          </Typography>
            </Container>
            
        </Box>
    );
};

export default Header;