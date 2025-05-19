import { Box, Grid, Typography } from "@mui/material";
import { RecentWorksWrapper } from "./styled";
import { recentWorks } from "../../config/static";
import { BaseButton } from "../../component/button/styled";
import { Arrow } from "../../asset";

export const RecentWorks = () => {
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
                {recentWorks.map((work: Record<string, any>, index) => {
                    return (
                        <Grid
                            key={index}
                            size={{ mobile: 12, tablet: (12 / Number(`${recentWorks.length}`)) }}
                        >
                            <Box
                                component={"div"}
                                className="thumbnail-box"
                            >
                                <img
                                    src={work.thumbnail}
                                    alt="work-thumbnail"
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
                    onClick={() => { }}
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