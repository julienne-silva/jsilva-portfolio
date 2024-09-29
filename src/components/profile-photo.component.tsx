
import { Box } from '@mui/material';

import ProfilePhoto from '../assets/home/profile-photo.png'

export const ProfilePhotoComponent = (): JSX.Element => {
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            sx={{ 
                height: '100vh', 
                overflow: 'hidden',
                margin: 0,
                padding: 0, 
            }}
        >
            <img 
                src={ProfilePhoto} 
                alt="Julienne Silva" 
                style={{ 
                    maxHeight: '100vh',
                    maxWidth: 'auto',
                    objectFit: 'contain',
                }} 
            />
        </Box>
    );
};
