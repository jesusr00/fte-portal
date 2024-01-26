import PoppinsBlack from "./Poppins-Black.woff2"
import PoppinsBold from "./Poppins-Bold.woff2"
import PoppinsExtraBold from "./Poppins-ExtraBold.woff2"
import PoppinsExtraLight from "./Poppins-ExtraLight.woff2"
import PoppinsLight from "./Poppins-Light.woff2"
import PoppinsMedium from "./Poppins-Medium.woff2"
import PoppinsRegular from "./Poppins-Regular.woff2"
import PoppinsSemiBold from "./Poppins-SemiBold.woff2"
import PoppinsThin from "./Poppins-Thin.woff2"


export const PoppinsOverride = `
    @font-face {
        font-family: 'Poppins';
        font-weight: 100;
        font-style: normal;
        src: url(${PoppinsThin}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 200;
        font-style: normal;
        src: url(${PoppinsExtraLight}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 300;
        font-style: normal;
        src: url(${PoppinsLight}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: normal;
        src: url(${PoppinsRegular}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 500;
        font-style: normal;
        src: url(${PoppinsMedium}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 600;
        font-style: normal;
        src: url(${PoppinsSemiBold}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 700;
        font-style: normal;
        src: url(${PoppinsBold}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 800;
        font-style: normal;
        src: url(${PoppinsExtraBold}) format('woff2');
        font-display: swap;
    } 
    @font-face {
        font-family: 'Poppins';
        font-weight: 900;
        font-style: normal;
        src: url(${PoppinsBlack}) format('woff2');
        font-display: swap;
    }
`