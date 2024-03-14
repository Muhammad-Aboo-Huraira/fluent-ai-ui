import React from "react";
import PropTypes from "prop-types";
import arrowUp from "../../assets/Vector-10.png";
import arrowDown from "../../assets/Vector-15.png";
import MailIcon from "../../assets/Vector-6.png";
import GermanIcon from "../../assets/Group 1171275756.png";
import RedeemedIcon from "../../assets/Vector-8.png";
import CancelledIcon from "../../assets/Group.png";
import CSV from "../../assets/csv.png";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Checkbox,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Box,
  Typography,
  Paper,
  IconButton,
  Collapse,
  Button,
  Avatar,
} from "@mui/material";
function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  price,
  TotalRedeemed,
  Street,
  zip,
  country
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    TotalRedeemed,
    Street,
    zip,
    country,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              // aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <Avatar
                  src={arrowUp}
                  sx={{ height: 8, width: 10, borderRadius: 0 }}
                />
              ) : (
                <Avatar
                  src={arrowDown}
                  sx={{ height: 8, width: 10, borderRadius: 0 }}
                />
              )}
            </IconButton>
            {row.name}
          </Box>
        </TableCell>
        <TableCell align="center"><span style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}><Avatar src={MailIcon} sx={{ borderRadius: 0, height: 10, width: 14, marginRight: 2}} />{row.calories}</span></TableCell>
        <TableCell align="center"><span style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}><Avatar src={GermanIcon} sx={{ borderRadius: 0, height: 10, width: 14, marginRight: 2}} />{row.fat}</span></TableCell>
        <TableCell align="center">{row.carbs}</TableCell> 
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center"><span style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}><Avatar src={RedeemedIcon} sx={{ borderRadius: 0, height: 10, width: 10, marginRight: 1}} />{row.TotalRedeemed}</span></TableCell> 
        <TableCell align="center">{row.Street}</TableCell>
        <TableCell align="center">{row.zip}</TableCell>
        <TableCell align="center"><span style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}><Avatar src={CancelledIcon} sx={{ borderRadius: 0, height: 10, width: 10, marginRight: 1}} />{row.country}</span></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {" "}
                Coupon Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell key={index} component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell key={index}>{historyRow.customerId}</TableCell>
                      <TableCell key={index} align="right">{historyRow.amount}</TableCell>
                      <TableCell key={index} align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
const rows = [
  createData("Frozen", "ww@gmail.com", 6.0, 24, 4.0, 3.99, 23, "Oct 25th 23", 23, 3),
  createData("Ice cream", "ww1@gmail.com", 9.0, 37, 4.3, 4.99, 23, "Oct 25th 23", 23, 3),
  createData("Eclair", "ww2@gmail.com", 16.0, 24, 6.0, 3.79, 23, "Oct 25th 23", 23, 3),
  createData("Cupcake", "ww3@gmail.com", 3.7, 67, 4.3, 2.5, 23, "Oct 25th 23", 23, 3),
  createData("Gingerbread", "ww4@gmail.com", 16.0, 49, 3.9, 1.5, 23, "Oct 25th 23", 23, 3),
];
export default function AllCustomers() {
  let value = "";
  return (
    <div>
      {/* Heading with button */}
      <div>
        <Typography fontWeight={"bold"} fontSize={"25px"}>
          Platforms
        </Typography>
        <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Fluent AI"}
                sx={{
                  height: 50,
                  fontFamily: "Outfit",
                  borderRadius: "10px",
                  width: { md: "20%", sm: "30%", xs: "30%" },
                  mb: 2,
                  backgroundColor: "#F9FAFB",
                  color: value === "" ? "grey" : undefined,
                  border: "1px solid black",
                  "& .MuiSelect-icon": {
                    backgroundImage: `url(${arrowDown})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: 15,
                    height: "100%",
                    marginRight: 0,
                    marginTop: -1.5,
                  },
                }}
              >
                <MenuItem value="Fluent AI" selected disabled>Fluent AI</MenuItem>
              </Select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"22px"}>
          Fluent AI Customers Table
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            borderRadius: "11px",
            px: 4,
          }}
        >
          Export CSV
          <span style={{ marginTop: 4, marginLeft: "20px" }}>
            <Avatar src={CSV} sx={{ height: 20, width: 20, borderRadius: 0 }} />
          </span>
        </Button>
      </div>
      <div style={{ maxHeight: "600px", overflowY: "auto" }}>
        <TableContainer
          component={Paper}
          style={{ border: "1px solid black", borderRadius: "10px" }}
        >
          {/* filter row and select all */}
          <TableRow
            sx={{
              background: "#6377E8",
              borderRadius: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TableCell
              style={{
                fontWeight: "bold",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              Select All
              <Checkbox sx={{ color: "white" }} />
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                color: "white",
                borderBottom: "none",
                display: "flex",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {/* Text */}
              <div style={{ alignSelf: "center" }}>Date:</div>
              <div style={{ alignSelf: "center" }}>From</div>
              {/* Selects */}
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                displayEmpty
                sx={{
                  height: 50,
                  fontFamily: "Outfit",
                  borderRadius: "10px",
                  width: { md: "40%", sm: "30%", xs: "30%" },
                  backgroundColor: "#F9FAFB",
                  color: value === "" ? "grey" : undefined,
                  border: "1px solid black",
                  "& .MuiSelect-icon": {
                    backgroundImage: `url(${arrowDown})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: 15,
                    height: "100%",
                    marginRight: 0,
                    marginTop: -1.5,
                  },
                }}
                inputProps={{
                  readOnly: true,
                }}
              >
                <MenuItem value="">MM/DD/YYYY</MenuItem>
              </Select>
              <div style={{ alignSelf: "center" }}>To</div>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                displayEmpty
                sx={{
                  fontFamily: "Outfit",
                  borderRadius: "10px",
                  width: { md: "40%", sm: "30%", xs: "30%" },
                  height: 50,
                  backgroundColor: "#F9FAFB",
                  color: value === "" ? "grey" : undefined,
                  border: "1px solid black",
                  "& .MuiSelect-icon": {
                    backgroundImage: `url(${arrowDown})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: 15,
                    height: "100%",
                    marginRight: 0,
                    marginTop: -1.5,
                  },
                }}
                inputProps={{
                  readOnly: true,
                }}
              >
                <MenuItem value="">MM/DD/YYYY</MenuItem>
              </Select>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                displayEmpty
                sx={{
                  height: 50,
                  fontFamily: "Outfit",
                  borderRadius: "10px",
                  width: { md: "40%", sm: "30%", xs: "30%" },
                  backgroundColor: "#F9FAFB",
                  color: value === "" ? "grey" : "black",
                  border: "1px solid black",
                  "& .MuiSelect-icon": {
                    backgroundImage: `url(${arrowDown})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: 15,
                    height: "100%",
                    marginRight: 0,
                    marginTop: -1.5,
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select filter
                </MenuItem>
                <MenuItem value="Old to New">Old to New</MenuItem>
                <MenuItem value="New to Old">New to Old</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
          {/* Main Table */}
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow style={{ fontWeight: "bold" }}>
                <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Country
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Zip
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Street
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  TotalRedeemed
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total Coupon
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total Subscriptions
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Subscription Canceled
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
