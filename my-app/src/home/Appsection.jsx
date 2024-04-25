import React from 'react'
import { Link } from 'react-router-dom'
const btnText ="sign up for free"
const title ="Shop anytime , anywhere"

const desc ="Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping"

const Appsection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
          <div className='section-header text-center'>
            <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
            <h2 className='title'>{title}</h2>
              <p>{desc}</p>
          </div>
          <div className='section-wrapper'>
            <ul className='lab-ul'>
              <li><a href='0'> <img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
              <li><a href='0'> <img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default Appsection