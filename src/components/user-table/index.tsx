import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '@/models/user';
import { USER_TABLE_COLUMN_HEADERS } from '@/components/user-table/constants';

interface UserTableProps {
  rows: User[];
  onClick?: (row: User) => void;
}

export function UserTable({ rows = [], onClick }: UserTableProps) {
  const handleRowClick = (row: User) => onClick && onClick(row);

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {USER_TABLE_COLUMN_HEADERS.map(column =>
              <MuiTableCell key={column.id} component={'th'}>{column.label}</MuiTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.id}
                onClick={() => handleRowClick(row)}
                sx={{
                  '&:last-child td, &:last-child td': { border: 0 },
                  cursor: onClick ? 'pointer' : 'default',
                }}
              >
                <MuiTableCell>
                  {row.firstName}
                </MuiTableCell>
                <MuiTableCell>
                  {row.lastName}
                </MuiTableCell>
                <MuiTableCell>
                  {row.email}
                </MuiTableCell>
                <MuiTableCell>
                  {row.age}
                </MuiTableCell>
                <MuiTableCell>
                  {row.bank.currency}
                </MuiTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
