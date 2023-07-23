
import { DAT_VE_XEM_PHIM } from "./dat-ve-xem-phim.constant";



const STATE_DEFAULT = {
    danhSachGheDangDat: [
    ]
}

export const DatVeReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case (DAT_VE_XEM_PHIM.datGhe): {
            let newDanhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = newDanhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === action.payload.soGhe);
            if (index !== -1) {
                newDanhSachGheDangDat.splice(index, 1);
            } else {
                newDanhSachGheDangDat.push(action.payload)
            }
            state.danhSachGheDangDat = newDanhSachGheDangDat;
            return { ...state }
        }
        case (DAT_VE_XEM_PHIM.huyGhe):{
            let newDanhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = newDanhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === action.payload)
            if (index !== -1) {
                newDanhSachGheDangDat.splice(index, 1);
            } 
            state.danhSachGheDangDat = newDanhSachGheDangDat;
            return { ...state }
        }
        default:
            return { ...state };
    }
}


