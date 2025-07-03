import { FormLabelProps, InputBaseProps } from "@mui/material";

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

export type FormModalPropsType = {
    open: boolean,
    handleClickOutside: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    title?: string,
    children: React.ReactNode,
    className?: string,
};

export type BaseLabelPropsType = BaseTypographyType & FormLabelProps;

export type BaseAlertModalPropsType = {
    open: boolean,
    icon: React.ReactNode,
    handleClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined,
    handleCallToAction?: () => void,
    title?: string,
    message?: string,
    callToAction?: string,
};
