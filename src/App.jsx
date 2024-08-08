import React, { useEffect, useState } from 'react';
import './App.scss'
import Layout from './Layout/Layout'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Goods from './pages/Goods/Goods';
import Register from './pages/Register/Register';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './store/productsSlice';
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import PageSize from './pages/pageSize/PageSize';
import Placing from './pages/Placing/Placing';
import Platya from './pages/Platya/Platya';
import BottomCloth from './pages/BottomCloth/BottomCloth';
import Jackets from './pages/Jackets/Jackets';
import Costume from './pages/Costume/Costume';
import Favourite from './pages/Favourite/Favourite';



const App = () => { 
const  dispatch=useDispatch()

useEffect(()=>{
    axios('http://localhost:9090/products')
    .then(({data})=>dispatch(getAllProducts(data)))
},[])


    
    return (
        <>
            <Routes>
                <Route  path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='category' element={<Category/>}/>
                <Route path='platya' element={<Platya/>}/>
                <Route path='bottomCloth' element={<BottomCloth/>}/>
                <Route path='jackets' element={<Jackets/>}/>
                <Route path='costume' element={<Costume/>}/>
                <Route path='goods/:id' element={<Goods/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='pagesize' element={<PageSize/>}/>
                <Route path='placing' element={<Placing/>}/>
                <Route path='favourite' element={<Favourite/>}/>
                </Route>
                <Route path='register' element={<Register/>}/>
                <Route path='notfound' element={<NotFound/>}/>
            </Routes>
        </>
    );
};

export default App;