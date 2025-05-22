import { Header } from "../../container/header";
import { AppLayout } from "../../container/layout";
import { HomeBodyWrapper } from "./styled";
import homeheaderbg from "../../asset/home-header-bg.png";
import { StartPlanning } from "../../container/startplanning";
import { Clients } from "../../container/clients";
import { RecentWorks } from "../../container/recentworks";
import { Testimonial } from "../../container/testimonial";

export const Home = () => {
    return (
        <AppLayout
            location="home"
        >
            <HomeBodyWrapper>
                <Header
                    headerBg={homeheaderbg}
                    minHeight={"400px"}
                    headerText="We bring the WOW to your party!"
                    headerBody="With DBE Designs party planning your event will definitely be the talk of the town & your guests will be WOWed!"
                    callToAction={true}
                />
                <StartPlanning />
                <Clients />
                <RecentWorks />
                <Testimonial />
            </HomeBodyWrapper>
        </AppLayout>
    )
}