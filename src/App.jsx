import { Box, AppBar, Toolbar, Typography, Container, Avatar, Button, Grid, Card, CardContent, LinearProgress, Link, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import profilePic from './assets/react.svg'; // Cambia por tu foto real si lo deseas
import './App.css';

const skills = [
  { name: 'PHP', percent: 90, color: 'linear-gradient(90deg, #4f8cff 0%, #43e7fe 100%)' },
  { name: 'MySQL - PostgreSQL', percent: 80, color: 'linear-gradient(90deg, #4f8cff 0%, #43e7fe 100%)' },
  { name: 'JavaScript', percent: 85, color: 'linear-gradient(90deg, #f7b42c 0%, #fc575e 100%)' },
  { name: 'React', percent: 80, color: 'linear-gradient(90deg, #61dafb 0%, #007cf0 100%)' },
  { name: 'Next.js', percent: 75, color: 'linear-gradient(90deg, #000428 0%, #004e92 100%)' },
  { name: 'Python', percent: 80, color: 'linear-gradient(90deg, #4584b6 0%, #306998 100%)' },
  { name: 'Stored Procedures', percent: 85, color: 'linear-gradient(90deg, #a770ef 0%, #f6d365 100%)' },
  { name: 'Laravel', percent: 85, color: 'linear-gradient(90deg, #ff5858 0%, #f09819 100%)' },
];

function copyEmail() {
  navigator.clipboard.writeText('beyker.g.v.4@gmail.com');
}

export default function App() {
  return (
    <div className="app-bg-gradient">
      {/* Hero Section */}
      <Box sx={{ minHeight: { xs: '60vh', md: '60vh' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', pb: 0 }}>
        <Container maxWidth="md">
          <Avatar src={profilePic} alt="Beyker" sx={{ width: 120, height: 120, mx: 'auto', mb: 3, border: '4px solid #fff', boxShadow: 3 }} />
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ letterSpacing: 1, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
            Beyker Jose Guerrero Velasquez
          </Typography>
          <Typography variant="h5" fontWeight={400} gutterBottom sx={{ opacity: 0.9 }}>
            Fullstack Developer
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.85, mb: 4 }}>
            Software Engineer with 8+ years of experience in designing and developing robust, scalable web applications. Expertise in TypeScript, PHP, Vue.js, Laravel, and database management with MySQL and PostgreSQL.
          </Typography>
          <Button variant="contained" size="large" color="secondary" href="#contact" sx={{ fontWeight: 700, borderRadius: 3, px: 4, py: 1.5, fontSize: '1.1rem', boxShadow: 2 }}>
            Contact Me
          </Button>
        </Container>
      </Box>

      {/* Skills & Contact stacked, each occupying the maximum allowed width and separated by a margin */}
      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', px: { xs: 1, md: 2 }, pb: { xs: 6, md: 10 }, pt: { xs: 6, md: 10 } }}>
        <Box sx={{ width: '100%', maxWidth: 900, mb: { xs: 6, md: 8 } }}>
          <Box sx={{ bgcolor: 'rgba(18, 22, 34, 0.97)', borderRadius: 4, p: { xs: 2, md: 3 }, pb: { xs: 5, md: 7 }, boxShadow: 6, minHeight: { xs: 350, md: 420 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" fontWeight={800} gutterBottom sx={{ color: '#fff', mb: 4, textAlign: 'left' }}>Skills</Typography>
            <Stack spacing={3}>
              {skills.map(skill => (
                <Box key={skill.name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ minWidth: 120, color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{skill.name}</Typography>
                  <Box sx={{ flex: 1, height: 32, bgcolor: '#23283a', borderRadius: 2, overflow: 'hidden', position: 'relative', mr: 2 }}>
                    <Box sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${skill.percent}%`,
                      background: skill.color,
                      borderRadius: 2,
                      transition: 'width 1s cubic-bezier(.4,2,.6,1)',
                    }} />
                  </Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', minWidth: 48, textAlign: 'right' }}>{skill.percent}%</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
        {/* Contact Section */}
        <Box id="contact" sx={{ width: '100%', maxWidth: 900 }}>
          <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, pb: { xs: 5, md: 7 }, borderRadius: 4, bgcolor: 'rgba(18, 22, 34, 0.97)', minHeight: { xs: 300, md: 300 }, boxShadow: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" fontWeight={800} gutterBottom sx={{ color: '#fff', mb: 4, textAlign: 'left' }}>Contact</Typography>
            <Stack spacing={3}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <WhatsAppIcon color="success" />
                  <Typography fontWeight={700} sx={{ color: '#fff' }}>WhatsApp:</Typography>
                </Box>
                <Link href="https://wa.me/34654849896?text=Hello%20Beyker,%20I%20would%20like%20to%20contact%20you" target="_blank" rel="noopener" underline="none">
                  <Button variant="contained" color="success" size="small">+34 654 849 896</Button>
                </Link>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <EmailIcon color="primary" />
                  <Typography fontWeight={700} sx={{ color: '#fff' }}>Email:</Typography>
                </Box>
                <Button variant="outlined" color="primary" size="small" endIcon={<ContentCopyIcon />} onClick={copyEmail}>
                  beyker.g.v.4@gmail.com
                </Button>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOnIcon color="action" />
                  <Typography fontWeight={700} sx={{ color: '#fff' }}>Time Zone:</Typography>
                </Box>
                <Typography sx={{ color: '#fff' }}>Madrid - Spain</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <LinkedInIcon color="info" />
                  <Typography fontWeight={700} sx={{ color: '#fff' }}>LinkedIn:</Typography>
                </Box>
                <Link href="https://www.linkedin.com/in/beyker-jose-guerrero-velasquez-469649218/" target="_blank" rel="noopener" underline="none">
                  <Button variant="outlined" color="info" size="small">Perfil</Button>
                </Link>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.74 5.13 20.47 9.26 21.74C9.81 21.85 10.02 21.52 10.02 21.23C10.02 20.97 10.01 20.31 10.01 19.5C7 20.09 6.34 18.13 6.34 18.13C5.82 16.87 5.03 16.54 5.03 16.54C3.91 15.81 5.12 15.83 5.12 15.83C6.36 15.92 6.99 17.13 6.99 17.13C8.08 19.01 9.91 18.5 10.58 18.22C10.69 17.45 10.99 16.93 11.33 16.65C8.73 16.37 6 15.39 6 11.5C6 10.39 6.39 9.5 7.05 8.77C6.94 8.49 6.59 7.36 7.15 5.91C7.15 5.91 8.01 5.62 10.01 7.08C10.87 6.84 11.8 6.72 12.73 6.72C13.66 6.72 14.59 6.84 15.45 7.08C17.45 5.62 18.31 5.91 18.31 5.91C18.87 7.36 18.52 8.49 18.41 8.77C19.07 9.5 19.46 10.39 19.46 11.5C19.46 15.4 16.72 16.36 14.12 16.64C14.56 17 14.94 17.7 14.94 18.77C14.94 20.23 14.93 21.36 14.93 21.23C14.93 21.52 15.14 21.86 15.7 21.74C19.83 20.47 22.96 16.74 22.96 12.26C22.96 6.58 18.48 2 12 2Z" fill="#fff"/></svg>
                  <Typography fontWeight={700} sx={{ color: '#fff' }}>GitHub:</Typography>
                </Box>
                <Link href="https://github.com/beykerdev" target="_blank" rel="noopener" underline="none">
                  <Button variant="outlined" color="inherit" size="small">beykerdev</Button>
                </Link>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <footer>
        <Typography variant="body2">&copy; 2024 Beyker Jose Guerrero Velasquez. All rights reserved.</Typography>
      </footer>
    </div>
  );
}
