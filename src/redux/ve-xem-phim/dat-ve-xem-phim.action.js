import { DAT_VE_XEM_PHIM } from "./dat-ve-xem-phim.constant";

export const datVeCreator = (payload) =>{
    return {
        type: DAT_VE_XEM_PHIM.datGhe,
        payload,
    }
}
export const huyVeCreator = (payload) =>{
    return {
        type : DAT_VE_XEM_PHIM.huyGhe,
        payload,
    }
}