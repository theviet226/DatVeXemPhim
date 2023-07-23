import DatVeXemPhim from "../../modules/DatVeXemPhim/dat-ve-xem-phim";



const STATE_DEFAULT = {
    danhSachGheDangDat: [{
        // soGhe: "A1", gia: 1000
    }]
}

export const DatVeReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case (DatVeXemPhim.datGhe): {
            let newDanhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = newDanhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                newDanhSachGheDangDat.splice(index, 1);
            } else {
                newDanhSachGheDangDat.push(action.ghe)
            }
            state.danhSachGheDangDat = newDanhSachGheDangDat;
            return { ...state }
        }
        default:
            return { ...state };
    }
}


