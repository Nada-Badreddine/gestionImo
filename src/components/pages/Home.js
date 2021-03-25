import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
        <h1 className='home'>EPIC</h1>
        <div  className='x'>
        <h1 >Welcome to our site </h1>
        <p>Authenticate and Benefit from our services</p>
        <div className='hero-btns'>
        <Link to='sign-up'>
     <button className='btn'>get started</button>

</ Link>
        </div>
       
        
        </div>

        </>
    );
}