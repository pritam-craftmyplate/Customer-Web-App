import { Typography } from "@mui/material"


export const Heading1=({text,color,customStyle})=>{
    return(
        <Typography
            variant="h1"
            sx={{
                ...customStyle,
                fontSize:{
                    xs:"28px",
                    md:"32px"
                },
                fontFamily: "'Lexend', serif",
                color:color ?? "#000000",
                fontWeight:700,
                lineHeight:1.4
            }}
        >
            {text}
        </Typography>
    )
}

export const Heading2=({text,color,customStyle})=>{
    return(
        <Typography
            variant="h2"
            sx={{
                ...customStyle,
                fontSize:{
                    xs:"24px",
                    md:"28px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:600,
                lineHeight:1.4
            }}
        >
            {text}
        </Typography>
    )
}

export const Heading3=({text,color,customStyle})=>{
    return(
        <Typography
            variant="h3"
            sx={{
                ...customStyle,
                fontSize:{
                    xs:"20px",
                    md:"24px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:600,
                lineHeight:1.4
            }}
        >
            {text}
        </Typography>
    )
}

export const Heading4=({text,color,customStyle})=>{
    return(
        <Typography
            variant="h4"
            sx={{
                
                fontSize:{
                    xs:"18px",
                    md:"20px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:500,
                lineHeight:1.4,
                ...customStyle,
            }}
        >
            {text}
        </Typography>
    )
}

export const Heading5=({text,color,customStyle})=>{
    return(
        <Typography
            variant="h5"
            sx={{
                ...customStyle,
                fontSize:{
                    xs:"16px",
                    md:"18px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:500,
                lineHeight:1.4
            }}
        >
            {text}
        </Typography>
    )
}

export const Body1=({text,color,customStyle})=>{
    return(
        <Typography
            variant="body1"
            sx={{
                fontSize:{
                    xs:"16px",
                    md:"18px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:400,
                lineHeight:1.6,
                ...customStyle,
            }}
        >
            {text}
        </Typography>
    )
}

export const Body2=({text,color,customStyle})=>{
    return(
        <Typography
            variant="body2"
            sx={{
                fontSize:{
                    xs:"14px",
                    md:"16px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:400,
                lineHeight:1.6,
                ...customStyle,
            }}
        >
            {text}
        </Typography>
    )
}

export const Body3=({text,color,customStyle})=>{
    return(
        <Typography
            variant="body2"
            sx={{
                ...customStyle,
                fontSize:{
                    xs:"12px",
                    md:"14px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:400,
                lineHeight:1.5
            }}
        >
            {text}
        </Typography>
    )
}

export const Caption=({text,color,customStyle})=>{
    return(
        <Typography
            variant="caption"
            sx={{
                ...customStyle,
                fontSize:{
                    xs:"10px",
                    md:"12px"
                },
                fontFamily: "'Lexend', serif",
                color:color,
                fontWeight:500,
                lineHeight:1.4
            }}
        >
            {text}
        </Typography>
    )
}