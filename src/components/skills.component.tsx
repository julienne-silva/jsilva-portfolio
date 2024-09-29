import { Box, Typography } from "@mui/material";

import { BLACK_TRANSPARENT, BLACK_BACKGROUND_COLOR } from "../constants/theme.const";

const technologies = [
    { name: 'ReactJS', icon: '🔵' }, { name: 'ExpressJS', icon: '🟢' },
    { name: 'NodeJS', icon: '🟩' }, { name: 'Redux', icon: '🟣' },
    { name: 'Firebase', icon: '🔥' }, { name: 'Android', icon: '🤖' },
    { name: 'MaterialUI', icon: '🎨' },{ name: 'Bootstrap', icon: '🟣' },
    { name: 'HTML5', icon: '🟧' },{ name: 'CSS3', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },{ name: 'Java', icon: '☕' }, 
    { name: 'Kotlin', icon: '🔵' },{ name: 'PHP', icon: '🐘' }, 
    { name: 'Python', icon: '🐍' },{ name: 'C/C++', icon: '🔷' }, 
    { name: 'MATLAB', icon: '🐱' },{ name: 'Verilog', icon: '🐱' },
    { name: 'Vivado', icon: '🍃' },{ name: 'MySQL', icon: '🐬' }, 
    { name: 'PostgreSQL', icon: '🐘' },{ name: 'GitLab', icon: '🔀' },
    { name: 'GitHub', icon: '🐱' },{ name: 'VS Code', icon: '🐱' },
    { name: 'Excel', icon: '🐱' },{ name: 'Word', icon: '🐱' },
    { name: 'GitHub', icon: '🐱' },{ name: 'VS Code', icon: '🐱' },
    { name: 'GitHub', icon: '🐱' },{ name: 'VS Code', icon: '🐱' },
    { name: 'GitHub', icon: '🐱' },{ name: 'VS Code', icon: '🐱' },
    { name: 'GitHub', icon: '🐱' },{ name: 'VS Code', icon: '🐱' },
];

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
            {technologies.map((tech) => (
                <Box
                    key={tech.name}
                    sx={{
                        backgroundColor: BLACK_BACKGROUND_COLOR,
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
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        {tech.icon}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                        {tech.name}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
