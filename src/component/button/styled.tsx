import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonPropsType } from "../../type/component.type";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropsType>(({ variant, fontfamily, fontsize, fontweight, radius, padding, bgcolor, border, colour }) => {
    return {
        fontFamily: fontfamily || "David Libre",
        fontWeight: fontweight || 500,
        fontSize: fontsize || "20px",
        lineHeight: "normal",
        borderRadius: radius || "10px 0 10px 0",
        border: (variant === "contained") ? "none" : (border || "1.5px solid var(--border-color)"),
        color: (variant === "contained") ? (colour || "var(--light-color)") : (colour || "var(--dark-color)"),
        background: (variant === "contained") ? (bgcolor || "var(--primary-color)") : (bgcolor || "transparent"),
        padding: padding || "calc(var(--basic-padding)/4) calc(var(--basic-padding)/1.5)",
        textTransform: "capitalize",
        minWidth: 0,
        "&:hover": {
            border: (variant === "contained") ? "none" : (border || "1.5px solid var(--border-color)"),
            background: (variant === "contained") ? (bgcolor || "var(--primary-color)") : (bgcolor || "transparent"),
        }
    }
})
