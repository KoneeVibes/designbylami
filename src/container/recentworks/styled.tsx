import { Stack, styled } from "@mui/material";

export const RecentWorksWrapper = styled(Stack)(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding)) calc(var(--basic-padding)/2)",
        "& .thumbnail-box": {
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "500px",
            }
        },
        "& .all-projects-button-box": {
            overflow: "hidden",
            "& .MuiButton-endIcon": {
                marginRight: 0
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding))",
        }
    }
})