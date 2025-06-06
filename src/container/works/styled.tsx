import { Grid, styled } from "@mui/material";

export const WorksWrapper = styled(Grid)(({ theme }) => {
    return {
        alignItems: "center",
        justifyContent: "space-between",
        padding: "calc(var(--basic-padding)) calc(var(--basic-padding)/2)",
        "& .thumbnail-box": {
            overflow: "hidden",
            "& img": {
                width: "100%",
                height: "500px",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding))",
        }
    }
})