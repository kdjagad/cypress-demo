import Container from '@mui/material/Container';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <Container maxWidth="xl">
            <Navbar />
            {children}
        </Container>
    )
}

export default Layout