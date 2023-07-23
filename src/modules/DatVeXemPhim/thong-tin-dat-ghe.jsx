import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyVeCreator } from '../../redux/ve-xem-phim/dat-ve-xem-phim.action'


class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className='mt-5'>
                <h1 className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <div className='mt-3'>
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
                    <button className='ghe mt-2' style={{ marginLeft: '0' }}></button>
                    <span className='text-light' style={{
                        fontSize: '30px',
                    }}>Ghế chưa đặt</span>
                </div>
                <table className="table mt-4" border='2'>
                    <thead>
                        <tr className='text-light'>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-warning'>
                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td className='text-center'><button onClick={() => {
                                    this.props.dispatch(huyVeCreator(gheDangDat.soGhe))
                                }} className='btn btn-danger'>Hủy</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr className='text-warning'>
                            <td></td>
                            <td>Tổng tiền</td>
                            <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                return tongTien += gheDangDat.gia
                            }, 0)}</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.DatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe)