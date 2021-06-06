import React from 'react';
import '../../App.css';
import './home.scss';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <h1 className='home'></h1>
        <div  className='x'>
        <h className='y'>Welcome to our site </h>
        <div className='a'>Benefit from our website , which is designed to meet all your
           expectations in terms of asset management.</div>
        
        <div className='hero-btns'>
        <Link to='signin'>
     <button className='btn-started'>Get Started</button>
</ Link>
        </div>
        </div>

        </>
    );
}