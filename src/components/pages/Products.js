import React from 'react';
import '../../App.css';
import image1 from '../../images/image1.jpg'

export default function Product () {

    
    return (
        <>
        <h1 className='products'></h1>

        <img  className='modif'
        src={image1} />

   
   <div > 
       <p  className= 'aaaaaa'  >This is the solution to manage and monitor your fixed assets</p>    <br/>
        <p className= 'aaa'>Reliable management of your company's assets and depreciation is a priority.</p>
   </div>
        
        <div className="xl">
                 <ul>  With our site you will have the ability of :
            <li>Managing the entries and exits of each of your assets</li>
            <li>The calculation of depreciation</li>
            <li>The generation of dashboards according to parameters that you determine</li>
            
            </ul> 
           
            </div>
       
        
        </>
    );
}