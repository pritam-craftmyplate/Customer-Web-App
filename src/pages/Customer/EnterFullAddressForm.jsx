import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import RoomIcon from "@mui/icons-material/Room";
import GoogleMapReact from "google-map-react";
import CustomButton from "../../components/custom/CustomButton";
import CheckIcon from "@mui/icons-material/Check";
// import PlaceIcon from "@mui/icons-material/Place";
import { useLocation, useNavigate } from "react-router-dom";
import { Heading5 } from "../../components/typography/CustomTypography";
import { textColor } from "../../constants/colors";

const EnterFullAddressForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const address = queryParams.get("address");

  console.log(address)
//  console.log("Query Params:", location.search);


  const labels = ["Home", "Banquet Hall", "Farmhouse", "Office", "Club"];
  const [addressLabel, setAddressLabel] = useState("Home");
  const [formData, setFormData] = useState({
    flatNo: "",
    locality: "",
    landmark: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderInputField = (label, field, placeholder, isOptional = false) => (
    <Box mb={2}>
      <Typography variant="body2" fontWeight="600" mb={0.5}>
        {label} {isOptional && "(Optional)"}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={formData[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={placeholder}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
        slotProps={{
          endAdornment: formData[field] && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => handleChange(field, "")}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate("/select-address")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" ml={1}>
          Enter Full Address
        </Typography>
      </Box>

      <Box sx={{ height: 150, borderRadius: 2, overflow: "hidden", mb: 2 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_GOOGLE_API_KEY" }}
          defaultCenter={{ lat: 17.385, lng: 78.4867 }}
          defaultZoom={15}
        //   center={address}
        >
          <RoomIcon color="error" fontSize="large" lat={17.385} lng={78.4867} />
        </GoogleMapReact>
      </Box>

      {address && (
          <Box sx={{py:2}}>
            <Box display="flex" alignItems="center">
              {/* <PlaceIcon sx={{ color: textColor.primary, fontSize: "20px" }} /> */}

              <Heading5 text={`${address.slice(0, 30)}...`} color={textColor.primary} />
            </Box>

            <Typography variant="body2" sx={{maxWidth:'300px'}} >
              {address}
            </Typography>
          </Box>
        )}

      {renderInputField(
        "Flat or House No.*",
        "flatNo",
        "Enter flat or house number"
      )}

      {renderInputField(
        "Area, Locality or Sector*",
        "locality",
        "Enter area, locality or sector"
      )}

      {renderInputField("Landmark", "landmark", "Enter landmark", true)}

      <Typography variant="body2" fontWeight="bold" mb={1}>
        Save Address Label*
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%", overflow: "scroll", py: 1 }}
        gap={1}
        mb={3}
      >
        {labels.map((label) => (
          <Button
            key={label}
            onClick={() => setAddressLabel(label)}
            startIcon={
              addressLabel === label && <CheckIcon sx={{ color: "#D81B60" }} />
            }
            sx={{
              borderRadius: "20px",
              fontSize: "12px",
              textTransform: "none",
              border: `1px solid ${
                addressLabel === label ? "#D81B60" : "#E0E0E0"
              }`,
              bgcolor: addressLabel === label ? "#FEEBF3" : "#FFF",
              color: addressLabel === label ? "#D81B60" : "#000",
              minWidth: "105px",
            }}
          >
            {label}
          </Button>
        ))}
      </Box>

      <CustomButton name="Confirm Address" fullWidth onClick={()=>{
        navigate("/customer/payment-summary", {state: {address, addressLabel, ...formData}})
      }} />
    </Box>
  );
};

export default EnterFullAddressForm;
