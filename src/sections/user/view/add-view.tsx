import { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Avatar,
  Breadcrumbs,
  CardContent,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  Switch,
  TextField,
} from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import CustomTimeline from 'src/components/timeline/custom-timeline';
import BreadcrumbsComponent from 'src/components/breadcrumbs/breadcrumbs';

// ----------------------------------------------------------------------

export default function AddView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickSave = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <DashboardContent>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          <BreadcrumbsComponent />
        </Stack>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:save-fill" />}
          onClick={handleClickSave}
        >
          Save
        </Button>
      </Box>

      <Grid container spacing={1}>
        <Grid container size={{ xs: 12, md: 4 }} spacing={1}>
          <Grid size={12}>
            <Card>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: '50%',
                      border: '2px dashed #d0d5dd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconButton component="label">
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: '#f1f3f5',
                        }}
                      >
                        <PhotoCamera />
                      </Avatar>
                      <input hidden accept="image/*" type="file" />
                    </IconButton>
                  </Box>

                  <Typography variant="caption" color="text.secondary">
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br />
                    max size of 3 Mb
                  </Typography>

                  <Box sx={{ width: '100%', textAlign: 'left', mt: 3 }}>
                    <Typography variant="subtitle2">Email verified</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Disabling this will automatically send
                      <br />
                      the user a verification email
                    </Typography>

                    <FormControlLabel control={<Switch defaultChecked />} label="" />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={12}>
            <Card>
              <CardContent>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="subtitle2">Transaction History</Typography>
                    <Typography variant="caption">
                      Outstanding Balance : {fCurrency(15000)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    startIcon={<Iconify icon="mingcute:add-line" />}
                  >
                    Transaction
                  </Button>
                </Stack>

                <CustomTimeline />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Full name" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Email address" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField select fullWidth label="Country" defaultValue="">
                    <MenuItem value="usa">United States</MenuItem>
                    <MenuItem value="pak">Pakistan</MenuItem>
                    <MenuItem value="uk">United Kingdom</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Phone number" placeholder="Enter phone number" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="State/region" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="City" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Address" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Zip/code" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Company" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Role" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
