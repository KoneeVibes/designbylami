import { InputBaseProps } from "@mui/material";

export type BaseTypographyType = {
    fontsize?: string,
    fontweight?: number,
    colour?: string,
};

export type BaseButtonPropsType = BaseTypographyType & {
    radius?: string,
    padding?: string,
    bgcolor?: string,
    border?: string,
    fontfamily?: string
};

export type BaseInputPropsType = BaseTypographyType & {
    border?: string,
    bgcolor?: string,
} & InputBaseProps;