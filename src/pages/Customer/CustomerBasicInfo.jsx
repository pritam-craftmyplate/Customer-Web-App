import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import backgroundImage from "../../assets/background.png";
import { Body1, Body3 } from "../../components/typography/CustomTypography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { borderColor, textColor } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

function CustomerLoginPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#320460",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        },
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRadius: "12px",
          width: { sm: "700px", md: "880px" },
          // height: "440px",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 2px 2px #f2f2f2",
        }}
      >
        <Box
          sx={{
            py: 1,
            px: 2,
            width: "auto",
            borderBottom: "2px solid black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Body1
            text="Basic Info"
            customStyle={{
              fontSize: "26px",
              fontWeight: 500,
            }}
          />

          <CloseRoundedIcon sx={{ color: "black" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingY: "20px ",
            px: 2,
            gap: "20px",
          }}
        >
          <Stack>
            <Body1 text="Name" customStyle={{ lineHeight: 0.5 }} />
            <TextField
              size="small"
              fullWidth
              placeholder="Name"
              variant="outlined"
              margin="normal"
            />
          </Stack>

          <Stack>
            <Body1 text="Email" customStyle={{ lineHeight: 0.5 }} />
            <TextField
              size="small"
              fullWidth
              placeholder="youremail@gmail.com"
              variant="outlined"
              margin="normal"
            />
          </Stack>

          <Stack>
            <Body1 text="Gender" customStyle={{ lineHeight: 0.5 }} />
            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              size="small"
            >
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select labelId="gender-label" placeholder="Gender" displayEmpty>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack>
            <Body1 text="Location" customStyle={{ lineHeight: 0.5 }} />
            <TextField
              size="small"
              fullWidth
              placeholder="Enter Location"
              variant="outlined"
              margin="normal"
            />
          </Stack>

          <Stack sx={{ my: 2 }}>
            <Button
              type="button"
              variant="contained"
              onClick={() => navigate("/customer/event-detail")}
              sx={{
                padding: "12px",
                borderRadius: "10px",
                border: `1px solid ${borderColor.primary}`,
                backgroundColor: textColor.primary,
                cursor: "pointer",
                fontSize: "18px",
                textTransform: "capitalize",
              }}
            >
              <Body3 text={"Continue"} />
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "start",
          }}
        >
          <Box
            sx={{
              py: 1,
              px: 2,
              width: "auto",
              borderBottom: "2px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Body1
              text="Basic Info"
              customStyle={{
                fontSize: "26px",
                fontWeight: 500,
              }}
            />

            <CloseRoundedIcon sx={{ color: "black" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingY: "20px ",
              px: 2,
              gap: "20px",
            }}
          >
            <Stack>
              <Body1 text="Name" customStyle={{ lineHeight: 0.5 }} />
              <TextField
                size="small"
                fullWidth
                placeholder="Name"
                variant="outlined"
                margin="normal"
              />
            </Stack>

            <Stack>
              <Body1 text="Email" customStyle={{ lineHeight: 0.5 }} />
              <TextField
                size="small"
                fullWidth
                placeholder="youremail@gmail.com"
                variant="outlined"
                margin="normal"
              />
            </Stack>

            <Stack>
              <Body1 text="Gender" customStyle={{ lineHeight: 0.5 }} />
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                size="small"
              >
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  placeholder="Gender"
                  displayEmpty
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack>
              <Body1 text="Location" customStyle={{ lineHeight: 0.5 }} />
              <TextField
                size="small"
                fullWidth
                placeholder="Enter Location"
                variant="outlined"
                margin="normal"
              />
            </Stack>

            <Stack sx={{ my: 2 }}>
              <Button
                type="button"
                variant="contained"
                onClick={() => navigate("/groupId/:quoteGroupId/:phoneNumber")}
                sx={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: `1px solid ${borderColor.primary}`,
                  backgroundColor: textColor.primary,
                  cursor: "pointer",
                  fontSize: "18px",
                  textTransform: "capitalize",
                }}
              >
                <Body3 text={"Continue"} />
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerLoginPage;
