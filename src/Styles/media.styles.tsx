import { css, CSSObject, SimpleInterpolation } from "styled-components";

type DeviceType =
    | "mobileS"
    | "mobileM"
    | "mobileL"
    | "mobileXL"
    | "desktop"
    | "tablet"
    | "laptopS"
    | "laptopM"
    | "laptopL"
    | "desktop";

const sizes: Record<DeviceType, number> = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    mobileXL: 600,
    tablet: 768,
    laptopS: 960,
    laptopM: 1024,
    laptopL: 1440,
    desktop: 2560,
};

export const device = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptopS: `(max-width: ${sizes.laptopS})`,
    laptopM: `(max-width: ${sizes.laptopM})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
    desktopL: `(max-width: ${sizes.desktop})`,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
    return {
        ...acc,
        [key]: (
            first: CSSObject | TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ) => css`
            @media (max-width: ${value}px) {
                ${css(first, ...interpolations)}
            }
        `,
    };
}, {}) as Record<DeviceType, any>;

export { media };
