import PropTypes from "prop-types";
import { Box, LinearProgress, Typography } from "@mui/material";

const CustomLinearProgress = ({ value, height = 10, color = "#00999E" }) => {
  return (
    <Box sx={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height,
          borderRadius: height / 2,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            background: `linear-gradient(to right, ${color} 30%, #00d4ff 90%)`,
            borderRadius: height / 2,
          },
        }}
      />
      
      {/* Percentage Label */}
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  );
};

export default CustomLinearProgress;

CustomLinearProgress.propTypes = {
  value: PropTypes.number.isRequired,
  height: PropTypes.number,
  color: PropTypes.string,
};

// export default function LinearProgressBarDemo() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
//     }, 800);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Box sx={{ width: "100%", padding: "20px" }}>
//       <CustomLinearProgress value={progress} height={12} color="#ff5722" />
//     </Box>
//   );
// }
