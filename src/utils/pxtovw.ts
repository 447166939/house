const designWidth = 1920;
const designHeight = 1080;
const mobileDesignWidth = 750;
const mobileDesignHeight = 1334;
export const px2vw = (px: number) => (100 * px) / designWidth + "vw";
export const px2vh = (px: number) => (100 * px) / designHeight + "vh";
export const px2vwMo = (px: number) => (100 * px) / mobileDesignWidth + "vw";
export const px2vhMo = (px: number) => (100 * px) / mobileDesignHeight + "vh";
