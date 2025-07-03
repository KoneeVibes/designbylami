import { Dialog, styled } from "@mui/material";

export const BaseAlertModalWrapper = styled(Dialog)(() => {
    return {
        "& .MuiDialog-paper": {
            borderRadius: "16px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        "& .icon-box": {
            display: "flex",
            justifyContent: "center",
        },
        "& .modal-content": {
            padding: "var(--basic-padding)",
        }
    }
})