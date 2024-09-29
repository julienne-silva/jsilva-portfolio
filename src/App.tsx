import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HeaderComponent } from './components/header.component';
import { HomeComponent } from './components/home.component';
import { ProfilePhotoComponent } from './components/profile-photo.component';
import { EducationComponent } from './components/education.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';

import { routesMapping } from './routes/routes-mapping';

function App() {
    return (
        <Router>
            <Box>
                <HeaderComponent />
                    <Box 
                        display={{ xs: 'block', md: 'flex' }} 
                        justifyContent="left" 
                        sx={{ 
                            overflow: 'hidden', 
                            height: '100%', 
                        }}
                    >
                        <Routes>
                            <Route path={routesMapping.home} element={
                                <>
                                    <HomeComponent />
                                    <ProfilePhotoComponent />
                                </>
                            } />
                            <Route path={routesMapping.education.path} element={
                                <>
                                    <EducationComponent />
                                </>
                            } />
                            <Route path={routesMapping.experience.path} element={
                                <>
                                    <ExperienceComponent />
                                </>
                            } />
                            <Route path={routesMapping.projects.path} element={
                                <>
                                    <ProjectsComponent />
                                </>
                            } />
                        </Routes>
                    </Box>
                    <Box 
                        display={{ xs: 'block', md: 'flex' }} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                        sx={{ 
                            overflow: 'hidden', 
                            height: '100%', 
                        }}
                    >
                        <Routes>
                            <Route path={routesMapping.skills.path} element={
                                <>
                                    <SkillsComponent />
                                </>
                            } />
                        </Routes>
                    </Box>
            </Box>
        </Router>
    );
}

export default App;
