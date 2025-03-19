import {
  Drawer,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SelectAddressDrawer = ({
  open,
  selectedAddress,
  setSelectedAddress,
  handleToggleDrawer,
}) => {
  const navigate = useNavigate();

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <Box>
      <Drawer anchor="bottom" open={open} onClose={handleToggleDrawer(false)}>
        <Box p={3}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Add Address</Typography>
            <Typography variant="body2" color="textSecondary" mb={2}>
              Saved Addresses
            </Typography>
          </Box>
          
          <RadioGroup value={selectedAddress} onChange={handleAddressChange}>
            <FormControlLabel
              value="office"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1">Office</Typography>
                  <Typography variant="body2" color="textSecondary">
                    9 Star Rainbow, Rai Durg, Telangana, India, 500032
                  </Typography>
                </Box>
              }
            />
            <Divider sx={{ my: 2 }} />
            <FormControlLabel
              value="home"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1">Sri Home</Typography>
                  <Typography variant="body2" color="textSecondary">
                    11, Sri Aurobindo Colony, Miyapur, Telangana, 500049
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>

          <Box
            mt={3}
            textAlign="center"
            onClick={() => navigate("/customer/select-address")}
          >
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              + Add New Address
            </Typography>
          </Box>

          <Box mt={3} textAlign="center">
            <Button variant="contained" color="primary">
              Confirm Address
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SelectAddressDrawer;

SelectAddressDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  // setOpen: PropTypes.func.isRequired,
  selectedAddress: PropTypes.string.isRequired,
  setSelectedAddress: PropTypes.func.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
};
