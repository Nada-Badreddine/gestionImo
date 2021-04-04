import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
        <h1 className='home'></h1>
        <div  className='x'>
        <h1 >Welcome to our site </h1>
        <h2>Discover our website offer, designed to meet all your expectations in terms of asset management.</h2>
        <p>Authenticate and Benefit from our services</p>
        <div className='hero-btns'>
        <Link to='signin'>
     <button className='btn-started'>get started</button>

</ Link>
        </div>
       
        
        </div>

        </>
    );
}