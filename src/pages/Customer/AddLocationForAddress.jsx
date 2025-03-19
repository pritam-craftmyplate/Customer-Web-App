import { useLoadScript, Autocomplete, GoogleMap } from "@react-google-maps/api";
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState, useRef } from "react";
import CustomButton from "../../components/custom/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import { borderColor, textColor } from "../../constants/colors";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import { Heading5 } from "../../components/typography/CustomTypography";
import { useNavigate } from "react-router-dom";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const defaultLocation = {
  lat: 17.4339,
  lng: 78.4011,
};

const AddLocationForAddress = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [location, setLocation] = useState(defaultLocation);
  const [address, setAddress] = useState("");
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const autocompleteRef = useRef(null);
  const navigate = useNavigate();

  // Initialize the map
  const onMapLoad = (map) => {
    setMap(map);
    // Add a marker to the map
    const newMarker = new window.google.maps.Marker({
      position: location,
      map: map,
      draggable: true, // Allow dragging the marker
    });
    setMarker(newMarker);

    // Listen for marker drag events
    newMarker.addListener("dragend", () => {
      const newLocation = {
        lat: newMarker.getPosition().lat(),
        lng: newMarker.getPosition().lng(),
      };
      setLocation(newLocation);
      getAddressFromCoords(newLocation.lat, newLocation.lng);
    });
  };

  // Handle map click to move the marker
  const onMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setLocation(newLocation);
    marker.setPosition(newLocation);
    getAddressFromCoords(newLocation.lat, newLocation.lng);
  };

  // Handle current location
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(newLocation);
          marker.setPosition(newLocation);
          map.panTo(newLocation);
          getAddressFromCoords(newLocation.lat, newLocation.lng);
        },
        (error) => console.error("Error fetching location:", error),
        { enableHighAccuracy: true }
      );
    }
  };

  // Convert lat/lng to address
  const getAddressFromCoords = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        console.error("Geocoder failed:", status);
        setAddress("Address not found");
      }
    });
  };

  // Handle search location selection
  const handlePlaceSelect = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setLocation(newLocation);
        marker.setPosition(newLocation);
        map.panTo(newLocation);
        setAddress(place.formatted_address || "Address not available");
      }
    }
  };

  if (loadError) return <Typography>Error loading maps</Typography>;
  if (!isLoaded) return <Typography>Loading Maps...</Typography>;

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
      <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" mb={2}>
          Address
        </Typography>

        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceSelect}
        >
          <TextField
            placeholder="Search for venue, area, street etc..."
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
          />
        </Autocomplete>
      </Paper>
      <Box sx={{ textAlign: "center" }}>
        <CustomButton
          variant="outlined"
          name="Use my current location"
          startIcon={<MyLocationRoundedIcon />}
          onClick={handleCurrentLocation}
          sx={{
            color: textColor.text1,
            mt: 2,
            maxWidth: 400,
            mx: "auto",
            borderColor: borderColor.primary,
          }}
        />
      </Box>
      <Box
        sx={{
          height: 400,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={location}
          zoom={14}
          onLoad={onMapLoad}
          onClick={onMapClick}
          options={{
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        />
      </Box>

      <Box p={2} bgcolor="white" borderRadius={2} boxShadow={1}>
        {address && (
          <>
            <Box display="flex" alignItems="center">
              <PlaceIcon sx={{ color: textColor.primary, fontSize: "20px" }} />

              <Heading5 text={`${address.slice(0, 30)}...`} />
            </Box>

            <Typography variant="body2" px={2.5}>
              {address}
            </Typography>
          </>
        )}

        <Stack sx={{ mt: 2, p: 2 }} spacing={2}>
          <CustomButton
            name="Enter Complete Address"
            fullWidth
            onClick={() => navigate(`/add-address-form?address=${encodeURIComponent(address)}`)}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default AddLocationForAddress;
