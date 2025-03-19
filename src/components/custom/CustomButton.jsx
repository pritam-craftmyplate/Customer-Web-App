import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function CustomButton({
  onClick,
  fullWidth,
  startIcon,
  endIcon,
  name,
  sx,
  variant,
}) {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant ? variant : "contained"}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      size="small"
      sx={{
        ...sx,
        // backgroundColor: "#6318AF",                                                    // Required Later
        textTransform: "none",
        fontWeight: "400",
        fontSize: "16px", // Font size for button text
        borderRadius: "10px", // Fully rounded corners
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
        // "&:hover": {
        //   backgroundColor: "rgba(80, 0, 162, 0.8)", // Slightly darker purple on hover
        //   boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
        // },
        "&:active": {
          backgroundColor: "#4A148C", // Darker purple on click
        },
        "&.Mui-disabled": {
          backgroundColor: "#D1C4E9", // Light purple for disabled state
          color: "#FFFFFF", // Keep text white for disabled state
        },
      }}
    >
      {name ? name : null}
    </Button>
  );
}

CustomButton.propTypes = {
  sx: PropTypes.object, // Accepts any valid CSS style object for button customization
  startIcon: PropTypes.element, // Validates startIcon as a React element
  endIcon: PropTypes.element, // Validates endIcon as a React element
  name: PropTypes.string, // Ensures button text or content is provided
  variant: PropTypes.string, // Ensures button text or content is provided
  onClick: PropTypes.func,
  fullWidth: PropTypes.string,
};

CustomButton.defaultProps = {
  startIcon: null, // Defaults to no start icon
  endIcon: null, // Defaults to no end icon
  sx: {
    backgroundColor: "#6318AF",
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "400",
    // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      colors: "#6318AF",
      backgroundColor: "rgba(80, 0, 162, 0.)",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      backgroundColor: "#4A148C",
    },
    "&.Mui-disabled": {
      backgroundColor: "#D1C4E9",
      // color: "#FFFFFF",
    },
  },
};