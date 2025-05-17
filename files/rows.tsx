import * as React from 'react';
import {
  Box,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const rows = [
  {
    config: {
      title: 'Config ABC',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Completed', color: '#438E41', bg: '#C9EBC7' },
    statusType: 'completed',
    statusDetails: {
      main: 'Process completed succe......',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '11:59:43',
    endTime: { time: '00:02:00', nextDay: true },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eefc9576-ac46-48b2-afb3-412311b4cb8c',
  },
  {
    config: {
      title: 'Config DEF',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Failed', color: '#D32F2F', bg: '#FBCDCD' },
    statusType: 'failed',
    statusDetails: {
      main: 'Reason for Failure',
      warnings: [],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc5ab28a-e1e4-4944-a8c0-4e49e5bc9d72',
  },
  {
    config: {
      title: 'Config XYZ',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'In Progress', color: '#E28500', bg: '#FFEEC5' },
    statusType: 'inprogress',
    statusDetails: {
      main: 'Execution underway',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec015a37-cd49-49de-8f08-698b68cfd7ad',
  },
  {
    config: {
      title: 'Config UVW',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Completed', color: '#438E41', bg: '#C9EBC7' },
    statusType: 'completed',
    statusDetails: {
      main: 'Process completed succe......',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '11:59:43',
    endTime: { time: '00:02:00', nextDay: true },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc9b65a7-5603-47e8-a8f3-ee45cb1f9dd8',
  },
  {
    config: {
      title: 'Config JKL',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'In Progress', color: '#E28500', bg: '#FFEEC5' },
    statusType: 'inprogress',
    statusDetails: {
      main: 'Execution underway',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/841d0314-3b4c-40bd-93bb-1d0c9a3b7bae',
  },
  {
    config: {
      title: 'Config GHI',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Failed', color: '#D32F2F', bg: '#FBCDCD' },
    statusType: 'failed',
    statusDetails: {
      main: 'Reason for Failure',
      warnings: [],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b15fea4b-ba51-484f-a012-9f7476b7f67a',
  },
  {
    config: {
      title: 'Profile RST',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Completed', color: '#438E41', bg: '#C9EBC7' },
    statusType: 'completed',
    statusDetails: {
      main: 'Process completed succe......',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db6e9dec-f7e6-4987-9f4d-a9f8baf67d88',
  },
  {
    config: {
      title: 'Config PQR',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'In Progress', color: '#E28500', bg: '#FFEEC5' },
    statusType: 'inprogress',
    statusDetails: {
      main: 'Execution underway',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '11:59:43',
    endTime: { time: '00:02:00', nextDay: true },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fce3bbc5-29bf-486e-a697-2c41e3bfbe9e',
  },
  {
    config: {
      title: 'Config LMN',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Failed', color: '#D32F2F', bg: '#FBCDCD' },
    statusType: 'failed',
    statusDetails: {
      main: 'Reason for Failure',
      warnings: [],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cad75440-3f0d-4891-ae72-dfe8f2a925e3',
  },
  {
    config: {
      title: 'Config XYZ',
      desc: 'This is a random description',
      labels: ['Label 1', 'Label 2'],
    },
    user: 'Name ABC',
    status: { label: 'Completed', color: '#438E41', bg: '#C9EBC7' },
    statusType: 'completed',
    statusDetails: {
      main: 'Process completed succe......',
      warnings: [
        "Unable to resolve domain 'api.unknownhost.com'. Using cached IP if available",
        'Some resources could not be fully resolved. Defaults or fallbacks were applied',
      ],
    },
    date: '01/01/2025',
    startTime: '01:42:00',
    endTime: { time: '01:43:00' },
    checked: false,
    checkboxImg: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfefd6f9-aa5a-4dc4-91a4-f49767b85e73',
  },
];

const getCheckboxImg = (img: string) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 39,
      width: 50,
      minWidth: 50,
    }}
  >
    <Box
      sx={{
        borderRadius: '100%',
        p: '9px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        width: 42,
      }}
    >
      <img src={img} alt="checkbox" style={{ width: 18, height: 18 }} />
    </Box>
  </Box>
);

const getHeaderCheckboxImg = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 39,
      width: 50,
      minWidth: 50,
    }}
  >
    <Box
      sx={{
        borderRadius: '100%',
        p: '9px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        width: 42,
      }}
    >
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97b28657-9c06-4335-962b-ed2ec2d22414"
        alt="checkbox"
        style={{ width: 18, height: 18 }}
      />
    </Box>
  </Box>
);

const statusChipSx = (bg: string, color: string) => ({
  bgcolor: bg,
  color,
  px: 1,
  py: 0.5,
  fontFamily: 'Poppins',
  fontSize: 13,
  fontWeight: 400,
  borderRadius: '100px',
  minHeight: 24,
  height: 24,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  lineHeight: '19.5px',
  boxSizing: 'border-box',
});

const warningTextSx = {
  fontFamily: 'Poppins',
  fontSize: 12,
  fontWeight: 400,
  color: '#E28500',
  lineHeight: '18px',
  mt: 0.5,
  alignSelf: 'stretch',
  textAlign: 'left',
};

const nextDaySx = {
  fontFamily: 'Poppins',
  fontSize: 12,
  fontWeight: 400,
  color: '#D32F2F',
  lineHeight: '18px',
  pl: 5,
  mt: 0.25,
  alignSelf: 'flex-start',
};

const configCellSx = {
  display: 'flex',
  flexDirection: 'column',
  px: 0,
  py: 0,
  minWidth: 0,
  alignSelf: 'stretch',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-start',
};

const tableHeaderCellSx = {
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: 14,
  color: '#242424',
  bgcolor: '#F0EFFC',
  borderBottom: '1px solid rgba(0,0,0,0.12)',
  px: '10px',
  py: 0,
  height: 39,
  lineHeight: '21px',
  whiteSpace: 'nowrap',
  alignSelf: 'stretch',
  boxSizing: 'border-box',
};

const tableCellSx = {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: 14,
  color: '#242424',
  borderBottom: '1px solid rgba(0,0,0,0.12)',
  px: '10px',
  py: 0,
  verticalAlign: 'top',
  height: 80,
  alignSelf: 'stretch',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
};

const DataGridTable: React.FC = () => (
  <Box
    sx={{
      width: '100%',
      minWidth: 1200,
      maxWidth: '100vw',
      overflowX: 'auto',
      bgcolor: '#fff',
    }}
  >
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
        bgcolor: '#fff',
        width: '100%',
        minWidth: 1200,
        maxWidth: '100vw',
        overflowX: 'auto',
      }}
    >
      <Table sx={{ minWidth: 1560, tableLayout: 'fixed', bgcolor: '#fff' }}>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: '#F0EFFC',
              borderBottom: '1px solid rgba(0,0,0,0.12)',
              height: 39,
            }}
          >
            <TableCell sx={{ ...tableHeaderCellSx, width: 50, p: 0, minWidth: 50, maxWidth: 50 }}>
              {getHeaderCheckboxImg()}
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'left',
                }}
              >
                Config Descriptor
              </Typography>
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'left',
                }}
              >
                User
              </Typography>
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'left',
                }}
              >
                Status
              </Typography>
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'left',
                }}
              >
                Status Details
              </Typography>
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px', textAlign: 'right' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'right',
                }}
              >
                Date
              </Typography>
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'left',
                }}
              >
                Start Time
              </Typography>
            </TableCell>
            <TableCell sx={{ ...tableHeaderCellSx, minWidth: 215.7, p: 0, pl: '10px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#242424',
                  lineHeight: '21px',
                  alignSelf: 'stretch',
                  textAlign: 'left',