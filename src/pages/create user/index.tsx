import { UserForm } from "@/components/user-form";
import { Card, CardContent, Stack, Typography } from "@mui/material";

export const CreateUserPage = () => {

  const handleFormSubmit = () => { };
  
  return (
    <Stack spacing={4}>
      <Typography variant="h4">Create a new User</Typography>
      <Card sx={{ maxWidth: 400, }}>
        <CardContent>
          <UserForm onSubmit={handleFormSubmit} />
        </CardContent>
      </Card>
    </Stack>
  );
};
