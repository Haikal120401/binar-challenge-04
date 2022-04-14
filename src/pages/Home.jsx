import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailProduct from './DetailProduct';
import HomePage from './HomePage';
import Car from './Car';

class Home extends Component {
    render(){ 
        return (

            // <HomePage/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/card' element={<Car/>}/>
                    <Route path='/card/:id' element={<DetailProduct/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
export default Home;