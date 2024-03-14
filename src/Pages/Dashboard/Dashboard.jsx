import React from "react";
import PropTypes from "prop-types";
import arrowUp from "../../assets/Vector-10.png";
import arrowDown from "../../assets/Vector-15.png";
import CSV from "../../assets/csv.png";
import Tick from "../../assets/Vector-4.png";
import Desh from "../../assets/Vector-7.png";
import Customers from "../../assets/customers.png";
import Revenue from "../../assets/revenue.png";
import Campaigns from "../../assets/campaigns.png";
import Partners from "../../assets/partners.png";
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
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function createData(
  name,
  calories,
  fat,
  carbs,
  OurCommission,
  price,
  TotalRedeemed
) {
  return {
    name,
    calories,
    fat,
    carbs,
    OurCommission,
    price,
    TotalRedeemed,
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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/campaigns");
  };
  // rows content
  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          backgroundColor: open ? "#FFFF9980" : "inherit",
        }}
      >
        <TableCell component="th" scope="row">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              // aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <img src={arrowUp} /> : <img src={arrowDown} />}
            </IconButton>
            <span style={{ color: "#0055FF" }}>{row.name}</span>
          </Box>
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">
          {row.OurCommission} <span style={{ color: "green" }}>%</span>
        </TableCell>
        <TableCell align="center">
          <span style={{ color: "yellow" }}>$</span>
          {row.TotalRedeemed}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {" "}
                Campaigns Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="center">%Off</TableCell>
                    <TableCell align="center">Redeemed</TableCell>
                    <TableCell align="center">Expired</TableCell>
                    <TableCell align="center">Our Commission</TableCell>
                    <TableCell align="center">Total Revenue </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody onClick={handleClick} style={{ cursor: "pointer" }}>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>

                      <TableCell align="center">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                      <TableCell align="center">
                        <img src={Tick} alt="" />
                        {row.fat}
                      </TableCell>
                      <TableCell align="center">
                        <img src={Desh} alt="" />
                        {row.carbs}
                      </TableCell>
                      <TableCell align="center">
                        {row.OurCommission}{" "}
                        <span style={{ color: "green" }}>%</span>
                      </TableCell>
                      <TableCell align="center">
                        <span style={{ color: "yellow" }}>$</span>
                        {row.TotalRedeemed}
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
    OurCommission: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen", 159, 6.0, 24, 4.0, 3.99, 23),
  createData("Ice cream", 237, 9.0, 37, 4.3, 4.99, 23),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79, 23),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5, 23),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5, 23),
];

export default function Dashboard() {
  let value = "";
  return (
    <div>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ECECEC",
          color: "#0055FF",
          my: 5,
          py: 3,
          gap: 5,
          boxShadow:
            " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        {/* 1st Div */}
        <Box
          sx={{
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 15,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Customers</span>
            <Avatar src={Customers} sx={{ borderRadius: 0, height: 25, width: 25 }} />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
        </Box>
        {/* 2nd Div */}
        <Box
          sx={{
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 15,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Partners</span>
            <Avatar src={Partners} sx={{ borderRadius: 0, height: 25, width: 25 }} />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
        </Box>
        {/* 3rd Div */}
        <Box
          sx={{
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 15,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Revenue</span>
            <Avatar src={Revenue} sx={{ borderRadius: 0, height: 25, width: 25 }} />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
        </Box>
        {/* 4th Div */}
        <Box
          sx={{
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 10,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B ", // Adjust color as needed
              }}
            ></span>
            <span>Total Campaigns</span>
            <Avatar src={Campaigns} sx={{ borderRadius: 0, height: 25, width: 25 }} />
          </div>
          <Box sx={{ color: "black", ml: 3, display: "flex", gap: 5 }}>
            Total <span>2348</span>
          </Box>
        </Box>
        {/* 5th Div */}
        <Box
          sx={{
            bgcolor: "white",
            p: 1,
            my: 1,
            mx: 2,
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              gap: 5,
              margin: "10px",
              padding: "0px 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 10,
                bottom: 10,
                left: 20,
                width: "1px",
                height: "80%",
                backgroundColor: "#8E8B8B", // Adjust color as needed
              }}
            ></span>
            <span>Search by date</span>
          </div>
          <Box sx={{ ml: 3 }}>
            <TextField
              type="date"
              InputProps={{
                style: {
                  padding: "16px 2px",
                  color: "#929292",
                  background: "none",
                  height: "1.4375em",
                  width: "100%",
                  boxSizing: "", // Remove box-sizing property
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"22px"}>
          Partners Table
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
          Export CVS
          <span style={{ marginTop: 4, marginLeft: "20px" }}>
            <img src={CSV} height={25} />
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
              colSpan={2}
              style={{
                fontWeight: "bold",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              Select All
              <Checkbox sx={{ color: "white" }} />
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
                  width: { md: "60%", sm: "30%", xs: "30%" },
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
                  Select Partner
                </MenuItem>
                <MenuItem value="Old to New">Old to New</MenuItem>
                <MenuItem value="New to Old">New to Old</MenuItem>
              </Select>
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                color: "white",
                borderBottom: "none",
                display: "flex",
                justifyContent: "center", // Center children horizontally
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
                  Total campaigns
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total redeem
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total expired
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Our commission
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Total Revenue
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}