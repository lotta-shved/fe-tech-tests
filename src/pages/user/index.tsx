import { LimitsTable } from "@/components/limits-table";
import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

export const UserPage = () => {
  const { userId } = useParams();

  if (!userId) {
    return null;
  }
  
  return (
    <Stack spacing={4}>
      <Typography variant="h4">User Details: {userId}</Typography>
      <Card sx={{ maxWidth: 680, }}>
        <CardContent>
          <Stack direction="row" spacing={1}>
            <Box style={{ marginTop: '1rem' }}>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </Box>
            <List dense>
              <ListItem>
                <Typography>Name Surname</Typography>
              </ListItem>
              <ListItem>
                <Typography>Email: email</Typography>
              </ListItem>
              <ListItem>
                <Typography>Username: username</Typography>
              </ListItem>
            </List>
            <List dense>
              <ListItem>
                <Typography>Age: 30</Typography>
              </ListItem>
              <ListItem>
                <Typography>Currency: EUR</Typography>
              </ListItem>
              <ListItem>
                <Typography>Address: City, Postal Code, Country</Typography>
              </ListItem>
            </List>
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Responsible Gaming Limits" />
        <CardContent>
          <LimitsTable />
        </CardContent>
      </Card>
    </Stack>
  );
};
