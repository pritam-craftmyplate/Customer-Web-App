
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import RoomServiceIcon from "@mui/icons-material/RoomService";

import LogoSpinner from "../../components/spinner/LogoSpinner.jsx";
import CMP_Logo from "../../assets/Purple Logo.svg";
import { buttonColor } from "../../constants/colors";
import { getPlattersByGroupIdAsync } from "../../redux/service/platterService.jsx";

export default function EventDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quoteGroupId, phoneNumber } = useParams();

  // Fetch platters from Redux store
  const { platters, loading, error } = useSelector((state) => state.platter);

 // console.log("Redux Platters Data:", platters);

  useEffect(() => {
    if (!quoteGroupId || !phoneNumber) return;
   // console.log("Dispatching getPlattersByGroupIdAsync...");
    dispatch(getPlattersByGroupIdAsync({ quoteGroupId, phoneNumber }));
  }, [dispatch, quoteGroupId, phoneNumber]);

  if (loading) return <LogoSpinner />;
  if (error) {
   
    return <Typography color="error">Failed to fetch event details</Typography>;
  }

  // Extract data safely
  const quotationDetails = platters?.[0]?.quotationDetails || {};
  
  const eventDetails = [
    { label: "Event Type", value: quotationDetails?.occassionType || "-" },
    { label: "No. of guests", value: quotationDetails?.guestCount || "-" },
    { label: "Quote", value: quotationDetails?.platter?.maxPrice ?? "-" }, 
    { label: "Date", value: quotationDetails?.eventDate || "-" },
    { label: "Time", value: quotationDetails?.eventTime || "-" },
    { label: "Meal Type", value: quotationDetails?.mealType || "-" },
    { label: "Venue Type", value: quotationDetails?.venueType || "-" },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", mb: 8 }}>
      {/* Logo */}
      <Box sx={{ p: 2, bgcolor: buttonColor.primary, color: "#fff", textAlign: "center" }}>
        <Box component="img" src={CMP_Logo} width={70} />
      </Box>

      {/* Event Name */}
      <Box sx={{ p: 2, bgcolor: "#F6EDFF", color: "black", textAlign: "center" }}>
        <Typography variant="subtitle1" fontWeight="500">
          {quotationDetails.cartName || "Event Details"}
        </Typography>
      </Box>

      <Container>
        {/* Event Details */}
        <Box mt={2}>
          <Typography variant="h6" fontWeight="bold">Event Details</Typography>
          {eventDetails.map((detail, index) => (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              sx={{ borderBottom: "1px solid #eee", py: 1 }}
            >
              <Typography>{detail.label}</Typography>
              <Typography color="grey">{detail.value}</Typography>
            </Stack>
          ))}
        </Box>

        {/* Pay Now Button */}
        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/customer/payment-summary")}
            sx={{
              bgcolor: "#6A1B9A",
              color: "#fff",
              py: 1.5,
              display: "flex",
              justifyContent: "space-between",
              px: 2,
            }}
          >
            <Typography variant="body1">Pay Now</Typography>
            <Box textAlign="right">
              <Typography variant="body1">
                ₹{quotationDetails?.totalPrice ? quotationDetails.totalPrice.toLocaleString() : "32,200"}
              </Typography>
              <Typography variant="caption">+ Delivery Charges</Typography>
            </Box>
          </Button>
        </Box>
      </Container>

      {/* Bottom Navigation */}
      <BottomNavigation
        showLabels
        sx={{
          bottom: 0,
          width: "100%",
          position: "fixed",
          bgcolor: "#f9f9f9",
          borderTop: "1px solid #ddd",
          boxShadow: "0px -2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate("/")} />
        <BottomNavigationAction label="Payment" icon={<PaymentIcon />} onClick={() => navigate("/customer/payment-summary")} />
        <BottomNavigationAction label="Services" icon={<RoomServiceIcon />} onClick={() => navigate("/services")} />
      </BottomNavigation>
    </Box>
  );
}
