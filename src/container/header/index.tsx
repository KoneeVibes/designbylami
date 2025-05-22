import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { HeaderPropsType } from "../../type/container.type";
import { HeaderWrapper } from "./styled";
import { BaseButton } from "../../component/button/styled";
import { useNavigate } from "react-router-dom";

export const Header: React.FC<HeaderPropsType> = ({
    headerBg, minHeight, headerText, headerBody, callToAction
}) => {

    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:220px)');

    return (
        <HeaderWrapper
            minHeight={minHeight}
            headerBg={headerBg}
        >
            <Stack
                width={{ laptop: "70%", xl: "60%" }}
                alignItems={{ tablet: "center" }}
                gap={{ mobile: "calc(var(--flex-gap)/1)" }}
                overflow={"hidden"}
            >
                <Box>
                    <Typography
                        variant="h1"
                        fontFamily={"David Libre"}
                        fontWeight={500}
                        fontSize={{ mobile: 45, tablet: 56, laptop: 72, xl: 92 }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        whiteSpace={"normal"}
                        textAlign={{ tablet: "center" }}
                    >
                        {headerText}
                    </Typography>
                </Box>
                {headerBody && (
                    <Box>
                        <Typography
                            variant="body1"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={{ mobile: 16, tablet: 23 }}
                            lineHeight={"normal"}
                            color={"var(--light-color)"}
                            whiteSpace={"normal"}
                            textAlign={{ tablet: "center" }}
                        >
                            {headerBody}
                        </Typography>
                    </Box>
                )}
                {callToAction && (
                    <Stack
                        direction={{ tablet: "row" }}
                        gap={{ mobile: "calc(var(--flex-gap)/5)", tablet: "calc(var(--flex-gap)/3)" }}
                        justifyContent={{ tablet: "center" }}
                    >
                        <Box
                            flex={{ mobile: 1, tablet: "0 1 auto" }}
                            overflow={"hidden"}
                        >
                            <BaseButton
                                variant={"contained"}
                                bgcolor="var(--light-color)"
                                colour="var(--dark-color)"
                                sx={{ minWidth: matches ? "210px" : "0px" }}
                                onClick={() => {
                                    // window.open("https://calendly.com/your-link", "_blank");
                                }}
                            >
                                <Typography
                                    variant={"button"}
                                    fontFamily={"inherit"}
                                    fontWeight={"inherit"}
                                    fontSize={"inherit"}
                                    lineHeight={"inherit"}
                                    color={"inherit"}
                                    textTransform={"inherit"}
                                >
                                    Book A Session
                                </Typography>
                            </BaseButton>
                        </Box>
                        <Box
                            flex={{ mobile: 1, tablet: "0 1 auto" }}
                            overflow={"hidden"}
                        >
                            <BaseButton
                                variant={"contained"}
                                sx={{ minWidth: matches ? "210px" : "0px" }}
                                onClick={() => navigate("/work")}
                            >
                                <Typography
                                    variant={"button"}
                                    fontFamily={"inherit"}
                                    fontWeight={"inherit"}
                                    fontSize={"inherit"}
                                    lineHeight={"inherit"}
                                    color={"inherit"}
                                    textTransform={"inherit"}
                                >
                                    View Our Projects
                                </Typography>
                            </BaseButton>
                        </Box>
                    </Stack>
                )}
            </Stack>
        </HeaderWrapper>
    )
}