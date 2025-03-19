import { Box, Button, Stack, TextField } from "@mui/material";
 import backgroundImage from "../../assets/background.png";
 import { Body1, Body3 } from "../../components/typography/CustomTypography";
 import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
 import { useState } from "react";
 import { OtpInput } from "reactjs-otp-input";
 import { borderColor, textColor } from "../../constants/colors";
 import { useNavigate } from "react-router-dom";
 
 function CustomerLoginPage() {
   //   const [progress, setProgress] = useState(30);
   const navigate = useNavigate();
 
   const [otp, setOtp] = useState("");
 
   console.log("otp", otp);
 
   const handleChange = (otp) => setOtp(otp);
 
   // useEffect(() => {
   //   const interval = setInterval(() => {
   //     setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
   //   }, 1000);
   //   return () => clearInterval(interval);
   // }, []);
 
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
           height: "440px",
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
             text="Login"
             customStyle={{
               fontSize: "30px",
               fontWeight: 600,
             }}
           />
 
           <CloseRoundedIcon sx={{ color: "black" }} />
         </Box>
         <Box
           sx={{
             display: "flex",
             flexDirection: "column",
             padding: "28px ",
             gap: "20px",
           }}
         >
           <Stack>
             <Body1 text="Phone number" />
             <TextField name="phone" sx={{fontSize:'18px'}} placeholder="123456789" />
           </Stack>
 
           <Stack>
             <Body1 text="Enter OTP" />
             <OtpInput
               value={otp}
               onChange={handleChange}
               numInputs={6}
               separator={<span style={{ margin: "0 8px" }}></span>}
               inputStyle={{
                 width: "50px",
                 height: "50px",
                 fontSize: "20px",
                 borderRadius: "8px",
                 border: `2px solid ${borderColor.border1}`,
                 margin: "0 4px",
                 textAlign: "center",
                 outline: "none",
                 color: "#00999E",
                 fontWeight: "bold",
                 backgroundColor: "#f0f0f0",
                 transition: "border-color 0.3s ease",
               }}
               focusStyle={{
                 borderColor: textColor.primary,
                 boxShadow: `0 0 5px ${textColor.primary}`,
               }}
               shouldAutoFocus
             />
           </Stack>
 
           <Stack>
             <Button
                 type="button"
                 variant="contained"
                 onClick={()=>navigate("/customer/basic-info")}
                 sx={{
                   padding: '12px',
                   borderRadius: '10px',
                   border: `1px solid ${borderColor.primary}`,
                   backgroundColor: textColor.primary,
                   cursor: 'pointer',
                   fontSize: '18px',
                   textTransform: 'capitalize',
                 //   '&:hover':{
                 //     backgroundColor: onSurfaceColor.surface2
                 //   }
                 }}
               >
                 <Body3 text={'Login'}/>
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
             // paddingY: 2,
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
               text="Login"
               customStyle={{
                 fontSize: "30px",
                 fontWeight: 600,
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
               <Body1 text="Phone number" />
               <TextField name="phone" sx={{fontSize:'18px', pt:.8}} placeholder="123456789" />
             </Stack>
 
             <Stack>
               <Body1 text="Enter OTP" />
               <Box sx={{ display: "flex", justifyContent: "center", pt:.8, }}>
                 <OtpInput
                   value={otp}
                   onChange={handleChange}
                   numInputs={6}
                   separator={<Box component='span' sx={{ margin: "0 4px" }}></Box>}
                   inputStyle={{
                     width: "45px",
                     height: "45px",
                     fontSize: "18px",
                     borderRadius: "8px",
                     border: `2px solid ${borderColor.border1}`,
                     textAlign: "center",
                     backgroundColor: "#f0f0f0",
                     transition: "border-color 0.3s ease",
                   }}
                   focusStyle={{
                     borderColor: textColor.primary,
                     boxShadow: `0 0 5px ${textColor.primary}`,
                   }}
                   shouldAutoFocus
                 />
               </Box>
             </Stack>
 
             <Stack sx={{my:2}}>
             <Button
                 type="button"
                 variant="contained"
                 onClick={()=>navigate("/customer/basic-info")}
                 sx={{
                   padding: '12px',
                   borderRadius: '10px',
                   border: `1px solid ${borderColor.primary}`,
                   backgroundColor: textColor.primary,
                   cursor: 'pointer',
                   fontSize: '18px',
                   textTransform: 'capitalize',
                 }}
               >
                 <Body3 text={'Login'}/>
               </Button>
             </Stack>
           </Box>
         </Box>
       </Box>
     </Box>
   );
 }
 
 export default CustomerLoginPage;