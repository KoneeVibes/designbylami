import { Box, Grid, Typography } from "@mui/material";
import { RecentWorksWrapper } from "./styled";
import { BaseButton } from "../../component/button/styled";
import { Arrow } from "../../asset";
import { useQuery } from "@tanstack/react-query";
import { retrieveAllGalleryService } from "../../util/api/retrieveallgallery";
import { useNavigate } from "react-router-dom";

export const RecentWorks = () => {
    const API_KEY = process.env.REACT_APP_API_KEY || "";

    const navigate = useNavigate();

    const { data: gallery } = useQuery({
        queryKey: ['gallery', API_KEY],
        queryFn: async () => {
            const response = await retrieveAllGalleryService(API_KEY);
            return Array.isArray(response)
                ? response
                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .slice(0, 3)
                : [];
        },
        enabled: !!API_KEY,
    });

    return (
        <RecentWorksWrapper>
            <Box>
                <Typography
                    variant="h2"
                    fontFamily={"David Libre"}
                    fontWeight={700}
                    fontSize={{ mobile: 30, tablet: 40, laptop: 50 }}
                    lineHeight={"normal"}
                    color={"var(--dark-color)"}
                    whiteSpace={"normal"}
                    textAlign={{ tablet: "center" }}
                    marginBlockEnd={{ mobile: "calc(var(--basic-margin)/3)", tablet: "calc(var(--basic-margin)/2)" }}
                >
                    Our Recent Works
                </Typography>
            </Box>
            <Grid
                container
                spacing={"calc(var(--flex-gap)/3)"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                {gallery?.map((work: Record<string, any>, index) => {
                    return (
                        <Grid
                            key={index}
                            size={{ mobile: 12, tablet: (12 / Number(`${gallery?.length}`)) }}
                        >
                            <Box
                                component={"div"}
                                className="thumbnail-box"
                            >
                                <img
                                    src={work.url}
                                    alt={work.title}
                                />
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
            <Box
                component={"div"}
                className="all-projects-button-box"
            >
                <BaseButton
                    fontfamily="Inter"
                    fontweight={400}
                    fontsize="16px"
                    padding="calc(var(--basic-padding)/4) 0"
                    sx={{ float: { tablet: "right" } }}
                    endIcon={<Arrow />}
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
                        View All Projects
                    </Typography>
                </BaseButton>
            </Box>
        </RecentWorksWrapper>
    )
}