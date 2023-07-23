import React, { Component } from 'react'


export default class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className='mt-5'>
                <h1 className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <div className='mt-5'>
                    <button className='gheDuocChon mt-3'> </button>
                    <span className='text-light' style={{
                        fontSize: '30px'
                    }}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon mt-2'></button>
                    <span className='text-light' style={{
                        fontSize: '30px'
                    }}>Ghế đang chọn</span>
                    <br />
                    <button className='ghe mt-2' style={{marginLeft: '0'}}></button>
                    <span className='text-light' style={{
                        fontSize: '30px',
                    }}>Ghế chưa đặt</span>
                </div>
                <table className="table mt-4" border='2'>
                    <thead>
                        <tr className='text-light'>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Huỷ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-light'>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }
}
