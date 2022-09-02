import React from 'react';
import './Card3.css'

function Card3() {
  return (
    <div className="body">
        <div className="main">
  <h1>Our Services</h1>
  <p className='para'> We are here to help You
  </p>
  <ul className='cards'>
    <li className='cards_item'>
      <div className='card'>
        <div className='card_image'><img  src={require("../../assets/images/image 10.png")} style={{height:260, width:390, objectFit:"contain"}}/></div>
       
      </div>
    </li>
    <li className='cards_item'>
      <div className="card">
      <div className='card_image'><img  src={require("../../assets/images/image 11.png")} style={{height:260, width:390, objectFit:"contain"}}/></div>
      </div>
    </li>
    <li className='cards_item'>
      <div className='card'>
      <div className='card_image'><img  src={require("../../assets/images/image 12.png")} style={{height:260, width:390, objectFit:"contain"}}/></div>
      </div>
    </li>
  </ul>
</div>


    </div>
  )
}

export default Card3