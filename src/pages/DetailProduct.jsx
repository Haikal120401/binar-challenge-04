import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Latar from "../components/Latar";
import Navbar from "../components/Navbar";
import '../assets/css/detail.css';
import IconSetting from '../assets/img/fi_settings.png';
import IconUser from '../assets/img/fi_users.png';
import IconCalender from '../assets/img/fi_calendar.png';

const DetailProduct =() => {
        const {id} = useParams();
        const [car, setCar] = useState([]);

        useEffect(()=>{
            fetch(`https://rent-cars-api.herokuapp.com/customer/car/${id}`)
            .then((res) => res.json())
            .then ((data)=> {
                setCar(data);
            })
            .catch((err) => console.log(Error))
        },[id]);

        return (
            <>
                <Navbar/>
                <Latar/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mt-5">
                            <div className="card ">
                                    <div className="card-body">
                                        <div className="paket">
                                            <h5 className='text-bold'>Tentang Paket</h5>
                                            <ul className="mt-4">
                                                <h6>Include</h6>
                                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                                <li>Sudah termasuk bensin selama 12 jam</li>
                                                <li>Sudah termasuk Tiket Wisata</li>
                                                <li>Sudah termasuk pajak</li>
                                            </ul>
                                            <ul>
                                                <h6>Exclude</h6>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </div>
                                        <div className="ket">
                                            <h5>Refund,Reschedule,Overtime</h5>
                                            <ul>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="card">
                                <img className="image p-4" src={car.image} alt="" />  
                                <div className="card-body">  
                                        <h5 className="name mt-3 ml-3">{car.name}</h5>
                                        <p><img src={IconUser} alt="user"/>  4 orang</p>
                                        <p><img src={IconSetting} alt="set"/>  Manual</p>
                                        <p><img src={IconCalender} alt="calender"/>  Tahun 2020</p>
                                        <p className="harga">Total    Rp {car.price}</p>
                                        <button className="btn btn-success"> Lanjutkan Pembayaran</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success mt-5">Lanjutkan Pembayaran</button>
                </div>
                <Footer/>
            </>
        )
}

export default DetailProduct;