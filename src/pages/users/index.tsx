import { UserTable } from "@/components/user-table";
import { User } from "@/models/user";
import { useGetUsersQuery } from "@/services/api";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

export const UsersPage = () => {
  const { data: usersList = [] } = useGetUsersQuery();
  const navigate = useNavigate();

  const handleUserClick = useCallback((user: User) => {
    navigate(`/users/${user.id}`);
  }, []);

  return (
    <Stack spacing={4}>
      <Stack direction='row'>
        <Typography variant="h4">Users</Typography>
        <Box ml='auto'>
          <Button
            component={Link}
            to={`/users/create`}
            variant="contained"
          >Add User</Button>
        </Box>
      </Stack>
      <UserTable
        rows={usersList}
        onClick={handleUserClick}
      ></UserTable>
    </Stack>
  );
};
