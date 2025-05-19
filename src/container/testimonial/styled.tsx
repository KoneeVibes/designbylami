import { Stack, styled } from "@mui/material";
import middlebg from "../../asset/start-planning-middlebg.svg";

export const TestimonialWrapper = styled(Stack)(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding)) 0",
        position: "relative",
        backgroundColor: "var(--contact-box-bg-color)",
        overflow: "hidden",
        backgroundImage: `url(${middlebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        "& .carousel": {
            "&.carousel-slider": {
                overflow: "unset",
            },
            "& .slider-wrapper": {
                overflow: "unset",
            },
        },
        "& .review-card": {
            padding: "var(--basic-padding)",
            backgroundColor: "var(--light-color)",
            height: "100%",
            borderRadius: "70px 30px 70px 30px",
            boxShadow: "none",
        },
        "& .slider": {
            gap: "var(--flex-gap)",
        },
        "& .slide": {
            flex: 1,
        },
        "& .control-dots": {
            display: "flex",
            justifyContent: "center",
            gap: "calc(var(--flex-gap)/4)",
            bottom: "-44px",
        },
        [theme.breakpoints.up("tablet")]: {
            overflow: "unset",
            padding: "calc(var(--basic-padding) * 2) 0",
            "& .control-dots": {
                bottom: "-74px",
            },
        }
    }
})