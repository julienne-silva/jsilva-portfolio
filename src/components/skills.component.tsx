import { Box, Typography } from "@mui/material";

import { BLACK_TRANSPARENT, WHITE, BLACK } from "../constants/theme.const";
import { skillsIcon } from "../constants/icons.const";

export const SkillsComponent = (): JSX.Element => {
    return (
        <Box
            sx={{
                display: 'grid',
                gap: 3,
                padding: 5,
                backgroundColor: BLACK_TRANSPARENT,
                borderRadius: 2,
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(6, 1fr)',
                },
            }}
        >
            {Object.entries(skillsIcon).map(([key, tech]) => (
                <Box
                    key={key}
                    sx={{
                        backgroundColor: WHITE,
                        borderRadius: '8px',
                        padding: 3,
                        textAlign: 'center',
                        boxShadow: '0px 4px 30px rgba(0,0,0,0.5)',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0px 6px 40px rgba(0, 0, 0, 0.6)',
                        },
                    }}
                >
                    <img src={tech.icon} alt={tech.name} style={{ width: '48px', height: '48px' }} />
                    <Typography variant="body1" sx={{ color: BLACK, mt: 1 }}>
                        {tech.name}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
