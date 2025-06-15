import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PropsType = {
    children: React.ReactElement<any, any>
}

const ScrollToTop = ({ children }: PropsType) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
};

export default ScrollToTop;