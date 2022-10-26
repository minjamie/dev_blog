import { css, CSSObject, SimpleInterpolation } from "styled-components";

type DeviceType = "mobile" | "laptop" | "tablet" | "desktop";

const sizes: Record<DeviceType, number> = {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 2560,
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
