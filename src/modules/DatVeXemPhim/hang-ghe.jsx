import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datVeCreator } from '../../redux/ve-xem-phim/dat-ve-xem-phim.action';

class HangGhe extends Component {
    // renderGhe = () => {
    //     return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
    //         let disable = false;
    //         let cssgheDaDat = '';
    //         if (ghe.daDat ) {
    //             cssgheDaDat = 'gheDuocChon';
    //             disable = true;
    //         }
    //         let cssGheDangDat = ''
    //         let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
    //         if (indexGheDangDat === -1) {
    //             cssGheDangDat = 'gheDangChon'
    //         }
    //         return <button onClick={() => { this.props.datGhe(ghe) }} disabled={disable} className={`ghe ${cssgheDaDat} ${cssGheDangDat} `} key={index}>
    //             {ghe.soGhe}
    //         </button>
    //     })
    // }
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let disabled = false
            let cssGheDaDat = ''
            if (ghe.daDat) {
                cssGheDaDat = ' gheDuocChon'
                disabled = true
            }
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat =>gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={()=>{
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat} `} key={index}>
                {index+1}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang,) => {
            return <button className='rowNumber'>{hang.soGhe}</button>
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-4'>{this.props.hangGhe.hang} {this.renderSoHang()}</div>
        } else {
            return <div>{this.props.hangGhe.hang} {this.renderGhe()}</div>
        }


    }
    render() {
        return (
            <div className='text-light text-left ml-5 mt-3' style={{ fontSize: '25px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.DatVeReducer.danhSachGheDangDat
    }
}
const mapDispathcToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datVeCreator(ghe))
        }
    }
}

export default connect(mapStateToProps,mapDispathcToProps)(HangGhe)