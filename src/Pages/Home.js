import React, { useState } from 'react';
import Header from './Header';
import MainSect from './MainSect/MainSect';
import '../CSS/MainStyle.css';
import fetchBookss from '../redux/Books/thunk/fetchBookss';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    
    useState(() => {
        dispatch(fetchBookss);
    }, )

    return (
        <div>
            <Header></Header>
            <MainSect></MainSect>
        </div>
    );
};

export default Home;