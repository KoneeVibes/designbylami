import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { WorkBodyWrapper } from "./styled";
import workheaderbg from "../../asset/work-header-bg.svg";
import { Works } from "../../container/works";
import { ContactBox } from "../../container/contactbox";

export const Work = () => {
    return (
        <AppLayout
            location="work"
        >
            <WorkBodyWrapper>
                <Header
                    headerBg={workheaderbg}
                    minHeight={"200px"}
                    headerText="See our Work"
                />
                <Works />
                <ContactBox />
            </WorkBodyWrapper>
        </AppLayout>
    )
}