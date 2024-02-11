import {colors, sizes} from '../../../../../constants.ts';

export const styledLogout = {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTop: `1px solid ${colors.grey.light}`,
    transition: 'all 0.3s ease-in-out',
    padding: '7px 16px',
    height: '40px',
    gap: '26px',
    width: sizes.sidebar.desktop.full
} as const;

export const collapsedLogout = {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTop: `1px solid ${colors.grey.light}`,
    transition: 'all 0.3s ease-in-out',
    padding: '7px 16px',
    height: '40px',
    width: sizes.sidebar.desktop.collapsed
} as const;

export const mobileLogout = {
    position: 'fixed',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `1px solid ${colors.grey.light}`,
    padding: '7px 16px',
    height: '40px',
    width: sizes.sidebar.mobile.full,
    transition: 'all 0.3s ease-in-out',
    opacity: 1,
} as const;

export const collapsedMobileLogout = {
    opacity: 0,
    width: 0,
} as const;
