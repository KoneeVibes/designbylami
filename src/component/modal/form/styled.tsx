import { Dialog, styled } from "@mui/material";

export const BaseFormModalWrapper = styled(Dialog)(({ theme }) => {
    return {
        "& .MuiDialogContent-root": {
            padding: 0
        },
        "& .MuiDialogTitle-root": {
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: 24,
            color: "var(--form-legend-color)",
            lineHeight: "normal",
            overflow: "hidden",
            whiteSpace: "normal",
            textOverflow: "ellipsis",
            padding: 0
        },
        [theme.breakpoints.up("tablet")]: {
            "& .MuiDialogTitle-root": {
                fontSize: 32,
            },
        },
        [theme.breakpoints.up("laptop")]: {
            "& .MuiDialogTitle-root": {
                fontSize: 40,
            },
        },
        [theme.breakpoints.up("desktop")]: {
            "& .MuiDialogTitle-root": {
                fontSize: 44,
            },
        }
    }
})
