import { Box, Grid } from "@mui/material";
import { works } from "../../config/static";
import { WorksWrapper } from "./styled";

export const Works = () => {
    return (
        <WorksWrapper
            container
            rowSpacing={"calc(var(--flex-gap)/3)"}
            columnSpacing={"calc(var(--flex-gap)/6)"}
        >
            {works.map((work: Record<string, any>, index) => {
                return (
                    <Grid
                        key={index}
                        size={{ mobile: 12, tablet: 4 }}
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
        </WorksWrapper>
    )
}