import { Box, Grid } from "@mui/material";
import { WorksWrapper } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { retrieveAllGalleryService } from "../../util/api/retrieveallgallery";

export const Works = () => {
    const API_KEY = process.env.REACT_APP_API_KEY || "";

    const { data: gallery } = useQuery({
        queryKey: ['gallery', API_KEY],
        queryFn: async () => {
            const response = await retrieveAllGalleryService(API_KEY);
            console.log(response);
            return response;
        },
        enabled: !!API_KEY,
    });

    return (
        <WorksWrapper
            container
            rowSpacing={"calc(var(--flex-gap)/3)"}
            columnSpacing={"calc(var(--flex-gap)/6)"}
        >
            {gallery?.map((work: Record<string, any>, index: number) => {
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
                                src={work?.url}
                                alt={work?.title}
                            />
                        </Box>
                    </Grid>
                )
            })}
        </WorksWrapper>
    )
}