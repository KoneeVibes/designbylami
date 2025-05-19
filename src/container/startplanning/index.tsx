import { Box, Stack, Typography } from "@mui/material";
import { StartPlanningWrapper } from "./styled";
import lhs from "../../asset/start-planning-lhs.svg";
import rhs from "../../asset/start-planning-rhs.svg";
import middlebg from "../../asset/start-planning-middlebg.svg";

export const StartPlanning = () => {
    return (
        <StartPlanningWrapper>
            <Box
                component={"div"}
                className="image-box"
            >
                <img
                    src={lhs}
                    alt="lhs"
                />
            </Box>
            <Stack
                flex={{ tablet: 0.6 }}
                gap={{ mobile: "calc(var(--flex-gap)/2)", laptop: "calc(var(--flex-gap))" }}
                padding={{ mobile: "0 calc(var(--basic-padding)/2)", tablet: "0 calc(var(--basic-padding))" }}
                width={"100%"}
                overflow={"hidden"}
                sx={{
                    backgroundImage: `url(${middlebg})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }}
            >
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: 14, laptop: 20 }}
                        lineHeight={"normal"}
                        color={"var(--dark-color)"}
                        whiteSpace={"normal"}
                        textAlign={{ tablet: "center" }}
                    >
                        READY TO BRING YOUR DREAM TO LIFE?
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h2"
                        fontFamily={"David Libre"}
                        fontWeight={400}
                        fontSize={{ mobile: 40, laptop: 50 }}
                        lineHeight={"normal"}
                        color={"var(--dark-color)"}
                        whiteSpace={"normal"}
                        textAlign={{ tablet: "center" }}
                    >
                        Let’s start planning a day you’ll Always remember
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: 16, tablet: 20 }}
                        lineHeight={1.5}
                        color={"var(--dark-color)"}
                        whiteSpace={"normal"}
                        textAlign={{ tablet: "center" }}
                    >
                        Create unforgettable experiences with our personalized planning services. Let's start planning a day you'll always remember with tailored activities, unique adventures, and cherished moments. From romantic getaways to fun outings with friends and family, we'll help you craft a day that's truly special."
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={"div"}
                className="image-box"
            >
                <img
                    src={rhs}
                    alt="rhs"
                />
            </Box>
        </StartPlanningWrapper>
    )
}