import { useContext } from "react";
import { Typography } from "@mui/material";
import { Hamburger } from "./styled";
import { Context } from "../../../context";

export const MenuButton: React.FC<{}> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    return (
        <Hamburger
            onClick={() => setOpenMenu(!openMenu)}
        >
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
        </Hamburger>
    )
}