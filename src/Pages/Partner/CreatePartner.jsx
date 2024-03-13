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

const CreatePartner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [partnerName, setPartnerName] = useState("");
const [campaignType, setCampaignType] = useState("Select Campaign Type");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

if (partnerName === "" || campaignType === "") {
        enqueueSnackbar(`Please fill all the required fields`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
      } else if (/^\d/.test(partnerName)) {
        enqueueSnackbar(`Name of partner should not start with a number`, {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      }  else {
        setLoading(true);
        const objToSend = {
          partnerName,
          campaignType,
        };
        if (objToSend !== null) {
          console.log(objToSend);
          enqueueSnackbar(`Request submitted successfully`, {
            autoHideDuration: 3000,
            variant: "success",
          });
          setPartnerName("")
          setCampaignType("")
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
            Create Partner
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
                  placeholder="Name of partner"
                  margin="normal"
                  autoComplete="off"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e?.target.value)}
                  id="partnerName"
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
                  Campaign type
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
                  placeholder="Select Campaign Type"
                  margin="normal"
                  autoComplete="off"
                  value={campaignType}
                  onChange={(e) => setCampaignType(e?.target.value)}
                  id="campaignType"
                  size="large"
                >
                  <MenuItem value="Select Campaign Type" selected disabled>Select Campaign Type</MenuItem>
                  <MenuItem value="Voucher">Voucher</MenuItem>
                  <MenuItem value="Coupon">Coupon</MenuItem>
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
                Generate <Avatar src={GenerateIcon} sx={{ borderRadius: 0, height: 15, width: 20, marginLeft: 2 }}/>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default CreatePartner;
