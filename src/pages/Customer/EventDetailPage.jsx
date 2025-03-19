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
import CMP_Logo from "../../assets/Purple Logo.svg";
import { buttonColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const eventDetails = [
  { label: "Event Type", value: "Birthday Party" },
  { label: "No.of guests", value: "200" },
  { label: "Quote", value: "₹20,000" },
  { label: "Date", value: "20/01/2025" },
  { label: "Time", value: "06:00 PM" },
  { label: "Preferences", value: "Veg - 40, Non veg - 160" },
  { label: "Service type", value: "Delivery box" },
];

const items = [
  {
    category: "Starters",
    items: [
      { name: "Veg Manchurian", type: "Veg" },
      { name: "Paneer 65", type: "Veg" },
      { name: "Chill Chicken", type: "Non - Veg" },
    ],
  },
  {
    category: "Biryani",
    items: [
      { name: "Paneer Biryani", type: "Veg" },
      { name: "Chicken Biryani", type: "Non - Veg" },
      { name: "Mutton Biryani", type: "Non - Veg" },
    ],
  },
  {
    category: "Curries",
    items: [
      { name: "Paneer butter masala", type: "Veg" },
      { name: "Kadai chicken", type: "Non - Veg" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Apricot Delight", type: "Veg" },
      { name: "Rasmalai", type: "Veg" },
    ],
  },
];

export default function EventDetailPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#fff", mb:8 }}>
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
      <Box
        sx={{ p: 2, bgcolor: "#F6EDFF", color: "black", textAlign: "center" }}
      >
        <Typography variant="subtitle1" fontWeight="500">
          Birthday Party Platter
        </Typography>
      </Box>
      <Container>
        <Box mt={2}>
          <Typography variant="h6" fontWeight="bold">
            Event Details
          </Typography>
          {eventDetails.map((detail, index) => (
            <Stack
              direction="row"
              justifyContent="space-between"
              key={index}
              sx={{ borderBottom: "1px solid #eee", py: 1 }}
            >
              <Typography>{detail.label}</Typography>
              <Typography color="grey">{detail.value}</Typography>
            </Stack>
          ))}
        </Box>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            Items
          </Typography>
          {items.map((section, index) => (
            <Box key={index} mt={2}>
              <Typography fontWeight="bold">{section.category}</Typography>
              {section.items.map((item, idx) => (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  key={idx}
                  sx={{ borderBottom: "1px solid #eee", py: 1 }}
                >
                  <Typography>{item.name}</Typography>
                  <Typography color="grey">{item.type}</Typography>
                </Stack>
              ))}
            </Box>
          ))}
        </Box>

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
              <Typography variant="body1">₹32,200</Typography>
              <Typography variant="caption">+ Delivery Charges</Typography>
            </Box>
          </Button>
        </Box>

      </Container>

        <BottomNavigation
          showLabels
          sx={{
            bottom: 0,
            width: "100%",
            display: "flex",
            position: "fixed",
            bgcolor: "#f1f1f1f",
            justifyContent: "space-between",
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Payment" icon={<PaymentIcon />} />
          <BottomNavigationAction label="Services" icon={<RoomServiceIcon />} />
        </BottomNavigation>
    </Box>
  );
}
