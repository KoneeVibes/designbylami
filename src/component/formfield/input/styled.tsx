import { InputBase, styled } from "@mui/material";
import { BaseInputPropsType } from "../../../type/component.type";

export const BaseInput = styled(InputBase)<BaseInputPropsType>(({
    colour, bgcolor, fontweight, fontsize, border
}) => {
    return {
        fontFamily: "Inter",
        fontWeight: fontweight || 500,
        fontSize: fontsize || "14px",
        lineHeight: "normal",
        border: border || "1px solid var(--border-color)",
        borderRadius: "8px",
        color: colour || "var(--semi-dark-color)",
        backgroundColor: bgcolor || "transparent",
        outline: "none",
        "& .MuiInputBase-input": {
            textOverflow: "ellipsis",
            padding: 0,
        }
    }
})
