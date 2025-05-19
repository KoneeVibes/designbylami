import { Box, Stack, Typography, useMediaQuery } from "@mui/material"
import { NewsletterWrapper } from "./styled"
import { BaseInput } from "../../component/formfield/input/styled"
import { BaseButton } from "../../component/button/styled"
import { NewsletterPropsType } from "../../type/container.type"

export const Newsletter: React.FC<NewsletterPropsType> = ({ top }) => {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <NewsletterWrapper
            top={matches ? top : "unset"}
        >
            <Stack
                gap={"calc(var(--flex-gap)/2)"}
                width={{ mobile: "100%", tablet: "60%" }}
                overflow={"hidden"}
            >
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily={"David Libre"}
                        fontWeight={700}
                        fontSize={{ mobile: 30, tablet: 40, xl: 50 }}
                        lineHeight={"normal"}
                        color={"var(--light-color)"}
                        textAlign={"center"}
                        whiteSpace={"normal"}
                    >
                        Get Promo Code by Subscribing To our  Newsletter
                    </Typography>
                </Box>
                <Stack
                    component={"form"}
                    direction={"row"}
                    bgcolor={"var(--light-color)"}
                    borderRadius={"20px"}
                    padding={"calc(var(--basic-padding)/6)"}
                    overflow={"hidden"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Box
                        component={"fieldset"}
                        className="fieldset"
                    >
                        <BaseInput
                            required
                            fullWidth
                            placeholder="Enter your email"
                        />
                    </Box>
                    <Box
                        overflow={"hidden"}
                    >
                        <BaseButton
                            type="submit"
                            variant={"contained"}
                            radius="10px"
                            fullWidth
                            fontsize="16px"
                            fontweight={700}
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
                                Subscribe
                            </Typography>
                        </BaseButton>
                    </Box>
                </Stack>
            </Stack>
        </NewsletterWrapper>
    )
}