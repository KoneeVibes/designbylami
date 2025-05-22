import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RecentWorkI from "../asset/thumbnail.png";
import RecentWorkII from "../asset/thumbnail.png";
import RecentWorkIII from "../asset/thumbnail.png";
import WorkI from "../asset/work-thumbnail-one.png";
import WorkII from "../asset/work-thumbnail-two.png";
import WorkIII from "../asset/work-thumbnail-three.png";
import WorkIV from "../asset/work-thumbnail-four.png";
import WorkV from "../asset/work-thumbnail-five.png";
import WorkVI from "../asset/work-thumbnail-six.png";
import reviewerheadshot from "../asset/reviewer-one.svg";
import { ClientLogoI, ClientLogoII, ClientLogoIII, ClientLogoIV, ClientLogoV } from '../asset';

export const navLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Work",
        url: "/work"
    },
    {
        name: "Contact Us",
        url: "#contact"
    },
];

export const openingHours = [
    {
        days: "Monday - Friday",
        time: "8:00 am to 9:00 pm"
    },
    {
        days: "Saturday",
        time: "8:00 am to 9:00 pm"
    },
    {
        days: "Sunday",
        time: "CLOSED"
    },
];

export const socialMedia = [
    {
        icon: <XIcon />,
        name: "Twitter",
        url: ""
    },
    {
        icon: <InstagramIcon />,
        name: "Instagram",
        url: ""
    },
    {
        icon: <FacebookIcon />,
        name: "Facebook",
        url: ""
    },
];

export const footerDocuments = [
    {
        name: "Terms of Reference",
        url: ""
    },
    {
        name: "Privacy Policy",
        url: ""
    },
];

export const clientLogos = [
    {
        name: "Client One",
        logo: <ClientLogoI />
    },
    {
        name: "Client Two",
        logo: <ClientLogoII />
    },
    {
        name: "Client Three",
        logo: <ClientLogoIII />
    },
    {
        name: "Client Four",
        logo: <ClientLogoIV />
    },
    {
        name: "Client Five",
        logo: <ClientLogoV />
    },
];

export const recentWorks = [
    {
        name: "Work 1",
        thumbnail: RecentWorkI
    },
    {
        name: "Work 2",
        thumbnail: RecentWorkII
    },
    {
        name: "Work 3",
        thumbnail: RecentWorkIII
    },
];

export const works = [
    {
        name: "Work 1",
        thumbnail: WorkI
    },
    {
        name: "Work 2",
        thumbnail: WorkII
    },
    {
        name: "Work 3",
        thumbnail: WorkIII
    },
    {
        name: "Work 4",
        thumbnail: WorkIV
    },
    {
        name: "Work 5",
        thumbnail: WorkV
    },
    {
        name: "Work 6",
        thumbnail: WorkVI
    },
];

export const reviews = [
    {
        reviewer: "Ama Ampomah",
        jobtitle: "CEO & Founder Inc.",
        stars: 5,
        review: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        headshot: reviewerheadshot,
    },
    {
        reviewer: "Ama Ampomah",
        stars: 4,
        jobtitle: "CEO & Founder Inc.",
        review: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        headshot: reviewerheadshot,
    },
    {
        reviewer: "Ama Ampomah",
        stars: 3,
        jobtitle: "CEO & Founder Inc.",
        review: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        headshot: reviewerheadshot,
    },
    {
        reviewer: "Ama Ampomah",
        stars: 2,
        jobtitle: "CEO & Founder Inc.",
        review: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
        headshot: reviewerheadshot,
    },
]