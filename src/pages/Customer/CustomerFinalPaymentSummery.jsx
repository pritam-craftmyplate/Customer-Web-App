import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CMP_Logo from "../../assets/Purple Logo.svg";
import Service_Box from "../../assets/user/Service_Box.svg";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CustomFooter from "./CustomFooter";
import { borderColor, buttonColor, textColor } from "../../constants/colors";
import { Body2 } from "../../components/typography/CustomTypography";
import { useState, useEffect } from "react";
import SelectAddressDrawer from "./SelectAddressDrawer";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const orderDetails = [
  {
    title: "Birthday Party Platter",
    icon: Service_Box,
    guests: 200,
    date: "11/02/2025",
    time: "12:30 PM - 02:30 PM",
    originalPrice: "\u20B924,600",
    discountedPrice: "\u20B922,200",
  },
  {
    title: "Birthday Party Platter",
    icon: Service_Box,
    guests: 200,
    date: "11/02/2025",
    time: "12:50 PM - 02:30 PM",
    originalPrice: "\u20B924,600",
    discountedPrice: "\u20B922,200",
  },
];

const pricingDetails = [
  { label: "Food & service charges", value: "\u20B924,600" },
  { label: "GST charges", value: "\u20B91,600" },
  { label: "Packing charges", value: "\u20B9400" },
  { label: "Delivery charges", value: "\u20B92,600" },
  { label: "COUPON DISCOUNT", value: "-\u20B93,000", color: "green" },
];

export default function CustomerFinalPaymentSummery() {
  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const location = useLocation();
  const addressDetails = location.state;
  const navigate = useNavigate();

  console.log(addressDetails);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleToggleDrawer = (open) => () => {
    setOpen(open);
  };

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your Razorpay Test Key
      amount: 3220000, // Amount in paise (₹32,200)
      currency: "INR",
      name: "Company Name",
      description: "Order Payment",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#6A1B9A",
      },
      modal: {
        ondismiss: function () {
          alert("Payment Cancelled or Failed");
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Box sx={{ mb: 8 }}>
      <Box
        sx={{
          p: 2,
          bgcolor: buttonColor.primary,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box component="img" src={CMP_Logo} width={70} />
      </Box>
      <Container maxWidth="xs" sx={{ bgcolor: "#f9f9f9", py: 2 }}>
        {orderDetails.map((order, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{ p: 2, mb: 2, borderRadius: 3 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box component="img" src={order.icon} />
              <Typography fontWeight="500">{order.title}</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <PersonIcon fontSize="small" />
              <Body2 text={order.guests} color="#484C51" />
              <CalendarTodayIcon fontSize="small" color="#484C51" />
              <Body2 text={order.date} />
              <AccessTimeIcon fontSize="small" color="#484C51" />
              <Body2 text={order.time} />
            </Box>
          </Paper>
        ))}

        {!addressDetails && (
          <Paper
            elevation={1}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              width: "100%",
              textAlign: "start",
            }}
            component="button"
            onClick={handleToggleDrawer(true)}
          >
            <Typography fontWeight="500">+ Add address</Typography>
          </Paper>
        )}

{addressDetails && (
  <Paper
    elevation={1}
    sx={{
      p: 1.5,
      mb: 2,
      borderRadius: 2,
      border: `2px solid ${textColor.primary}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Box display="flex" alignItems="center" gap={1}>
      <PlaceIcon sx={{ color: textColor.primary, fontSize: "20px" }} />
      <Box>
        {addressDetails.addressLabel && (
          <Typography variant="body2" sx={{ fontWeight: "bold", color: textColor.primary }}>
            {addressDetails.addressLabel}
          </Typography>
        )}
        {/* Flat No & Area on the first line */}
        <Typography variant="body1">
          Flat No: {addressDetails.flatNo}, Area: {addressDetails.locality}
        </Typography>
        {/* Landmark on a separate line */}
        {addressDetails.landmark && (
          <Typography variant="body1">Landmark: {addressDetails.landmark}</Typography>
        )}
        {/* Address Limited to Max 3 Lines */}
        {addressDetails.address && (
          <Typography 
            variant="body1" 
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Limits to 3 lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            {addressDetails.address}
          </Typography>
        )}
      </Box>
    </Box>
    <Typography
      variant="body2"
      color="primary"
      sx={{ cursor: "pointer", fontWeight: "bold" }}
      onClick={() => {
        navigate("/add-address-form", {
          state: { from: location.pathname },
        });
      }}
    >
      Edit
    </Typography>
  </Paper>
)}





        <SelectAddressDrawer
          open={open}
          setOpen={setOpen}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          handleToggleDrawer={handleToggleDrawer}
        />

        <Paper elevation={1} sx={{ p: 2, mb: 2, borderRadius: 3 }}>
          {pricingDetails.map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              py={0.5}
            >
              <Typography color={item.color || "inherit"}>
                {item.label}
              </Typography>
              <Typography>{item.value}</Typography>
            </Box>
          ))}
          <Divider
            sx={{ borderBottom: `2px dashed ${borderColor.lightGray}`, py: 1 }}
          />
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            fontWeight="bold"
          >
            <Typography>To Pay</Typography>
            <Typography>₹32,200</Typography>
          </Box>
        </Paper>

        <Box
          mt={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#f5f5f5"
          p={2}
          borderRadius={2}
        >
          <Box>
            <Typography fontSize={18}>To Pay</Typography>
            <Typography fontWeight="500" fontSize={18}>
              ₹32,200
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#6A1B9A", color: "#fff" }}
            onClick={handlePayment}
            disabled={!addressDetails}
          >
            Pay Now
          </Button>
        </Box>
      </Container>
      <CustomFooter />
    </Box>
  );
}
