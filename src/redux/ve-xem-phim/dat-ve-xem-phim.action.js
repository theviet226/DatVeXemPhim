import { DAT_VE_XEM_PHIM } from "./dat-ve-xem-phim.constant";

export const DatVeCreator = (payload) =>{
    return {
        type: DAT_VE_XEM_PHIM.datGhe,
        payload,
    }
}