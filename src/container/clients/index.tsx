import Marquee from "react-fast-marquee";
import { ClientsWrapper } from "./styled";
import { Box, Grid, Typography } from "@mui/material";
import { clientLogos } from "../../config/static";

export const Clients = () => {
    return (
        <ClientsWrapper>
            <Box
                flex={0.1}
                overflow={"hidden"}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 12, laptop: 18 }}
                    lineHeight={"normal"}
                    color={"var(--dark-color)"}
                    whiteSpace={"normal"}
                >
                    WORKED WITH
                </Typography>
            </Box>
            <Box
                flex={0.9}
                overflow={"hidden"}
            >
                <Marquee
                    autoFill={true}
                    pauseOnHover={true}
                    pauseOnClick={true}
                >
                    <Grid
                        container
                        spacing={"var(--flex-gap)"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        {clientLogos.map((logo, index) => {
                            return (
                                <Grid
                                    key={index}
                                    size={{ mobile: (12 / Number(`${clientLogos.length}`)) }}
                                >
                                    <Box
                                        component={"div"}
                                        overflow={"hidden"}
                                    >
                                        {logo.logo}
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Marquee>
            </Box>
        </ClientsWrapper>
    )
}