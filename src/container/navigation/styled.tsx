import { Stack, styled } from "@mui/material";
import { useContext, useEffect } from "react";
import { Context } from "../../context";

export const NavigationWrapper = styled(Stack)(({ theme }) => {
    const { openMenu, setOpenMenu } = useContext(Context);

    useEffect(() => {
        const handleResize = () => {
            setOpenMenu(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setOpenMenu]);

    return {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/2)",
        gap: "calc(var(--flex-gap)/2)",
        position: openMenu ? "fixed" : "static",
        zIndex: 1,
        left: 0,
        right: 0,
        background: "var(--light-color)",
        "& .favicon-box": {
            overflow: "hidden",
            padding: "6px 8px",
            "& img": {
                width: "100%",
                height: "auto",
                cursor: "pointer",
            }
        },
        "& .hamburger": {
            overflow: "hidden",
        },
        "& .nav-links": {
            display: openMenu ? "flex" : "none",
            gap: "calc(var(--flex-gap)/1)",
            position: "absolute",
            top: "8.920875rem",
            left: "calc(var(--basic-padding) * -1)",
            right: "calc(var(--basic-padding) * -1)",
            padding: "var(--basic-padding) calc(var(--basic-padding)/2)",
            background: "var(--light-color)",
            height: "100vh"
        },
        "& .contact-button": {
            display: openMenu ? "flex" : "none",
            justifyContent: "center",
            position: "absolute",
            top: "31.170875rem",
            left: 0,
            right: 0,
            padding: "0 calc(var(--basic-padding)/2) var(--basic-padding)",
            overflow: "hidden",
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.up("tablet")]: {
            gap: "var(--flex-gap)",
            padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding))",
            "& .nav-links": {
                gap: "calc(var(--flex-gap)/2)",
                padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            },
            "& .contact-button": {
                top: "25.170875rem",
                padding: "0 calc(var(--basic-padding) * 2) var(--basic-padding)",
            },
        },
        [theme.breakpoints.up("desktop")]: {
            "& .favicon-box": {
                padding: "0",
            },
            "& .nav-links": {
                display: "flex",
                flexDirection: "row",
                position: "static",
                padding: 0,
                height: "auto",
                background: "revert",
            },
            "& .hamburger": {
                display: "none",
            },
            "& .contact-button": {
                display: "block",
                position: "static",
                padding: 0,
            }
        }
    }
})