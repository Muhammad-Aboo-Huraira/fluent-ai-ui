import * as React from "react";
import { useState } from "react"; // Import useState hook
import { createTheme, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../../assets/logo1.png";
import SelectedDashboardIcon from "../../assets/seldashboard.png";
import UnSelectedDashboardIcon from "../../assets/unseldashboard.png";
import SelectedCouponIcon from "../../assets/selcoupons.png";
import UnSelectedCouponIcon from "../../assets/unselcoupons.png";
import SelectedCustomers from "../../assets/selcustomers.png";
import UnSelectedCustomers from "../../assets/unselcustomers.png";
import SelectedPartners from "../../assets/Vector-13.png";
import UnSelectedPartners from "../../assets/Vector-14.png";
import Logout from "../../assets/loggedout.png";
import NotificationIcon from "../../assets/style=fill.png";
import ProfileIcon from "../../assets/Ellipse 9.png";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const fontTheme = createTheme({
  typography: {
    fontFamily: "outfit",
  },
});

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ data }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = useState(""); // State variable to track selected option
  const navigate = useNavigate();

  useEffect(() => {
    const storedSelectedOption = localStorage.getItem("selectedOption");
    if (storedSelectedOption) {
      setSelectedOption(storedSelectedOption);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedOption]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Sidebar data with selected/unselected icons
  const sidebarData = [
    {
      text: "Dashboard",
      icon:
        selectedOption === "Dashboard" ? (
          <Avatar
            src={SelectedDashboardIcon}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ) : (
          <Avatar
            src={UnSelectedDashboardIcon}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ),
      path: "/",
    },
    {
      text: "Create Coupon",
      icon:
        selectedOption === "Create Coupon" ? (
          <Avatar
            src={SelectedCouponIcon}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ) : (
          <Avatar
            src={UnSelectedCouponIcon}
            sx={{ height: 18, width: 20, borderRadius: 0 }}
          />
        ),
      path: "/generatecoupons",
    },
    {
      text: "Customers",
      icon:
        selectedOption === "Customers" ? (
          <Avatar
            src={SelectedCustomers}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ) : (
          <Avatar
            src={UnSelectedCustomers}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ),
      path: "/allcustomer",
    },
    {
      text: "Create Partner",
      icon:
        selectedOption === "Create Partner" ? (
          <Avatar
            src={UnSelectedPartners}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ) : (
          <Avatar
            src={SelectedPartners}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
        ),
      path: "/createpartner",
    },
  ];

  // Function to handle click on sidebar item
  const handleSidebarItemClick = (text, path) => {
    setSelectedOption(text);
    navigate(path);
  };


  return (
    <ThemeProvider theme={fontTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ background: "white" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "black" }}
            >
              {selectedOption === "/" ? "Dashboard" : selectedOption}
            </Typography>
            {/* Add your icons here */}
            <IconButton>
            <Avatar
            src={Logout}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
            </IconButton>
            <IconButton >
            <Avatar
            src={NotificationIcon}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
            </IconButton>
            <IconButton>
            <Avatar
            src={ProfileIcon}
            sx={{ height: 20, width: 20, borderRadius: 0 }}
          />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              bgcolor: "#3F51B5",
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Avatar
              src={Logo}
              alt={Logo}
              sx={{
                width: 160,
                height: 35,
                borderRadius: 0,
                background: "none",
              }}
            />
            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            {sidebarData.map((item, index) => (
              <Box sx={{ margin: "20px" }} key={index}>
                <ListItem
                  key={item.index}
                  disablePadding
                  onClick={() => handleSidebarItemClick(item.text, item.path)} // Handle click event and update selected option
                >
                  <ListItemButton
                    sx={{
                      backgroundColor:
                        selectedOption === item.text ? "white" : "transparent",
                      "&:hover": {
                        backgroundColor:
                          selectedOption === item.text
                            ? "white"
                            : "rgba(255, 255, 255, 0.08)",
                      },
                      borderRadius: "10px",
                      boxShadow:
                        selectedOption === item.text
                          ? "2px 0px 10px rgba(0, 0, 0, 0.5)"
                          : "none",
                    }}
                    onClick={() => handleSidebarItemClick(item.text, item.path)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color: selectedOption === item.text ? "black" : "white",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {data}
        </Main>
      </Box>
    </ThemeProvider>
  );
}
