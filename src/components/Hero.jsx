import React from 'react';
import '../assets/css/mobil.css';
import Mobil from '../assets/img/img_car.png';



const Hero =() =>{
    return (
		<div id='mobil'>
			<div className="container" >
				<div class="row">
					<div className="col-lg-6 col-sm-12 col-md-12">
					<h3>Sewa & Rental Mobile Terbaik di kawasan Jogja</h3>
					<p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
					<button type="submit">Mulai Sewa Mobil</button>
					</div>
					<div className="col-lg-6 col-sm-12 col-md-12">
					<img className="img-fluid" src={Mobil} alt="mobil" />
					</div>
				</div>
			</div>
		</div> 
    )
}
export default Hero;