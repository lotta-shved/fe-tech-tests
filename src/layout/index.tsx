import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box bgcolor="#efefef" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Typography variant="h4">Incredible Web</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <Box p={3}>
          <Outlet />
        </Box>  
      </Container>
    </Box>
  );
};
