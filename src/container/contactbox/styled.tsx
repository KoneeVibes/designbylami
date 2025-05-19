import { Box, styled } from "@mui/material";

export const ContactBoxWrapper = styled(Box)(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding)) calc(var(--basic-padding)/2)",
        position: "relative",
        backgroundColor: "var(--contact-box-bg-color)",
        overflow: "hidden",
        [theme.breakpoints.up("tablet")]: {
            overflow: "unset",
            padding: "calc(var(--basic-padding) * 3) calc(var(--basic-padding))",
        }
    }
})