import Home from '../../Screens/Home.jsx';
import Product from '../../Screens/Product.jsx';
import About from '../../Screens/About.jsx';
import Think from '../../Screens/Think.jsx';
import  Counter from '../Counter/Counter.jsx';

import { Routes, Route } from 'react-router';

const Router =() =>{
    return(
        <Routes>
             <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />

            <Route path="counter" element={<Counter />} />
        </Routes>
    );
}

export default Router;