import { FormLabel, styled } from "@mui/material";
import { BaseLabelPropsType } from "../../../type/component.type";

export const BaseLabel = styled(FormLabel)<BaseLabelPropsType>(({ colour, fontsize, fontweight }) => {
    return {
        fontFamily: "Inter",
        fontWeight: fontweight || 400,
        fontSize: fontsize || "16px",
        lineHeight: "normal",
        color: colour || "var(--dark-color)",
        marginBlock: "calc(var(--basic-margin)/4)",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
})