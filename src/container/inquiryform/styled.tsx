import { Stack, styled } from "@mui/material";

export const InquiryFormWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "calc(var(--flex-gap)/2)",
        padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
        "& fieldset": {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            padding: "calc(var(--basic-padding)/2)",
            backgroundColor: "var(--fieldset-bg-color)",
            "& .MuiInputBase-input": {
                color: "var(--input-field-color)",
                padding: "calc(var(--basic-margin)/4) 0",
                marginBlock: "calc(var(--basic-margin)/4)",
                borderBottom: "1px solid var(--input-field-border-color)"
            }
        },
        [theme.breakpoints.up("tablet")]: {
            gap: "var(--flex-gap)",
            padding: "0 var(--basic-padding) var(--basic-padding)",
        }
    }
})