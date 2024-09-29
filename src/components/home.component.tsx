import { Typography, Box } from '@mui/material';

import { YELLOW, BLACK } from '../constants/theme.const';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const HomeComponent = (): JSX.Element => {
    return (
        <Box sx={{ overflow: 'hidden'}}>
            <Box textAlign="left" paddingY={{ xs: '50px', md: '400px' }} marginLeft={{ xs: '20px', md: '300px' }}>
                <Typography variant={'h5'} fontWeight={'bold'} fontSize={{ xs: '40px', md: '80px' }}>
                    <span style={{ color: BLACK }}>Julienne </span>
                    <span style={{ color: YELLOW }}>Silva</span>
                </Typography>
                <Typography variant={'h5'} fontSize={{ xs: '16px', md: '20px' }} marginTop="10px">
                    <span style={{ color: BLACK }}>I am a passionate <b>junior software developer</b> from the Philippines</span>
                </Typography>
                <Box display={'flex'} justifyContent={'left'} marginTop="10px" marginLeft={{ xs: '-5px', md: '-5px' }}>
                    {['https://www.facebook.com', 'https://www.linkedin.com', 'https://www.instagram.com/', 'https://github.com'].map((url, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: `2px solid ${YELLOW}`,
                                borderRadius: '50%',
                                padding: '8px',
                                margin: '0 5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: { xs: '40px', md: '30px' },
                                height: { xs: '40px', md: '30px' },
                            }}
                        >
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {index === 0 && <FacebookIcon sx={{ color: YELLOW }} />}
                                {index === 1 && <LinkedInIcon sx={{ color: YELLOW }} />}
                                {index === 2 && <InstagramIcon sx={{ color: YELLOW }} />}
                                {index === 3 && <GitHubIcon sx={{ color: YELLOW }} />}
                            </a>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
