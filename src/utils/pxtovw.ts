const designWidth=1920;
const mobileDesignWidth=750;
export const px2vw=(px:number)=>100*px/designWidth+'vw';
export const px2vwMo=(px:number)=>100*px/mobileDesignWidth+'vw';