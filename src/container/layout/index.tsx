import { AppLayoutPropsType } from "../../type/container.type";
import { Footer } from "../footer";
import { MainArea } from "../mainarea";
import { Navigation } from "../navigation";
import { AppLayoutWrapper } from "./styled";

export const AppLayout: React.FC<AppLayoutPropsType> = ({ children, location }) => {
    return (
        <AppLayoutWrapper>
            <Navigation />
            <MainArea>
                {children}
            </MainArea>
            <Footer
                top={location === "home" ? "calc(var(--basic-margin) * 6)" : "calc(var(--basic-margin) * 4)"}
            />
        </AppLayoutWrapper>
    )
}