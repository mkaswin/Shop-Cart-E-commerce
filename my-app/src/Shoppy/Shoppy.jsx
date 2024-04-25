import React, { useState } from 'react'
import Page from '../componets/Page'
import data from "../products.json"
import ProductCart from '../Shoppy/ProductCart.jsx'

const showResults = "showing 01 -12 of 139 Results"

const Shoppy = () => {
  const [GridList, setGridList] = useState(true)
  const [products, setproducts] = useState(data)
  
  return (
    <div>
      <Page title=" our shop page" curpage="shop"/>
      {/* Shop page */}

     <div className='shop-page padding-tb'>
      <div className="container">
        <div className="row justify-content-center">
          <div className='col-lg-8 col-12'>
              <article>
                <div className='shop-title d-flex flex-warp justify-content-between'>
                  <p>
                      {showResults}
                  </p>
                    <div className={`product-view-mode ${GridList ? "gridActive" : listActive}`}>
                      <a className='grid' onClick={()=>setGridList(!GridList)} >
                        <i className='icofont-ghost'></i>
                      </a>
                      <a className='grid' onClick={()=>setGridList(!GridList)} >
                        <i className='icofont-listine-dots'></i>
                      </a>
          
                    </div>
                </div>
                <div>
                  <ProductCart GridList={GridList} products={products}/>
                </div>
              </article>
          </div>
          <div className='col-lg-4 col-12'>
              Right side side
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Shoppy