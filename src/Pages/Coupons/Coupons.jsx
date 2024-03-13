import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { dispatch } from "../../Redux/store";
import GenerateIcon from "../../assets/Layer_2.png";
// import { createRequest} from "../../Redux/Slices/partnersSlice";
import { useNavigate } from "react-router-dom";

const Coupons = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [partnerName, setPartnerName] = useState("Select partner name");
  const [productName, setProductName] = useState("Select product name");
  const [date, setDate] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [salesPersonName, setSalesPersonName] = useState("Select sale's person name");
  const [retailPrice, setRetailPrice] = useState(0);
  const [commission, setCommission] = useState(0);
  const [percentOff, setPercentOff] = useState(0);
  const [noOfCoupons, setNoOfCoupons] = useState(0);
  const [currency, setCurrency] = useState("$");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Validation checks
      if (
        partnerName === "" ||
        productName === "" ||
        salesPersonName === "" ||
        currency === "" ||
        date === "" ||
        campaignName === "" ||
        retailPrice === "" ||
        commission === "" ||
        percentOff === "" ||
        noOfCoupons === ""
      ) {
        enqueueSnackbar(`Please fill all the required fields`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
      } else if (/^\d/.test(campaignName)) {
        enqueueSnackbar(`name should not start with a number`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else {
        setLoading(true);
        const objToSend = {
          partnerName,
          productName,
          salesPersonName,
          currency,
          date,
          campaignName,
          retailPrice,
          commission,
          percentOff,
          noOfCoupons,
        };
        if (objToSend !== null) {
          console.log(objToSend);
          enqueueSnackbar(`Request submitted successfully`, {
            autoHideDuration: 3000,
            variant: "success",
          });
          setCampaignName("");
          setPartnerName("");
          setProductName("");
          setSalesPersonName("");
          setCurrency("");
          setDate("");
          setRetailPrice("");
          setCommission("");
          setPercentOff("");
          setNoOfCoupons("");
          setLoading(false);
          navigate("/");
        } else {
          setLoading(false);
          enqueueSnackbar(`Request not submitted successfully`, {
            autoHideDuration: 3000,
            variant: "error",
          });
        }
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar(`Request not submitted successfully`, {
        autoHideDuration: 3000,
        variant: "error",
      });
      console.log(error);
    }
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            mt: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 450,
              fontSize: "24px",
              color: "#111111",
              fontFamily: "Outfit",
            }}
          >
            Create Coupons
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            backgroundColor: "#6377E81A",
            my: 2,
            boxShadow:
              " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              padding: "30px",
              display: "flex",
              flexDirection: { sm: "column", xs: "column" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", sm: "column", xs: "column" },
                justifyContent: "space-between",
                gap: "100px",
              }}
            >
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Partner Name
                </InputLabel>
                <TextField
                  select
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  placeholder="Select partner name"
                  margin="normal"
                  autoComplete="off"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e?.target.value)}
                  id="partnerName"
                  size="large"
                >
                  <MenuItem value="Select partner name" selected disabled>
                    Select partner name
                  </MenuItem>
                  <MenuItem value="Huraira">Huraira</MenuItem>
                  <MenuItem value="Usama">Usama</MenuItem>
                </TextField>
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Product Name
                </InputLabel>
                <TextField
                  select
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  placeholder="Select product name"
                  margin="normal"
                  autoComplete="off"
                  value={productName}
                  onChange={(e) => setProductName(e?.target.value)}
                  id="productName"
                  size="large"
                >
                  <MenuItem value="Select product name" selected disabled>Select product name</MenuItem>
                  <MenuItem value="Fluent Fast Monthly">Fluent Fast Monthly</MenuItem>
                  <MenuItem value="Fluent Mastery Monthly">Fluent Mastery Monthly</MenuItem>
                  <MenuItem value="Fluent Fast Yearly">Fluent Fast Yearly</MenuItem>
                  <MenuItem value="Fluent Mastery Yearly">Fluent Mastery Yearly</MenuItem>
                </TextField>
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Last Date
                </InputLabel>
                <TextField
                  type="date"
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  margin="normal"
                  autoComplete="off"
                  value={date}
                  onChange={(e) => setDate(e?.target.value)}
                  id="date"
                  size="large"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", sm: "column", xs: "column" },
                justifyContent: "space-between",
                gap: "100px",
              }}
            >
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Campaign Name
                </InputLabel>
                <TextField
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  placeholder="Enter coupon name"
                  margin="normal"
                  autoComplete="off"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e?.target.value)}
                  id="campaignName"
                  size="large"
                />
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Sale's Person Name
                </InputLabel>
                <TextField
                  select
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  placeholder="Select sale's person name"
                  margin="normal"
                  autoComplete="off"
                  value={salesPersonName}
                  onChange={(e) => setSalesPersonName(e?.target.value)}
                  id="salesPersonName"
                  size="large"
                >
                  <MenuItem value="Select sale's person name" selected disabled>
                    Select sale's person name
                  </MenuItem>
                  <MenuItem value="Hasnain">Hasnain</MenuItem>
                  <MenuItem value="Umer">Umer</MenuItem>
                </TextField>
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Retail Price
                </InputLabel>
                <TextField
                  type="number"
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  margin="normal"
                  autoComplete="off"
                  value={retailPrice}
                  inputProps={{ min: 0 }}
                  onChange={(e) => setRetailPrice(e?.target.value)}
                  id="retailPrice"
                  size="large"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", sm: "column", xs: "column" },
                justifyContent: "space-between",
                marginBottom: "20px",
                gap: "100px",
              }}
            >
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Commission in (Selected Currency)
                </InputLabel>
                <TextField
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  margin="normal"
                  type="number"
                  autoComplete="off"
                  value={commission}
                  inputProps={{ min: 0 }}
                  onChange={(e) => setCommission(e?.target.value)}
                  id="commission"
                  size="large"
                />
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Percent off (%)
                </InputLabel>
                <TextField
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  margin="normal"
                  autoComplete="off"
                  value={percentOff}
                  inputProps={{ min: 0 }}
                  type="number"
                  onChange={(e) => setPercentOff(e?.target.value)}
                  id="percentOff"
                  size="large"
                />
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Number of coupons
                </InputLabel>
                <TextField
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  margin="normal"
                  autoComplete="off"
                  type="number"
                  value={noOfCoupons}
                  inputProps={{ min: 0 }}
                  onChange={(e) => setNoOfCoupons(e?.target.value)}
                  id="noOfCoupons"
                  size="large"
                />
              </Box>
              <Box
                sx={{
                  width: { md: "48%", sm: "100%", xs: "100%" },
                }}
              >
                <InputLabel
                  sx={{
                    color: "#6B7280",
                    fontWeight: "bold",
                    fontFamily: "Outfit",
                  }}
                >
                  Currency
                </InputLabel>
                <TextField
                  select
                  sx={{
                    mt: 1,
                    mb: 2,
                    fontFamily: "Outfit",
                    width: { md: "100%", sm: "100%", xs: "100%" },
                    backgroundColor: "#F9FAFB",
                    "& label.Mui-focused": {
                      color: "#0055FF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#0055FF",
                      },
                    },
                  }}
                  margin="normal"
                  autoComplete="off"
                  value={currency}
                  onChange={(e) => setCurrency(e?.target.value)}
                  id="description"
                  size="large"
                >
                  <MenuItem value="Select Currency" selected disabled>
                    Select Currency
                  </MenuItem>
                  <MenuItem value="$" selected>$</MenuItem>
                  <MenuItem value="€">€</MenuItem>
                </TextField>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 2,
                  mb: 2,
                  background: "#3F51B5",
                  color: "#FFF",
                  fontFamily: "Outfit",
                }}
              >
                {loading ? (
                  <CircularProgress
                    color="#3F51B5"
                    size="1rem"
                    sx={{ mr: 2 }}
                  />
                ) : (
                  ""
                )}
                Generate{" "}
                <Avatar
                  src={GenerateIcon}
                  sx={{ borderRadius: 0, height: 15, width: 20, marginLeft: 2 }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Coupons;
