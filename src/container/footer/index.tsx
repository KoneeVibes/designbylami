import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { FooterWrapper } from "./styled";
import logo from "../../asset/logo.png";
import { openingHours, navLinks, socialMedia, footerDocuments } from "../../config/static";
import { HashLink } from "react-router-hash-link";
import { FooterPropsType } from "../../type/container.type";

export const Footer: React.FC<FooterPropsType> = ({ top }) => {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <FooterWrapper
            id="contact"
            marginTop={matches ? top : "unset"}
        >
            <Stack
                className="footer-top-section"
            >
                <Stack
                    flex={0.5}
                    overflow={"hidden"}
                    gap={"calc(var(--flex-gap)/3)"}
                >
                    <Box
                        component={"div"}
                        className="favicon-box"
                    >
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={16}
                            lineHeight={"normal"}
                            color={"var(--text-color)"}
                            whiteSpace={"normal"}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Inter"}
                            fontWeight={700}
                            fontSize={12}
                            lineHeight={"normal"}
                            color={"var(--footer-header-color)"}
                            marginBlockEnd={"calc(var(--basic-margin)/4)"}
                        >
                            OPENING HOURS
                        </Typography>
                        <Stack
                            direction={{ xl: "row" }}
                            gap={{ mobile: "calc(var(--flex-gap)/4)", xl: "calc(var(--flex-gap)/2)" }}
                        >
                            {openingHours.map((detail, index) => {
                                return (
                                    <Box
                                        key={index}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            fontFamily={"Inter"}
                                            fontWeight={400}
                                            fontSize={16}
                                            lineHeight={"normal"}
                                            color={"var(--text-color)"}
                                        >
                                            {detail.days}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            fontFamily={"Inter"}
                                            fontWeight={400}
                                            fontSize={16}
                                            lineHeight={"normal"}
                                            color={"var(--text-color)"}
                                        >
                                            {detail.time}
                                        </Typography>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Box>
                </Stack >
                <Box
                    overflow={"hidden"}
                >
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Inter"}
                            fontWeight={700}
                            fontSize={12}
                            lineHeight={"normal"}
                            color={"var(--footer-header-color)"}
                            marginBlockEnd={"calc(var(--basic-margin)/2)"}
                        >
                            NAVIGATION
                        </Typography>
                    </Box>
                    <Stack
                        gap={{ mobile: "calc(var(--flex-gap)/3)" }}
                    >
                        {navLinks.map((navLink, index) => {
                            return (
                                <HashLink
                                    key={index}
                                    to={navLink.url}
                                    smooth={true}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight={"normal"}
                                        color={"var(--text-color)"}
                                        sx={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        {navLink.name}
                                    </Typography>
                                </HashLink>
                            )
                        })}
                    </Stack>
                </Box>
                <Box
                    overflow={"hidden"}
                >
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontFamily={"Inter"}
                            fontWeight={700}
                            fontSize={12}
                            lineHeight={"normal"}
                            color={"var(--footer-header-color)"}
                            marginBlockEnd={"calc(var(--basic-margin)/2)"}
                        >
                            FOLLOW US
                        </Typography>
                    </Box>
                    <Stack
                        direction={{ mobile: "row" }}
                        gap={{ mobile: "calc(var(--flex-gap)/4)" }}
                    >
                        {socialMedia.map((social, index) => {
                            return (
                                <Box
                                    key={index}
                                    onClick={() => {
                                        window.open(social.url, "_blank")
                                    }}
                                    sx={{
                                        cursor: "pointer",
                                        display: "inline-block"
                                    }}
                                >
                                    {social.icon}
                                </Box>
                            )
                        })}
                    </Stack>
                </Box>
            </Stack>
            <Stack
                className="footer-bottom-section"
            >
                <Box
                    overflow={"hidden"}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={"normal"}
                        color={"var(--text-color)"}
                        whiteSpace={"normal"}
                    >
                        &copy; 2022 Restaurants. All Right Reserved. Designed by Sparklabs
                    </Typography>
                </Box>
                <Stack
                    direction={{ laptop: "row" }}
                    gap={{ mobile: "calc(var(--flex-gap)/3)" }}
                >
                    {footerDocuments.map((doc, index) => {
                        return (
                            <HashLink
                                key={index}
                                to={doc.url}
                                smooth={true}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={16}
                                    lineHeight={"normal"}
                                    color={"var(--text-color)"}
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {doc.name}
                                </Typography>
                            </HashLink>
                        )
                    })}
                </Stack>
            </Stack>
        </FooterWrapper >
    )
}