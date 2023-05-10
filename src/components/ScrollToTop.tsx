import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const scrollableElement = document.querySelectorAll(".MuiBox-root");
        if (scrollableElement.length > 0) {
            scrollableElement[0].scrollTop = 0;
        }
    }, [pathname]);

    return null;
}
