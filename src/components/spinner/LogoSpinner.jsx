import { Box, CircularProgress, Fade, keyframes } from '@mui/material'
import logo from '../../assets/Logo.png'
import React from 'react'

const LogoSpinner = ({sx,topShift}) => {
    const rotateClockwise = keyframes`
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
            `;

    const rotateCounterClockwise = keyframes`
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          `;

    const pulseAnimation = keyframes`
            0% {
                transform: translate(-50%, -50%) scale(0.7);
                opacity:0.3
            }
            50% {
                transform: translate(-50%, -50%) scale(1.0);
                opacity:1
            }
            100% {
                transform: translate(-50%, -50%) scale(0.7);
                opacity:0.4
            }
            `;

  return (
        <Box
            sx={{
                ...sx,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                minHeight:"100vh",
                // border:"1px solid black",
                marginTop:topShift
            }}
        >
            <Box sx={{
                position:"relative",
                }}
            >
              {/* Outer loader */}
                <Box
                    sx={{
                        position:"absolute",
                        width:75,
                        height:75,
                        borderRadius: '50%',
                        border: '3px solid transparent',
                        borderTopColor: '#683BA4',
                        borderLeftColor: '#683BA4',
                        borderRightColor: "#683BA4",
                        top:"-39px",
                        right:"-39px",
                        animation: `${rotateClockwise} 1.2s linear infinite`,
                    }}
                />
              
              {/* Inner loader with different rotation speed */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '3px solid transparent',
                        borderTopColor: '#f2e14e',
                        borderLeftColor: '#f2e14e',
                        borderRightColor: '#f2e14e',
                        animation: `${rotateCounterClockwise} 1.2s linear infinite`,
                        top: '-32px',
                        right: '-32px'
                    }}
                />
              
              {/* Logo with fade animation */}
                    <Box
                    // sx={{
                    //   display:"flex"
                    // }}
                    // className="flex items-center justify-center w-16 h-16"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        animation: `${pulseAnimation} 2s ease-in-out infinite`,
                    }}
                    >
                        <img src={logo} alt='' width={50} height={50} style={{display:"block"}}/>
                    </Box>
            </Box>
          </Box>
  )
}

export default LogoSpinner