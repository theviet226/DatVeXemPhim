import React, { Component } from 'react'

import HangGhe from './hang-ghe'
import ThongTinDatGhe from './thong-tin-dat-ghe'
import danhSachGhe from '../../data/danhSachGhe.json'
import "./style.css"




export default class DatVeXemPhim extends Component {
    render() {
        return (
            <div className='datVe' style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: 'rgba(0,0,0,0.8)'
            }}>
                <div className='row'>
                    <div className='col-8 text-center'>
                        <h1 className='text-light'>Đặt vé xem phim</h1>
                        <div className='d-flex justify-content-center mt-3' style={{
                            flexDirection: 'column'
                        }}>
                            <div className='screen ml-5'>Màn Hình</div>

                        </div>
                        <div className='ml-5'>
                        {danhSachGhe.map((hangGhe, index) => {
                            return <div className='ml-5' key={index}>
                                <HangGhe hangGhe={hangGhe} soHangGhe={index}
                                /> </div>
                        })}
                        </div>



                    </div>
                    <div className='col-4'>
                        <ThongTinDatGhe />
                    </div>
                </div>
            </div>
        )
    }
}

