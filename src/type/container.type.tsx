export type MainAreaPropsType = {
    children: React.ReactNode
}

export type AppLayoutPropsType = {
    children: React.ReactNode,
    location: "home" | "work"
}

export type HeaderWrapperPropsType = {
    headerBg?: string,
    minHeight?: string | number,
}

export type HeaderPropsType = {
    minHeight?: string | number,
    headerText: string,
    headerBody?: string,
    callToAction?: boolean,
} & HeaderWrapperPropsType

export type NewsletterPropsType = {
    top?: string
}

export type FooterPropsType = {
    top?: string
}