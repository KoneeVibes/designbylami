import { Stack, styled } from "@mui/material";

export const ClientsWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap)/4)",
        padding: "0 calc(var(--basic-padding)/2)",
        "& .rfm-marquee-container, & .rfm-marquee": {
            gap: "var(--flex-gap)",
        },
        "& .rfm-marquee": {
            "& svg": {
                width: "100%",
                height: "auto",
                aspectRatio: 3 / 2,
                objectFit: "contain",
                mixBlendMode: "color-burn"
            }
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            gap: "var(--flex-gap)",
            alignItems: "center",
            padding: "0 calc(var(--basic-padding))",
        }
    }
})