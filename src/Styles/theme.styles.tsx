const deviceSizes = {
    mobile: "480px",
    smallTablet: "481px",
    largeTablet: "1024px",
    smallLapTop: "1025px",
    largeLapTop: "1366px",
    desktop: "1367px",
};

const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (min-width: ${deviceSizes.smallTablet} and ${deviceSizes.largeTablet})`,
    laptop: `screen and (min-width: ${deviceSizes.smallLapTop} and ${deviceSizes.largeTablet})`,
    desktop: `screen and (min-width: ${deviceSizes.desktop})`,
};

const theme = {
    device,
};

export default theme;
