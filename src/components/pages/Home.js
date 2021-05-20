import React from 'react';
import '../../App.css';
import './home.scss';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
        <h1 className='home'></h1>
        <div  className='x'>
        <h className='y'>Welcome to our site </h>
        <div className='a'>Discover our website offer, designed to meet all your
       expectations in terms of asset management.</div>
        <p className='c'>Authenticate and Benefit from our services</p>
        <div className='hero-btns'>
        <Link to='signin'>
     <button className='btn-started'>get started</button>

</ Link>
        </div>
       
        
        </div>

        </>
    );
}