import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import Food_Bowl from "../../assets/user/Frame.svg"
import Vector from "../../assets/user/Vector.svg"
import Icon_library from "../../assets/user/Icon_library.svg"

const CustomFooter = () => {
  return (
    <Box sx={{width: "100%",}}>
       <BottomNavigation
          showLabels
          sx={{
            bottom: 0,
            width: "inherit",
            bgcolor: "#f1f1f1f",
            position: "fixed",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BottomNavigationAction label="Home" icon={<img src={Food_Bowl} alt='CMP_Home' width={30} height={30}  />} />
          <BottomNavigationAction label="Payment" icon={<img src={Vector} alt='CMP_Home' width={25} height={25}  />} />
          <BottomNavigationAction label="Services" icon={<img src={Icon_library} alt='CMP_Home' width={30} height={30}  />} />
        </BottomNavigation>
    </Box>
  )
}

export default CustomFooter
