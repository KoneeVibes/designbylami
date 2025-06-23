import { Box, Stack, Typography } from "@mui/material";
import { NavigationWrapper } from "./styled";
import logo from "../../asset/logo.svg";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import { HashLink } from 'react-router-hash-link';
import { MenuButton } from "../../component/button/menu";
import { useContext, useEffect } from "react";
import { Context } from "../../context";

export const Navigation = () => {
    const navigate = useNavigate();
    const { openMenu, setOpenMenu } = useContext(Context);

    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    };

    const handleMakeAnInquiryClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        return window.open("https://docs.google.com/forms/d/1iw5wMagDzFtM1cCL27zl-8Fdb0vNBq0O_JXRh7S824U/edit?pli=1", "_blank");
    }

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [openMenu]);

    return (
        <NavigationWrapper>
            <Box
                component={"div"}
                className="favicon-box"
            >
                <img
                    src={logo}
                    alt="logo"
                    onClick={handleLogoClick}
                />
            </Box>
            <Stack
                className="nav-links"
            >
                {navLinks.map((navLink, index) => {
                    return (
                        <HashLink
                            key={index}
                            to={navLink.url}
                            smooth={true}
                            onClick={() => setOpenMenu(false)}
                        >
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={20}
                                lineHeight={"normal"}
                                color={"var(--text-color)"}
                                textAlign={"center"}
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
            <Box
                component={"div"}
                className="contact-button"
            >
                <BaseButton
                    variant="contained"
                    onClick={handleMakeAnInquiryClick}
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
                        Make an inquiry
                    </Typography>
                </BaseButton>
            </Box>
            <Box
                component={"div"}
                className="hamburger"
            >
                <MenuButton />
            </Box>
        </NavigationWrapper>
    )
}