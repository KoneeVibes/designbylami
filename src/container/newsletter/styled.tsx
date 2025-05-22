import { Stack, styled } from "@mui/material";
import newsletterBg from "../../asset/newsletter-bg.png";

export const NewsletterWrapper = styled(Stack)(({ theme }) => {
    return {
        backgroundImage: `url(${newsletterBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "calc(var(--basic-padding))",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        "& .fieldset": {
            border: "none",
            marginInline: 0,
            paddingBlock: 0,
            paddingInline: "calc(var(--basic-padding)/4)",
            minInlineSize: 0,
            flex: 1,
            overflow: "hidden",
        },
        [theme.breakpoints.up("tablet")]: {
            position: "absolute",
            left: "calc(var(--basic-padding))",
            right: "calc(var(--basic-padding))",
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding))",
        }
    }
})