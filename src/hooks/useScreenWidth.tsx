import { useEffect, useState } from 'react';
import { windowSize } from '../constants.ts';

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= windowSize.large) {
                setScreenWidth('large');
            } else if (width >= windowSize.medium) {
                setScreenWidth('medium');
            } else if (width >= windowSize.small) {
                setScreenWidth('small');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isLarge: screenWidth === 'large',
        isMedium: screenWidth === 'medium',
        isSmall: screenWidth === 'small',
    };
};
