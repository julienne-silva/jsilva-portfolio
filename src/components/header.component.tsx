import { Typography, Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { YELLOW, BLACK } from '../constants/theme.const';
import { NavLinkProps } from '../interface/header';
import { routesMapping } from '../routes/routes-mapping';

const NavLink = ({ name, isActive }: NavLinkProps): JSX.Element => {
    const navigate = useNavigate();
    const handleClick = () => {
        switch (name) {
            case "Home":
                navigate(routesMapping.home);
                break;
            case "Education":
                navigate(routesMapping.education.path);
                break;
            case "Skills":
                navigate(routesMapping.skills.path);
                break;
            case "Experience":
                navigate(routesMapping.experience.path);
                break;
            case "Projects":
                navigate(routesMapping.projects.path);
                break;
            default:
                navigate(routesMapping.home);
                break;
        }
    }
    return (
        <Button
            onClick={handleClick}
            sx={{
                color: BLACK,
                fontWeight: 'bold',
                fontSize: { xs: '16px', sm: '20px' },
                textTransform: 'none',
                marginRight: '10px',
                backgroundColor: 'transparent',
                '&:hover, &:active': {
                    backgroundColor: YELLOW,
                    color: BLACK,
                },
                '&:focus': {
                    outline: 'none',
                },
            }}
        >
            {name}
        </Button>
    );
};

export const HeaderComponent = (): JSX.Element => {
    return (
        <Box>
            <Grid container justifyContent="space-between" alignItems="center" paddingX={{ xs: '16px', md: '50px' }} paddingY="10px">
                <Typography variant={'h5'} fontWeight={'bold'} fontSize={{ xs: '30px', md: '50px' }}>
                    <span style={{ color: BLACK }}>Port</span>
                    <span style={{ color: YELLOW }}>folio</span>
                </Typography>
                <Box display={'flex'}>
                    {["Home", "Education", "Skills", "Experience", "Projects"].map((name, index) => (
                        <NavLink key={index} name={name} isActive={index === 0} />
                    ))}
                </Box>
            </Grid>
        </Box>
    );
};
