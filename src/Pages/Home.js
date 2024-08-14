import React, { useEffect } from 'react';
import Header from './Header';
import MainSect from './MainSect/MainSect';
import '../CSS/MainStyle.css';
import fetchBookss from '../redux/Books/thunk/fetchBookss';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchBookss);
    }, [dispatch])

    return (
        <div>
            <Header></Header>
            <MainSect></MainSect>
        </div>
    );
};

export default Home;