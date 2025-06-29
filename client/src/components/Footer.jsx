import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h4>@SB Foods - Have a Delicious Food at Delightful Price...</h4>
      <div className="footer-body">

        <ul>
          <li>Biryani</li>
          <li>Pizza</li>
        </ul>

        <ul>
          <li>Beverages</li>
          <li>Burger</li>
        </ul>

        <ul>
          <li>Sweets</li>
          <li>Full Meals</li>
        </ul>

        <ul>
          <li>Fried Rice</li>
          <li>Chicken Starters</li>
        </ul>

        <ul>
          <li>Sandwich</li>
          <li>BBQ</li>
        </ul>


      </div>
      <div className="footer-bottom">
        <p>@ sb-foods.com ~ All rights reserved</p>
        <p>Thanks for visiting our Page</p>
        
      </div>
    </div>
  )
}

export default Footer