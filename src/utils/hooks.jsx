import { useState, useLayoutEffect } from 'react';

export function useMobileView() {
    const [width, setWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const setResponsiveness = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', setResponsiveness);
        return () => window.removeEventListener('resize', setResponsiveness);
    }, []);

    return width < 768 ? true : false;
}