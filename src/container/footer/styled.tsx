import { Stack, styled } from "@mui/material";

export const FooterWrapper = styled(Stack)(({ theme }) => {
    return {
        "& .footer-top-section": {
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            margin: "calc(var(--basic-margin)/3) calc(var(--basic-margin)/2) 0",
            paddingBottom: "calc(var(--basic-margin)/2)",
            borderBottom: "1px solid #101A241A",
            "& .favicon-box": {
                overflow: "hidden",
                padding: "6px 8px",
                "& img": {
                    cursor: "pointer",
                }
            },
        },
        "& .footer-bottom-section": {
            gap: "calc(var(--flex-gap)/2)",
            justifyContent: "space-between",
            padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.up("tablet")]: {
            "& .footer-top-section": {
                margin: "calc(var(--basic-margin)/3) calc(var(--basic-margin)) 0",
            },
            "& .footer-bottom-section": {
                padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding))",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .footer-top-section, & .footer-bottom-section": {
                flexDirection: "row",
                gap: "var(--flex-gap)",
            },
        },
        [theme.breakpoints.up("desktop")]: {
            "& .footer-top-section": {
                "& .favicon-box": {
                    padding: "0",
                },
            },
        },
    }
})