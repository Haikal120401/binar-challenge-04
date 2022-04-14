import React from 'react';
import '../assets/css/card.css';
import IconSetting from '../assets/img/fi_settings.png';
import IconUser from '../assets/img/fi_users.png';
import IconCalender from '../assets/img/fi_calendar.png';


const Product = (props) => {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-5">
                    <div className="card ">
                            <div className="img-thumb-prod">
                                <img className="image" src={props.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="name mt-3">{props.name}</h5>
                                <p className="harga">{props.price}</p>
                                <p className="product-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <p><img src={IconUser} alt="user"/>  4 orang</p>
                                <p><img src={IconSetting} alt="set"/>  Manual</p>
                                <p><img src={IconCalender} alt="calender"/>  Tahun 2020</p>
                                <button className='btn btn-success' onClick={()=> props.goDetail(props.id)}> Pilih Mobil</button>
                                {/* <a href="/#" className="btn btn-success">Pilih Mobile</a> */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;