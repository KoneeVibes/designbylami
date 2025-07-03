import { Box, DialogContent, DialogTitle, IconButton, Stack } from "@mui/material";
import { BaseFormModalWrapper } from "./styled";
import { FormModalPropsType } from "../../../type/component.type";
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef } from "react";

export const BaseFormModal = forwardRef<HTMLFormElement, FormModalPropsType>(
    ({ open, className, handleClickOutside, title, handleSubmit, children }, ref) => {
        return (
            <BaseFormModalWrapper
                open={open}
                onClose={handleClickOutside}
                PaperProps={{
                    ref: ref,
                    component: "form",
                    onSubmit: handleSubmit,
                }}
                className={className}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"calc(var(--flex-gap)/4)"}
                    justifyContent={"space-between"}
                    padding={"var(--basic-padding)"}
                    borderBottom={"2px solid var(--form-header-border)"}
                >
                    <Box
                        overflow={"hidden"}
                    >
                        <DialogTitle
                            component={"legend"}
                        >
                            {title}
                        </DialogTitle>
                    </Box>
                    <Box>
                        <IconButton
                            onClick={(e) => handleClickOutside?.(e, "backdropClick")}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Stack>
                <DialogContent>
                    {children}
                </DialogContent>
            </BaseFormModalWrapper>
        )
    });