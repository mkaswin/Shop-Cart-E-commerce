import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../componets/SelectedCategory';

const title = (
  <h2>Search Your One from <span>Thousand</span> of Products</h2>


)
const desc = "we have the largest collection of products "
const bannerList = [ 
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers", },
   { iconName: "icofont-notification", text: "More then 2000 Marchent", },
    { iconName: "icofont-globe", text: "Buy Anything Online", },
   ];

const Banner = () => {
  const [searchinput, setsearchinput] = useState("")
  const [filterProducts, setfilterProducts] = useState(productData)
  // console.log(productData);
   
   const handlesearch =e =>{
    
    const searchFrom =e.target.value
    setsearchinput(searchFrom)

    const filtered = productData.filter((product)=>product.name.toLowerCase().includes(searchFrom.toLowerCase()))
    setfilterProducts(filtered)
   }
  return (
    <div className='banner-section style-4'>
      <div className="container">
        <div className="banner-content">
          {title}
          <form >
            <SelectedCategory select={'all'}/>
            <input type="text" name="search" id="search" placeholder='Search Your Products' value={searchinput} onChange={handlesearch} />
            <button type='submit'>
            <i class="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {
              searchinput && filterProducts.map((product,i)=><li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>)
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Banner