import {colors} from "../../../../../constants.ts";

export const descktopArrow = {
    height: '66px',
    width: '20px',
    position: 'absolute',
    top: '50%',
    right: '-20px',
    transform: 'translate(0, -50%)',
    backgroundColor: colors.white.standard,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    clipPath: 'polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
} as const;

export const mobileArrow = {
    height: '48px',
    width: '32px',
    position: 'absolute',
    top: '48px',
    right: '-32px',
    transform: 'translate(0, -50%)',
    backgroundColor: colors.white.standard,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    clipPath: 'polygon(0px 0px, 100% 10%, 100% 90%, 0px 100%)',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
} as const;

export const greyIcon = {
    color: colors.grey.primary,
}
