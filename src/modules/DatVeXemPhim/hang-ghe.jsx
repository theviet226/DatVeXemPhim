import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let disable = false;
            let gheDaDat = '';
            if (ghe.daDat === true) {
                gheDaDat = 'gheDuocChon';
                disable = true;
            }
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat === -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return <button disabled={disable} className={`ghe ${gheDaDat} `} key={index}>
                {index + 1}
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

export default connect(mapStateToProps)(HangGhe)