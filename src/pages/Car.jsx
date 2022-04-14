import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/css/card.css';
import IconSetting from '../assets/img/fi_settings.png';
import IconUser from '../assets/img/fi_users.png';
import IconCalender from '../assets/img/fi_calendar.png';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Latar from '../components/Latar';
import {Container,Col,Card,Button} from 'react-bootstrap';


const Car =() => {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://rent-cars-api.herokuapp.com/customer/car')
        .then((res) => res.json())
        .then ((data)=> {
            setCars(data);
        })
        .catch((err) => console.log(Error))
    },[]);

    const handleDetail = (id) =>{
        navigate(`/card/${id}`)
    }

    return (
        <>
            <Navbar/>
            <Latar />
            <div>

                {cars.map((car) => {
                    return(
                        <Container>
                            <Col className="m-5" md={4}>
                                <Card>
                                    <Card.Img variant="top" src={car.image} />
                                    <Card.Body>
                                        <Card.Title>{car.name}</Card.Title>
                                        <Card.Text>{car.price}</Card.Text>
                                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
                                        <Card.Text><img src={IconUser} alt="user"/>  4 orang</Card.Text>
                                        <Card.Text><img src={IconSetting} alt="set"/>  Manual</Card.Text>
                                        <Card.Text><img src={IconCalender} alt="calender"/>  Tahun 2020</Card.Text>
                                        <Button variant="success" onClick={()=> handleDetail(car.id)}>Pilih Mobil</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>    
                    )
                })}
            </div>
            <Footer/>
        </>
    )
}
export default Car;