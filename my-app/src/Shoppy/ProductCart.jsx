import React from 'react'

const ProductCart = ({GridList,products}) => {
  console.log(products);
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {
        products.map((product,i)=>{
          <div key={i} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>
              {/* products images */}
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <h1>{product.price}</h1>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default ProductCart