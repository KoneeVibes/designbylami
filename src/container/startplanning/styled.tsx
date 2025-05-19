import { Stack, styled } from "@mui/material";

export const StartPlanningWrapper = styled(Stack)(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding) * 2) 0",
        flexDirection: "row",
        "& .image-box": {
            flex: 0.2,
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }
        },
        [theme.breakpoints.down("tablet")]: {
            padding: "calc(var(--basic-padding)) 0",
            "& .image-box": {
                display: "none"
            },
        }
    }
})