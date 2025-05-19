import { Box, Card, CardContent, CardMedia, Stack, Typography, useMediaQuery } from "@mui/material";
import { Newsletter } from "../newsletter";
import { TestimonialWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { reviews } from "../../config/static";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Fragment } from "react/jsx-runtime";

export const Testimonial = () => {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <TestimonialWrapper>
            <Stack
                overflow={"hidden"}
                gap={{ mobile: "var(--basic-margin)", tablet: "calc(var(--basic-margin) * 2)" }}
                paddingBottom={{ mobile: "calc(var(--basic-padding))", tablet: "calc(var(--basic-padding) * 2)" }}
            >
                <Box
                    padding={{ mobile: "0 calc(var(--basic-padding)/2)", tablet: "0 calc(var(--basic-padding))" }}
                >
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
                        Our Happy Customers
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: 14, tablet: 16 }}
                        lineHeight={"normal"}
                        color={"var(--text-color)"}
                        whiteSpace={"normal"}
                        textAlign={{ tablet: "center" }}
                        marginBlockEnd={{ mobile: "calc(var(--basic-margin)/3)", tablet: "calc(var(--basic-margin)/2)" }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </Typography>
                </Box>
                <Box
                    className="carousel-box"
                >
                    <Carousel
                        autoPlay={true}
                        autoFocus={true}
                        infiniteLoop={true}
                        interval={2000}
                        emulateTouch={true}
                        showIndicators={true}
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        centerMode={true}
                        centerSlidePercentage={matches ? 40 : 80}
                        renderIndicator={(clickHandler, isSelected, index, label) => {
                            return (
                                <Box
                                    borderRadius={"50%"}
                                    width={10}
                                    height={10}
                                    bgcolor={isSelected ? "#F17120" : "var(--text-color)"}
                                    onClick={clickHandler}
                                />
                            )
                        }}
                    >
                        {reviews.map((review, index) => {
                            return (
                                <Card
                                    key={index}
                                    className="review-card"
                                >
                                    <CardMedia
                                        sx={{ height: 120, width: "120px !important", borderRadius: "50%", position: "absolute", top: "calc(var(--basic-margin) * -1)", transform: "translateX(-50%)" }}
                                        component="img"
                                        image={review.headshot}
                                    />
                                    <CardContent
                                        sx={{ display: "flex", flexDirection: "column", gap: "var(--basic-margin)" }}
                                    >
                                        <Box>
                                            <Stack
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                gap={0.5}
                                            >
                                                {[...Array(5)].map((_, i) => (
                                                    <Fragment>
                                                        {i < review.stars ? (
                                                            <StarIcon
                                                                key={i}
                                                                sx={{ color: "#F17120", fontSize: 20 }}
                                                            />
                                                        ) : (
                                                            <StarBorderIcon
                                                                key={i}
                                                                sx={{ color: "var(--text-color)", fontSize: 20 }}
                                                            />
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="body1"
                                                fontFamily={"Inter"}
                                                fontWeight={400}
                                                fontSize={{ mobile: 16 }}
                                                lineHeight={1.5}
                                                whiteSpace={"normal"}
                                                color="var(--text-color)"
                                                textAlign={"center"}
                                                sx={{
                                                    userSelect: "none"
                                                }}
                                            >
                                                {review.review}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="subtitle1"
                                                fontFamily={"Inter"}
                                                fontWeight={700}
                                                fontSize={{ mobile: 16 }}
                                                lineHeight={"normal"}
                                                whiteSpace={"normal"}
                                                color="var(--dark-color)"
                                                textAlign={"center"}
                                                sx={{
                                                    userSelect: "none"
                                                }}
                                            >
                                                {review.reviewer}
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                fontFamily={"Inter"}
                                                fontWeight={400}
                                                fontSize={{ mobile: 16 }}
                                                whiteSpace={"normal"}
                                                color="var(--text-color)"
                                                lineHeight={"normal"}
                                                textAlign={"center"}
                                                sx={{
                                                    userSelect: "none"
                                                }}
                                            >
                                                {review.jobtitle}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </Carousel>
                </Box>
            </Stack>
            <Box
                padding={{ mobile: "0 calc(var(--basic-padding)/2)", tablet: "0 calc(var(--basic-padding))" }}
            >
                <Newsletter
                    top="unset"
                />
            </Box>
        </TestimonialWrapper >
    )
}