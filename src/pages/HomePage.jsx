import React, {Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Form from '../components/Form';

class HomePage extends Component {
    render(){
        return (
            <Fragment>
                <Navbar />
                <Hero />
                <Form />
                <Footer />
            </Fragment>
        )
    }
}
export default HomePage;