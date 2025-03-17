import { LimitsTable } from "@/components/limits-table";
import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

/**
 * api to get one user https://dummyjson.com/users/{{id}}
 * @returns User Details Page
 */
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
          User Information: name, email, address, etc. Also include an Avatar with some generic icon, ex, PersonIcon
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
