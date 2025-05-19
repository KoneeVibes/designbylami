import { Newsletter } from "../newsletter";
import { ContactBoxWrapper } from "./styled";

export const ContactBox = () => {
    return (
        <ContactBoxWrapper>
            <Newsletter
                top="calc(var(--basic-padding) * 2)"
            />
        </ContactBoxWrapper>
    )
}