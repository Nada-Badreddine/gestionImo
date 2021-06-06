import React from 'react';
import '../../App.css';
import image1 from '../../images/image1.jpg'

export default function Product () {

    
    return (
        <>
        <h1 className='products'></h1>

        <img  className='modif'
        src={image1} />

   
  
       
        <p className='aaaaaa'>The solution to manage and monitor your fixed assets</p>
        <p>Reliable management of your company's assets and depreciation is a priority.</p>
        <p>with our site you will have the ability of :</p>
        <p>Managing the entries and exits of each of your assets</p>
        <p>The calculation of depreciation</p>
        <p>The generation of dashboards according to parameters that you determine</p>
        
        </>
    );
}