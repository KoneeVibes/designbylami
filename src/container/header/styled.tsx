import { Box, BoxProps, styled } from "@mui/material";
import { HeaderWrapperPropsType } from "../../type/container.type";

export const HeaderWrapper = styled(Box)<BoxProps & HeaderWrapperPropsType>(({ theme, headerBg, minHeight }) => {
    return {
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        minHeight: minHeight,
        padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding)/2)",
        [theme.breakpoints.up("tablet")]: {
            justifyContent: "center",
            padding: "calc(var(--basic-padding) * 3) var(--basic-padding)",
        }
    }
})